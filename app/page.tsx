import { ContactForm } from "./contact-form";

const capabilities = [
  {
    index: "01",
    title: "Inteligencia Artificial y Transformación Digital",
    description:
      "Capacidades para comprender, adoptar y aplicar nuevas tecnologías.",
    video: "/media/capability-ai.mp4",
    poster: "/media/capability-ai.jpg",
  },
  {
    index: "02",
    title: "Liderazgo y Gestión",
    description:
      "Herramientas para liderar personas, decisiones y procesos de cambio.",
    video: "/media/capability-leadership.mp4",
    poster: "/media/capability-leadership.jpg",
  },
  {
    index: "03",
    title: "Equipos de Alto Desempeño",
    description:
      "Prácticas para fortalecer la colaboración y los resultados colectivos.",
    video: "/media/capability-teams.mp4",
    poster: "/media/capability-teams.jpg",
  },
  {
    index: "04",
    title: "Capacitación Técnica Especializada",
    description:
      "Formación específica para cada sector, función y organización.",
    video: "/media/capability-technical.mp4",
    poster: "/media/capability-technical.jpg",
  },
];

const methodology = [
  {
    index: "01",
    title: "Detección de necesidades",
    text: "Escuchamos el desafío, el contexto y los resultados que la organización necesita alcanzar.",
  },
  {
    index: "02",
    title: "Propuesta estratégica",
    text: "Definimos objetivos, contenidos, modalidad y criterios de evaluación.",
  },
  {
    index: "03",
    title: "Ejecución técnica",
    text: "Implementamos la experiencia con especialistas seleccionados para cada desafío.",
  },
  {
    index: "04",
    title: "Evaluación de impacto",
    text: "Medimos resultados, identificamos aprendizajes y definimos los próximos pasos.",
  },
];

const modalities = [
  {
    title: "Virtual sincrónica",
    text: "Sesiones en vivo con un facilitador experto. Ideal para equipos distribuidos que necesitan interacción y una experiencia compartida.",
  },
  {
    title: "Virtual autogestionada",
    text: "Contenidos disponibles a demanda para avanzar al propio ritmo, desde cualquier lugar y a través de nuestra plataforma.",
  },
  {
    title: "Híbrida",
    text: "Encuentros virtuales en vivo e instancias autogestionadas. Especialmente adecuada para programas de mediana y larga duración.",
  },
  {
    title: "Semipresencial",
    text: "Alterna sesiones presenciales con actividades virtuales. La presencialidad se reserva para los momentos de mayor valor pedagógico.",
  },
];

const desktopNav = [
  ["Qué hacemos", "#que-hacemos"],
  ["Cómo trabajamos", "#metodologia"],
  ["Modalidades", "#modalidades"],
  ["Consejo", "#consejo"],
  ["Contacto", "#contacto"],
];

