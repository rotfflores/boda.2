"use client";

import { FormEvent, useEffect, useState } from "react";

const weddingDate = new Date("2026-10-18T17:00:00-06:00").getTime();

function Countdown() {
  const [time, setTime] = useState({ days: 0, hours: 0, minutes: 0, seconds: 0 });

  useEffect(() => {
    const update = () => {
      const distance = Math.max(0, weddingDate - Date.now());
      setTime({
        days: Math.floor(distance / 86_400_000),
        hours: Math.floor((distance / 3_600_000) % 24),
        minutes: Math.floor((distance / 60_000) % 60),
        seconds: Math.floor((distance / 1_000) % 60),
      });
    };
    update();
    const id = window.setInterval(update, 1000);
    return () => window.clearInterval(id);
  }, []);

  return (
    <div className="countdown" aria-label="Cuenta regresiva para la boda">
      {Object.entries(time).map(([label, value]) => (
        <div className="countdown-unit" key={label}>
          <strong>{String(value).padStart(2, "0")}</strong>
          <span>{{ days: "días", hours: "horas", minutes: "min", seconds: "seg" }[label]}</span>
        </div>
      ))}
    </div>
  );
}

export default function Home() {
  const [sent, setSent] = useState(false);
  const submit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setSent(true);
  };

  return (
    <main>
      <section className="hero" id="inicio">
        <div className="leaf leaf-one" aria-hidden="true" />
        <div className="leaf leaf-two" aria-hidden="true" />
        <nav className="nav" aria-label="Navegación principal">
          <a className="monogram" href="#inicio" aria-label="Inicio">V<span>&</span>S</a>
          <div className="nav-links">
            <a href="#historia">Nuestra historia</a>
            <a href="#detalles">Detalles</a>
            <a href="#rsvp">Confirmar</a>
          </div>
        </nav>

        <div className="hero-content">
          <p className="eyebrow">Nuestra boda · 18 de octubre de 2026</p>
          <h1><span>Valentina</span><em>&</em><span>Sebastián</span></h1>
          <p className="hero-copy">Hay momentos en la vida que son especiales por sí solos,<br />pero compartirlos con ustedes los vuelve inolvidables.</p>
          <a className="text-link" href="#detalles">Descubre los detalles <span>↓</span></a>
        </div>
        <p className="hero-place">San Miguel de Allende<br /><span>Guanajuato, México</span></p>
      </section>

      <section className="intro section" id="historia">
        <p className="eyebrow">Después de 2,847 días juntos</p>
        <h2>El siguiente capítulo<br />comienza aquí.</h2>
        <div className="ornament"><span>◆</span></div>
        <p className="lead">Con el corazón lleno de alegría, queremos invitarte a celebrar el día en que elegimos seguir caminando juntos, para siempre.</p>
        <blockquote>“Y de pronto, todas las canciones de amor<br />tenían sentido.”</blockquote>
      </section>

      <section className="date-section" aria-label="Fecha de la boda">
        <div className="date-card">
          <p className="eyebrow">Reserva la fecha</p>
          <div className="date-lockup"><span>DOM</span><strong>18</strong><span>OCT<br />2026</span></div>
          <p>A las cinco de la tarde</p>
          <Countdown />
          <a className="button button-light" href="https://calendar.google.com/calendar/render?action=TEMPLATE&text=Boda%20Valentina%20y%20Sebastian&dates=20261018T230000Z/20261019T050000Z&location=San%20Miguel%20de%20Allende" target="_blank" rel="noreferrer">Agregar al calendario</a>
        </div>
      </section>

      <section className="details section" id="detalles">
        <div className="section-heading">
          <p className="eyebrow">Celebremos juntos</p>
          <h2>Los detalles del día</h2>
        </div>
        <div className="detail-grid">
          <article>
            <span className="number">01</span>
            <p className="eyebrow">Ceremonia · 17:00 h</p>
            <h3>Templo de San Francisco</h3>
            <p>San Francisco 21, Zona Centro<br />San Miguel de Allende</p>
            <a className="text-link" href="https://maps.google.com/?q=Templo+de+San+Francisco+San+Miguel+de+Allende" target="_blank" rel="noreferrer">Ver ubicación <span>↗</span></a>
          </article>
          <article>
            <span className="number">02</span>
            <p className="eyebrow">Recepción · 19:00 h</p>
            <h3>Casa Adela</h3>
            <p>Camino a Alcocer km 2.2<br />San Miguel de Allende</p>
            <a className="text-link" href="https://maps.google.com/?q=Casa+Adela+San+Miguel+de+Allende" target="_blank" rel="noreferrer">Ver ubicación <span>↗</span></a>
          </article>
        </div>
      </section>

      <section className="itinerary section">
        <p className="eyebrow">Un día para recordar</p>
        <h2>Nuestro itinerario</h2>
        <div className="timeline">
          {[["17:00", "Ceremonia"], ["18:15", "Cóctel"], ["19:30", "Cena"], ["21:00", "Primer baile"], ["21:30", "Fiesta"]].map(([time, item]) => (
            <div key={time}><span>{time}</span><i aria-hidden="true" /><strong>{item}</strong></div>
          ))}
        </div>
      </section>

      <section className="dress-gifts section">
        <div>
          <p className="eyebrow">Código de vestimenta</p>
          <h2>Formal de jardín</h2>
          <p>Vestido largo o midi · Traje oscuro<br />Celebremos con estilo y comodidad.</p>
          <div className="swatches" aria-label="Paleta sugerida"><i /><i /><i /><i /></div>
          <small>El blanco está reservado para la novia.</small>
        </div>
        <div>
          <p className="eyebrow">Mesa de regalos</p>
          <h2>Tu presencia es el mejor regalo</h2>
          <p>Si además deseas tener un detalle con nosotros, hemos preparado una mesa de regalos.</p>
          <a className="button" href="#rsvp">Ver mesa de regalos</a>
        </div>
      </section>

      <section className="rsvp section" id="rsvp">
        <div className="rsvp-copy">
          <p className="eyebrow">Répondez s’il vous plaît</p>
          <h2>¿Nos acompañas?</h2>
          <p>Por favor confirma tu asistencia antes del 18 de septiembre de 2026. Hemos reservado <strong>2 lugares</strong> en tu honor.</p>
          <p className="contact">¿Dudas? Escríbenos<br /><a href="tel:+524151234567">+52 415 123 4567</a></p>
        </div>
        {sent ? (
          <div className="thanks" role="status"><span>V&S</span><h3>¡Gracias por confirmar!</h3><p>Tu respuesta quedó registrada. Nos emociona celebrar contigo.</p></div>
        ) : (
          <form onSubmit={submit}>
            <label>Nombre completo<input required name="name" placeholder="Escribe tu nombre" /></label>
            <fieldset><legend>¿Podrás acompañarnos?</legend><label><input required type="radio" name="attending" value="yes" /> Sí, ahí estaré</label><label><input type="radio" name="attending" value="no" /> No podré asistir</label></fieldset>
            <label>Número de asistentes<select name="guests" defaultValue="2"><option>1</option><option>2</option></select></label>
            <label>Mensaje para los novios<textarea name="message" placeholder="Déjanos unas palabras…" rows={3} /></label>
            <button className="button" type="submit">Confirmar asistencia</button>
          </form>
        )}
      </section>

      <footer>
        <p>Gracias por ser parte de nuestra historia.</p>
        <div>V <span>&</span> S</div>
        <p>18 · 10 · 2026</p>
      </footer>
    </main>
  );
}
