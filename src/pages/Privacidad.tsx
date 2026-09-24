import LegalLayout, { LegalSection } from "@/components/LegalLayout";
import { LEGAL } from "@/lib/legal";

const Strong = ({ children }: { children: React.ReactNode }) => (
  <strong className="text-foreground font-medium">{children}</strong>
);

const Privacidad = () => (
  <LegalLayout title="Política de privacidad" docTitle="Política de privacidad">
    <p>
      En {LEGAL.marca} nos tomamos en serio la protección de tus datos. Aquí te explicamos, de forma clara, qué datos
      recogemos a través de esta web, para qué los usamos y qué derechos tienes, conforme al Reglamento General de
      Protección de Datos (RGPD) y a la Ley Orgánica 3/2018 de Protección de Datos Personales (LOPDGDD).
    </p>

    <LegalSection title="1. Responsable del tratamiento">
      <ul className="space-y-1.5">
        <li><Strong>Titular:</Strong> {LEGAL.titular}</li>
        <li><Strong>Nombre comercial:</Strong> {LEGAL.marca}</li>
        <li><Strong>Correo electrónico:</Strong> <a href={`mailto:${LEGAL.email}`} className="text-primary hover:underline">{LEGAL.email}</a></li>
        <li><Strong>Teléfono:</Strong> {LEGAL.telefono}</li>
      </ul>
    </LegalSection>

    <LegalSection title="2. Qué datos recogemos">
      <p>
        A través del formulario de solicitud de búsqueda recogemos los datos que tú nos facilitas: <Strong>nombre, correo
        electrónico, teléfono</Strong> y la información sobre el vehículo que buscas (marca, modelo, presupuesto, año, ciudad
        de entrega, extras y comentarios).
      </p>
      <p>
        Si nos escribes por WhatsApp o por correo, tratamos los datos que nos envíes en esa conversación.
      </p>
      <p>No solicitamos datos especialmente protegidos. Por favor, no los incluyas en los comentarios.</p>
    </LegalSection>

    <LegalSection title="3. Para qué usamos tus datos">
      <p>Usamos tus datos únicamente para:</p>
      <ul className="list-disc pl-5 space-y-1.5 marker:text-primary">
        <li>Responder a tu solicitud y ponernos en contacto contigo.</li>
        <li>Buscar el vehículo que nos pides y enviarte propuestas y presupuestos.</li>
        <li>Si decides contratar nuestros servicios, gestionar la compra, importación y entrega del vehículo.</li>
      </ul>
      <p>No utilizamos tus datos para enviarte publicidad ni tomamos decisiones automatizadas sobre ti.</p>
    </LegalSection>

    <LegalSection title="4. Base legal">
      <p>
        Tratamos tus datos porque <Strong>nos das tu consentimiento</Strong> al marcar la casilla del formulario y porque
        son necesarios para <Strong>atender tu petición antes de una posible contratación</Strong> (art. 6.1.a y 6.1.b del
        RGPD). Puedes retirar tu consentimiento en cualquier momento escribiéndonos.
      </p>
    </LegalSection>

    <LegalSection title="5. Cuánto tiempo los guardamos">
      <p>
        Conservamos tus datos mientras gestionamos tu solicitud. Si no llegas a contratar nuestros servicios, los
        eliminamos como máximo <Strong>12 meses</Strong> después de nuestro último contacto. Si contratas, los guardamos
        durante la relación comercial y el tiempo que exijan las obligaciones legales y fiscales.
      </p>
    </LegalSection>

    <LegalSection title="6. Con quién compartimos tus datos">
      <p>
        <Strong>No vendemos ni cedemos tus datos a terceros.</Strong> Para que la web funcione, utilizamos algunos
        proveedores que pueden acceder a ellos únicamente para prestarnos su servicio:
      </p>
      <ul className="list-disc pl-5 space-y-1.5 marker:text-primary">
        <li><Strong>FormSubmit</Strong>: servicio que nos hace llegar por correo los datos del formulario.</li>
        <li><Strong>Google (Gmail)</Strong>: correo electrónico donde recibimos y gestionamos las solicitudes.</li>
        <li><Strong>Vercel</Strong>: empresa que aloja esta página web y nos proporciona estadísticas anónimas de visitas.</li>
        <li><Strong>WhatsApp (Meta)</Strong>: solo si decides contactarnos por esa vía.</li>
      </ul>
      <p>
        Algunos de estos proveedores están ubicados fuera del Espacio Económico Europeo, principalmente en Estados
        Unidos. Estas transferencias se realizan con las garantías previstas en el RGPD, como las cláusulas
        contractuales tipo de la Comisión Europea o el Marco de Privacidad de Datos UE-EE. UU.
      </p>
      <p>
        Si contratas nuestros servicios, podremos compartir los datos estrictamente necesarios con el vendedor del
        vehículo, el transportista y la gestoría que tramita la matriculación en España.
      </p>
    </LegalSection>

    <LegalSection title="7. Tus derechos">
      <p>Puedes ejercer en cualquier momento tus derechos de:</p>
      <ul className="list-disc pl-5 space-y-1.5 marker:text-primary">
        <li><Strong>Acceso</Strong>: saber qué datos tuyos tenemos.</li>
        <li><Strong>Rectificación</Strong>: corregir datos incorrectos.</li>
        <li><Strong>Supresión</Strong>: pedir que borremos tus datos.</li>
        <li><Strong>Oposición y limitación</Strong> del tratamiento.</li>
        <li><Strong>Portabilidad</Strong>: recibir tus datos en un formato habitual.</li>
      </ul>
      <p>
        Para ello, escríbenos a <a href={`mailto:${LEGAL.email}`} className="text-primary hover:underline">{LEGAL.email}</a> indicando
        qué derecho quieres ejercer. Te responderemos en el plazo máximo de un mes.
      </p>
      <p>
        Si consideras que no hemos tratado tus datos correctamente, puedes presentar una reclamación ante la{" "}
        <a href="https://www.aepd.es" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">
          Agencia Española de Protección de Datos
        </a>.
      </p>
    </LegalSection>

    <LegalSection title="8. Cookies">
      <p>
        Esta web <Strong>no utiliza cookies de publicidad ni de análisis</Strong>. Para mostrar las tipografías, la página
        carga fuentes desde los servidores de Google Fonts, lo que implica que tu navegador comunica tu dirección IP a
        Google. Si en el futuro incorporamos cookies de análisis o publicidad, te pediremos permiso antes y
        actualizaremos esta política.
      </p>
      <p>
        Para saber cuántas personas visitan la web usamos <Strong>Vercel Web Analytics</Strong>, una herramienta de
        estadísticas que <Strong>no instala cookies</Strong> ni permite identificarte: solo nos muestra datos agregados y
        anónimos, como el número de visitas, las páginas vistas, el tipo de dispositivo o el país de procedencia.
      </p>
    </LegalSection>

    <LegalSection title="9. Seguridad y cambios">
      <p>
        Aplicamos medidas razonables para proteger tus datos: la web funciona con conexión cifrada (HTTPS) y el acceso
        a las solicitudes está limitado a nuestro equipo. Podemos actualizar esta política; la fecha de la última
        actualización aparece al principio de la página.
      </p>
    </LegalSection>
  </LegalLayout>
);

export default Privacidad;