export default function Home() {
  return (
    <>
      <a className="skip-link" href="#contenido">
        Saltar al contenido
      </a>

      <header className="site-header">
        <a className="wordmark" href="#inicio" aria-label="TrainLab, inicio">
          TrainLab
        </a>

        <details className="site-menu">
          <summary aria-label="Abrir navegación">
            <i aria-hidden="true" />
          </summary>
          <nav aria-label="Navegación principal">
            {desktopNav.map(([label, href]) => (
              <a key={href} href={href}>
                {label}
              </a>
            ))}
          </nav>
        </details>
      </header>

      <main id="contenido">
        <section className="hero" id="inicio" aria-labelledby="hero-title">
          <div
            className="hero-media media-frame"
            style={{ backgroundImage: "url('/media/metamorphosis-poster.jpg')" }}
          >
            <video
              autoPlay
              muted
              loop
              playsInline
              preload="metadata"
              poster="/media/metamorphosis-poster.jpg"
              aria-hidden="true"
              tabIndex={-1}
            >
              <source src="/media/metamorphosis.mp4" type="video/mp4" />
            </video>
            <div className="media-shade" />
          </div>

          <div className="hero-content section-shell">
            <p className="eyebrow">Laboratorio de capacidades</p>
            <h1 id="hero-title">
              La IA cambió el mundo.
              <br />
              Tu equipo, <strong>¿está listo?</strong>
            </h1>
            <p className="hero-lede">
              Desarrollamos las capacidades que las organizaciones necesitan
              para competir en entornos de transformación acelerada.
            </p>
            <a className="pill pill-light" href="#que-es">
              Conocé TrainLab <span aria-hidden="true">↓</span>
            </a>
          </div>

          <p className="hero-counter" aria-hidden="true">
            01 / 07
          </p>
        </section>

        <section className="intro section-shell" id="que-es" aria-labelledby="intro-title">
          <div className="section-meta">
            <p className="eyebrow">Qué es TrainLab</p>
            <p className="section-number">02</p>
          </div>
          <div className="intro-copy">
            <h2 id="intro-title">
              Comprender para
              <br />
              poder <strong>operar.</strong>
            </h2>
            <div className="intro-body">
              <p>
                La disrupción tecnológica está transformando nuestra forma de
                trabajar, decidir y relacionarnos. Las herramientas cambian,
                pero son las personas y los equipos quienes deben aprender a
                utilizarlas.
              </p>
              <p>
                TrainLab diseña soluciones de formación, capacitación y
                entrenamiento para organizaciones, equipos y personas. Cada
                propuesta parte de tu sector, tu cultura y tu momento: se
                adapta a tu realidad, no al revés.
              </p>
            </div>
          </div>
        </section>

        <section className="capabilities" id="que-hacemos" aria-labelledby="capabilities-title">
          <div className="section-shell capabilities-heading">
            <div className="section-meta section-meta-dark">
              <p className="eyebrow">Qué hacemos</p>
              <p className="section-number">03</p>
            </div>
            <h2 id="capabilities-title">
              No vendemos cursos.
              <br />
              Desarrollamos <strong>capacidades.</strong>
            </h2>
            <p className="capabilities-lede">
              Programas estándar o a medida que integran conocimientos
              técnicos, nuevas tecnologías y habilidades humanas.
            </p>
          </div>

          <div className="capability-grid">
            {capabilities.map((capability) => (
              <article className="capability-card" key={capability.index}>
                <div
                  className="capability-media media-frame"
                  style={{ backgroundImage: `url('${capability.poster}')` }}
                >
                  <video
                    autoPlay
                    muted
                    loop
                    playsInline
                    preload="none"
                    poster={capability.poster}
                    aria-hidden="true"
                    tabIndex={-1}
                  >
                    <source src={capability.video} type="video/mp4" />
                  </video>
                  <div className="media-shade" />
                </div>
                <div className="capability-content">
                  <p className="card-index">{capability.index}</p>
                  <div>
                    <h3>{capability.title}</h3>
                    <p>{capability.description}</p>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </section>

        <section className="methodology section-shell" id="metodologia" aria-labelledby="methodology-title">
          <div className="section-meta">
            <p className="eyebrow">Cómo trabajamos</p>
            <p className="section-number">04</p>
          </div>
          <div className="methodology-heading">
            <h2 id="methodology-title">
              Una metodología diseñada
              <br />
              alrededor de <strong>tu realidad.</strong>
            </h2>
          </div>
          <ol className="methodology-list">
            {methodology.map((step) => (
              <li key={step.index}>
                <p className="step-index">{step.index}</p>
                <h3>{step.title}</h3>
                <p>{step.text}</p>
              </li>
            ))}
          </ol>
        </section>

        <section className="difference" aria-labelledby="difference-title">
          <div className="difference-image" role="img" aria-label="Detalle abstracto de una mariposa en transformación" />
          <div className="difference-copy section-shell">
            <div className="section-meta">
              <p className="eyebrow">Por qué TrainLab</p>
              <p className="section-number">05</p>
            </div>
            <h2 id="difference-title">
              Experiencia para
              <br />
              lo que <strong>viene.</strong>
            </h2>
            <div className="difference-points">
              <article>
                <h3>Diseñado con vos</h3>
                <p>
                  Construimos cada propuesta a partir de las necesidades, la
                  cultura y los objetivos de tu organización.
                </p>
              </article>
              <article>
                <h3>Experiencia vigente</h3>
                <p>
                  Una red de expertos que combina trayectoria profesional,
                  conocimiento técnico y una visión actual del cambio.
                </p>
              </article>
              <article>
                <h3>Aplicación e impacto</h3>
                <p>
                  Excelencia pedagógica, aplicabilidad inmediata y criterios
                  claros para evaluar cada programa.
                </p>
              </article>
            </div>
          </div>
        </section>

        <section className="modalities section-shell" id="modalidades" aria-labelledby="modalities-title">
          <div className="section-meta">
            <p className="eyebrow">Modalidades</p>
            <p className="section-number">06</p>
          </div>
          <div className="modalities-heading">
            <h2 id="modalities-title">
              Distintas formas de aprender.
              <br />
              Una misma <strong>exigencia.</strong>
            </h2>
            <p>
              Elegimos la modalidad que mejor acompaña los objetivos, los
              tiempos y la escala de cada organización.
            </p>
          </div>
          <div className="modality-list">
            {modalities.map((modality, index) => (
              <details key={modality.title} name="modalidades">
                <summary>
                  <span className="modality-index">0{index + 1}</span>
                  <span>{modality.title}</span>
                  <span className="modality-icon" aria-hidden="true">+</span>
                </summary>
                <p>{modality.text}</p>
              </details>
            ))}
          </div>
        </section>

        <section className="council section-shell" id="consejo" aria-labelledby="council-title">
          <div className="section-meta section-meta-dark">
            <p className="eyebrow">Consejo Asesor y Académico</p>
            <p className="section-number">07</p>
          </div>
          <div className="council-heading">
            <h2 id="council-title">
              Trayectoria, conocimiento
              <br />
              y visión de <strong>futuro.</strong>
            </h2>
          </div>
          <div className="council-grid">
            <article>
              <div className="portrait-frame portrait-federico">
                <img src="/media/federico-pinedo.jpeg" alt="Federico Pinedo" width="160" height="160" />
              </div>
              <div className="council-person-copy">
                <p className="council-role">Consejo Asesor</p>
                <h3>Federico Pinedo</h3>
                <p>
                  Abogado especializado en telecomunicaciones, políticas
                  públicas y competencia. Profesor de posgrado, exlegislador y
                  sherpa argentino ante el G20.
                </p>
              </div>
            </article>
            <article>
              <div className="portrait-frame portrait-alejandro">
                <img src="/media/alejandro-marchionna.jpeg" alt="Alejandro Marchionna Faré" width="160" height="160" />
              </div>
              <div className="council-person-copy">
                <p className="council-role">Consejo Académico</p>
                <h3>Alejandro Marchionna Faré</h3>
                <p>
                  Consultor en estrategia y gobierno corporativo, director de
                  empresas y profesor de posgrado. Director Académico del IGEP,
                  MBA por Harvard y Doctor en Dirección de Empresas.
                </p>
              </div>
            </article>
          </div>
        </section>

        <section className="closing" id="cierre" aria-labelledby="closing-title">
          <div
            className="closing-media media-frame"
            style={{ backgroundImage: "url('/media/metamorphosis-poster.jpg')" }}
          >
            <div className="media-shade" />
          </div>
          <div className="closing-content section-shell">
            <p className="eyebrow">El próximo paso</p>
            <h2 id="closing-title">
              El cambio
              <br />
              ya <strong>empezó.</strong>
            </h2>
            <p>
              La formación es una inversión estratégica en la vigencia y
              competitividad de tu capital humano.
            </p>
            <p className="closing-line">
              Contanos qué necesitás. <strong>Diseñamos el programa.</strong>
            </p>
          </div>
        </section>

        <section className="contact section-shell" id="contacto" aria-labelledby="contact-title">
          <div className="section-meta section-meta-dark">
            <p className="eyebrow">Contacto</p>
            <p className="section-number">08</p>
          </div>
          <div className="contact-layout">
            <div className="contact-intro">
              <h2 id="contact-title">
                Hablemos de
                <br />
                lo que <strong>sigue.</strong>
              </h2>
              <p>
                Contanos qué necesita tu organización. Diseñamos una propuesta
                a la medida de su contexto, sus equipos y sus objetivos.
              </p>
              <address className="contact-data">
                <div>
                  <span>Teléfono</span>
                  <a href="tel:+541155550147">+54 11 5555-0147</a>
                </div>
                <div>
                  <span>Dirección</span>
                  <p>Av. del Libertador 1200<br />Ciudad Autónoma de Buenos Aires</p>
                </div>
              </address>
            </div>
            <ContactForm />
          </div>
        </section>
      </main>

      <footer className="site-footer section-shell">
        <a className="wordmark" href="#inicio">
          TrainLab
        </a>
        <p>Formación para un mundo en transformación.</p>
        <a href="#inicio">Volver al inicio ↑</a>
      </footer>
    </>
  );
}
