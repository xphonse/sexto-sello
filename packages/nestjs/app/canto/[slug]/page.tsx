import Button from "@/components/Button";
import Paragraph from "@/components/Paragraph";
import { CHOIRS } from "data";
import { getSlug } from "@/helpers/slug";

export async function generateStaticParams() {
  return CHOIRS.map((c) => ({ slug: getSlug(c) }));
}

export default function Page({ params }: { params: { slug: string } }) {
  const choirIndex = CHOIRS.findIndex((c) => getSlug(c) === params.slug);
  const choir = CHOIRS[choirIndex];
  if (!choir) return <div></div>;

  const prevChoir = CHOIRS[choirIndex - 1];
  const nextChoir = CHOIRS[choirIndex + 1];

  return (
    <main className="flex min-h-screen flex-col items-center justify-center p-24 bg-bg text-text">
      <h1 className="text-2xl font-semibold mb-1">{choir.title}</h1>
      <p className="text-text-muted text-sm mb-6">{choir.page}</p>
      {choir.paragraphs.map((p, i) => (
        <Paragraph key={i} align="center">
          {p.split("/n").map((t, j) => (
            <span key={j}>
              {t} <br />
            </span>
          ))}
        </Paragraph>
      ))}
      <div className="flex space-x-4 mt-4">
        {prevChoir && <Button text="←" url={`/canto/${getSlug(prevChoir)}`} />}
        <Button text="Regresar" url="/canto" />
        {nextChoir && <Button text="→" url={`/canto/${getSlug(nextChoir)}`} />}
      </div>
    </main>
  );
}
