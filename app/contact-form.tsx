"use client";

import { FormEvent, useState } from "react";

export function ContactForm() {
  const [sent, setSent] = useState(false);

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setSent(true);
  }

  if (sent) {
    return (
      <div className="form-success" role="status" aria-live="polite">
        <p className="eyebrow">Mensaje preparado</p>
        <h3>Gracias por contactarnos.</h3>
        <p>
          El envío se conectará al correo definitivo de TrainLab antes de la
          publicación.
        </p>
        <button type="button" onClick={() => setSent(false)}>
          Volver al formulario
        </button>
      </div>
    );
  }

  return (
    <form className="contact-form" onSubmit={handleSubmit}>
      <div className="field-row">
        <label>
          <span>Nombre y apellido</span>
          <input type="text" name="nombre" autoComplete="name" required />
        </label>
        <label>
          <span>Organización</span>
          <input type="text" name="organizacion" autoComplete="organization" />
        </label>
      </div>
      <label>
        <span>Email</span>
        <input type="email" name="email" autoComplete="email" required />
      </label>
      <label>
        <span>¿Qué necesita tu organización?</span>
        <textarea name="mensaje" rows={4} required />
      </label>
      <button className="submit-button" type="submit">
        Enviar consulta
      </button>
    </form>
  );
}
