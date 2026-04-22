import React from "react";
import "../styles/whatsapp-float.css";

const WHATSAPP_NUMBER = "5493863510790";
const WHATSAPP_TEXT = "¡Hola! Quiero hacer mi pedido...";

function WhatsAppFloat() {
  const href = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(
    WHATSAPP_TEXT
  )}`;

  return (
    <a
      className="whatsapp-float"
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Abrir WhatsApp para hacer pedido"
      title="Hacer pedido por WhatsApp"
    >
      <svg viewBox="0 0 24 24" aria-hidden="true" className="whatsapp-icon">
        <path d="M20.5 3.5A11.7 11.7 0 0 0 2.3 17.4L1 23l5.7-1.3A11.7 11.7 0 0 0 12 23a11.7 11.7 0 0 0 8.5-19.5Zm-8.5 17.4c-1.7 0-3.4-.5-4.8-1.4l-.3-.2-3.4.8.8-3.3-.2-.3A8.8 8.8 0 0 1 3.3 12a8.7 8.7 0 1 1 8.7 8.9Zm4.8-6.6c-.3-.2-1.8-.9-2-1-.3-.1-.5-.2-.8.1l-.6.8c-.2.2-.4.3-.7.2-.3-.2-1.2-.4-2.2-1.3-.8-.7-1.3-1.5-1.4-1.8-.2-.3 0-.4.1-.6l.3-.3.4-.5c.1-.2.1-.4 0-.6l-.8-2c-.2-.5-.5-.4-.8-.4h-.7c-.2 0-.6.1-.9.4-.3.3-1.1 1.1-1.1 2.6 0 1.6 1.1 3 1.3 3.2.1.2 2.2 3.4 5.3 4.7.7.4 1.3.5 1.8.6.7.2 1.4.2 1.9.1.6-.1 1.8-.8 2-1.5.3-.7.3-1.4.2-1.5-.1-.1-.3-.2-.6-.4Z" />
      </svg>
    </a>
  );
}

export default WhatsAppFloat;
