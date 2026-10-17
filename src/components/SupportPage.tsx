// Reusa los estilos de la pagina de terminos: son selectores de elemento
// (main, article, section, h2), asi que alcanza con repetir la estructura.
import './TermsPage.css';

function SupportPage() {
  return (
    <main>
      <article aria-labelledby="support-title">
        <img src="/assets/cookies-factory-logo.png" alt="Cookies The Factory Logo" />
        <header>
          <h1 id="support-title">Soporte</h1>
          <p>Centro de ayuda de la app Cookies The Factory</p>
        </header>

        <section aria-labelledby="contacto">
          <h2 id="contacto">Contactanos</h2>
          <ul>
            <li><strong>Email:</strong> <a href="mailto:cookiesthefactory@gmail.com">cookiesthefactory@gmail.com</a></li>
            <li><strong>WhatsApp:</strong> <a href="https://wa.me/5492236764869">+54 9 223 676-4869</a></li>
            <li><strong>Dirección:</strong> <address>Avellaneda 2671, Mar del Plata, Argentina (CP 7600)</address></li>
            <li><strong>Horario de atención:</strong> lunes a viernes, 9 a 18 h (GMT-3)</li>
          </ul>
          <p>Respondemos dentro de las 48 horas hábiles.</p>
        </section>

        <section aria-labelledby="puntos">
          <h2 id="puntos">¿Cómo sumo Cookie Points?</h2>
          <p>Cada vez que comprás en el local, escaneá con la app el código QR que te muestra el personal. Los puntos se acreditan al instante: 1 cookie equivale a 1 Cookie Point.</p>
        </section>

        <section aria-labelledby="qr-fallido">
          <h2 id="qr-fallido">Escaneé el QR y no se sumaron mis puntos</h2>
          <p>Verificá que tengas conexión a internet y volvé a entrar a la app. Si después de unos minutos los puntos siguen sin aparecer, escribinos con la fecha, el local y el monto de la compra y los acreditamos manualmente.</p>
        </section>

        <section aria-labelledby="premios">
          <h2 id="premios">¿Cómo canjeo mis premios?</h2>
          <p>Entrá a la sección <em>Tienda</em>, elegí el premio que quieras y confirmá el canje. Mostrá el comprobante en el local para retirarlo.</p>
        </section>

        <section aria-labelledby="ranking">
          <h2 id="ranking">¿Cómo funciona el ranking mensual?</h2>
          <p>Todos los meses arranca un ranking nuevo con quienes más puntos sumaron, y los tres primeros se llevan un premio que anunciamos dentro de la app. El ranking cuenta lo que ganaste en el mes, no tu saldo, así que todos empiezan de cero el día 1.</p>
        </section>

        <section aria-labelledby="password">
          <h2 id="password">Olvidé mi contraseña</h2>
          <p>En la pantalla de inicio de sesión tocá «¿Olvidaste tu contraseña?» y seguí los pasos que te enviamos por email.</p>
        </section>

        <section aria-labelledby="camara">
          <h2 id="camara">¿Por qué la app pide acceso a la cámara?</h2>
          <p>Únicamente para escanear el código QR de Cookie Points en el local. No guardamos ni subimos ninguna foto.</p>
        </section>

        <section aria-labelledby="baja">
          <h2 id="baja">Eliminar mi cuenta</h2>
          <p>Podés borrar tu cuenta y todos tus datos desde la propia app, en <em>Ajustes → Borrar cuenta</em>. Es inmediato y no hace falta escribirnos.</p>
          <p>Si preferís que lo hagamos nosotros, escribinos a <a href="mailto:cookiesthefactory@gmail.com">cookiesthefactory@gmail.com</a> desde el email con el que te registraste y lo procesamos dentro de los 30 días.</p>
        </section>

        <footer>
          <section aria-labelledby="legales">
            <h2 id="legales">Legales</h2>
            <p>Podés consultar los <a href="/">Términos y Condiciones y la Política de Privacidad</a>.</p>
          </section>
        </footer>
      </article>
    </main>
  );
}

export default SupportPage;
