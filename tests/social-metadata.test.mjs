import assert from "node:assert/strict";
import { readFile } from "node:fs/promises";
import test from "node:test";
import vm from "node:vm";

const phrase = "El mundo cambió. ¿Tu equipo está listo?";
const layout = await readFile(new URL("../app/layout.tsx", import.meta.url), "utf8");
const metadataSource = layout
  .slice(layout.indexOf("export async function generateMetadata"), layout.indexOf("export default function RootLayout"))
  .replace("export async function generateMetadata(): Promise<Metadata>", "async function generateMetadata()");

for (const [host, protocol] of [["trainlab.vercel.app", "https"], ["localhost:3000", "http"]]) {
  test(`social metadata has exact copy and an absolute image URL on ${host}`, async () => {
    const context = vm.createContext({
      URL,
      headers: async () => new Map([["host", host]]),
    });
    const metadata = await vm.runInContext(`${metadataSource}\ngenerateMetadata()`, context);
    for (const channel of [metadata.openGraph, metadata.twitter]) {
      assert.equal(channel.title, phrase);
      assert.equal(channel.description, phrase);
      assert.equal(channel.images[0].alt, phrase);
      assert.equal(channel.images[0].url, `${protocol}://${host}/og.png?v=el-mundo-cambio`);
    }
    const png = await readFile(new URL("../public/og.png", import.meta.url));
    assert.equal(png.subarray(1, 4).toString(), "PNG");
    assert.equal(metadata.openGraph.images[0].width, png.readUInt32BE(16));
    assert.equal(metadata.openGraph.images[0].height, png.readUInt32BE(20));
  });
}
