import { Link } from "react-router-dom";
import LegalLayout, { LegalSection } from "@/components/LegalLayout";
import { LEGAL } from "@/lib/legal";

const Strong = ({ children }: { children: React.ReactNode }) => (
  <strong className="text-foreground font-medium">{children}</strong>
);

const AvisoLegal = () => (
  <LegalLayout title="Aviso legal" docTitle="Aviso legal">
    <LegalSection title="1. Datos identificativos">
      <p>
        En cumplimiento de la Ley 34/2002, de Servicios de la Sociedad de la Información y de Comercio Electrónico
        (LSSI-CE), te informamos de los datos del titular de esta web:
      </p>
      <ul className="space-y-1.5">
        <li><Strong>Titular:</Strong> {LEGAL.titular}</li>
        <li><Strong>Nombre comercial:</Strong> {LEGAL.marca}</li>
        <li><Strong>Actividad:</Strong> intermediación e importación de vehículos desde Alemania</li>
        <li><Strong>Correo electrónico:</Strong> <a href={`mailto:${LEGAL.email}`} className="text-primary hover:underline">{LEGAL.email}</a></li>
        <li><Strong>Teléfono:</Strong> {LEGAL.telefono}</li>
        <li><Strong>Sitio web:</Strong> {LEGAL.web}</li>
      </ul>
    </LegalSection>

    <LegalSection title="2. Objeto y condiciones de uso">
      <p>
        Esta web tiene como finalidad informar sobre los servicios de {LEGAL.marca} y permitir que los interesados
        soliciten la búsqueda de un vehículo. El acceso es gratuito y no obliga a contratar ningún servicio.
      </p>
      <p>
        Al navegar por la web te comprometes a hacer un uso adecuado de sus contenidos y a no emplearlos para
        actividades ilícitas o contrarias a la buena fe.
      </p>
    </LegalSection>

    <LegalSection title="3. Información sobre vehículos y precios">
      <p>
        Los casos, ahorros y plazos que mostramos corresponden a operaciones reales y tienen carácter orientativo. Cada
        vehículo y cada importación son distintos, por lo que el precio final, el ahorro y el plazo de entrega se
        concretan en el presupuesto personalizado que te enviamos. Ningún contenido de esta web constituye una oferta
        vinculante.
      </p>
    </LegalSection>

    <LegalSection title="4. Propiedad intelectual e industrial">
      <p>
        Los textos, el diseño, el logotipo y las fotografías propias de esta web pertenecen a {LEGAL.marca} o se usan con
        autorización. Queda prohibida su reproducción, distribución o modificación sin permiso previo por escrito. Las
        marcas de vehículos citadas pertenecen a sus respectivos propietarios y se mencionan únicamente con fines
        descriptivos.
      </p>
    </LegalSection>

    <LegalSection title="5. Responsabilidad">
      <p>
        Trabajamos para que la información de la web sea correcta y esté actualizada, pero no podemos garantizar la
        ausencia total de errores ni la disponibilidad continua de la página. {LEGAL.marca} no se responsabiliza del
        contenido de las webs externas a las que se pueda acceder mediante enlaces.
      </p>
    </LegalSection>

    <LegalSection title="6. Protección de datos">
      <p>
        El tratamiento de los datos personales que nos facilitas se explica en nuestra{" "}
        <Link to="/privacidad" className="text-primary hover:underline">Política de privacidad</Link>.
      </p>
    </LegalSection>

    <LegalSection title="7. Legislación aplicable">
      <p>
        Este aviso legal se rige por la legislación española. Para cualquier controversia, las partes se someten a los
        juzgados y tribunales que correspondan conforme a la normativa vigente, incluida la de protección de
        consumidores y usuarios.
      </p>
    </LegalSection>
  </LegalLayout>
);

export default AvisoLegal;
