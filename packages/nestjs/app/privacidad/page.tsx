import type { Metadata } from "next";
import Button from "@/components/Button";
import Paragraph from "@/components/Paragraph";

export const metadata: Metadata = {
  title: "Política de privacidad | Sexto Sello",
  description:
    "Cómo la aplicación y el sitio de Sexto Sello tratan la información de sus usuarios.",
};

const CONTACT_EMAIL = "christian.ramirez.gutierrez.92@gmail.com";

const Section = ({
  title,
  children,
}: {
  title: string;
  children: React.ReactNode;
}) => (
  <Paragraph align="left">
    <h2 className="text-lg font-semibold mb-2">{title}</h2>
    {children}
  </Paragraph>
);

export default function Page() {
  return (
    <main className="flex min-h-screen flex-col items-center px-6 pt-16 pb-12 sm:p-12 lg:p-24 bg-bg text-text">
      <h1 className="text-2xl font-semibold mb-1">Política de privacidad</h1>
      <p className="text-text-muted text-sm mb-6">
        Última actualización: 13 de octubre de 2026
      </p>

      <Paragraph align="left">
        <p>
          Esta política describe cómo la aplicación Sexto Sello para Android e
          iOS y el sitio sextosello.com tratan la información de sus usuarios.
        </p>
      </Paragraph>

      <Section title="Información que recopilamos">
        <p>
          Ninguna. No recopilamos, almacenamos ni compartimos información
          personal. La aplicación y el sitio no requieren cuenta y no usan
          publicidad, analítica ni herramientas de rastreo.
        </p>
      </Section>

      <Section title="Preferencias guardadas en tu dispositivo">
        <p>
          La aplicación guarda el tamaño de letra y el tema (claro u oscuro) que
          elijas, y el sitio guarda el tema en tu navegador. Estas preferencias
          se quedan en tu dispositivo, nunca se envían a nosotros y se eliminan
          al desinstalar la aplicación o borrar los datos del navegador.
        </p>
      </Section>

      <Section title="Actualizaciones de la aplicación">
        <p>
          Para recibir correcciones y contenido nuevo, la aplicación consulta el
          servicio de actualizaciones de Expo. Esa consulta incluye datos
          técnicos como la plataforma, la versión de la aplicación y un
          identificador aleatorio de instalación que no está vinculado a tu
          identidad. Consulta la{" "}
          <a href="https://expo.dev/privacy" className="text-accent underline">
            política de privacidad de Expo
          </a>
          .
        </p>
      </Section>

      <Section title="Permisos">
        <p>
          La aplicación no solicita acceso a tu cámara, micrófono, ubicación,
          contactos, fotos ni ningún otro permiso del dispositivo.
        </p>
      </Section>

      <Section title="Niños">
        <p>
          Como no recopilamos información personal de nadie, tampoco la
          recopilamos de menores de edad.
        </p>
      </Section>

      <Section title="Cambios a esta política">
        <p>
          Si esta política cambia, publicaremos la nueva versión en esta página
          con su fecha de actualización.
        </p>
      </Section>

      <Section title="Contacto">
        <p>
          Para cualquier pregunta sobre esta política, escríbenos a{" "}
          <a href={`mailto:${CONTACT_EMAIL}`} className="text-accent underline">
            {CONTACT_EMAIL}
          </a>
          .
        </p>
      </Section>

      <Button text="Regresar" url="/" />
    </main>
  );
}
