import Button from "@/components/Button";
import Paragraph from "@/components/Paragraph";
import { PRAYERS } from "data";
import { getSlug } from "@/helpers/slug";

export async function generateStaticParams() {
  return PRAYERS.map((prayer) => ({ slug: getSlug(prayer) }));
}

export default function Page({ params }: { params: { slug: string } }) {
  const prayerIndex = PRAYERS.findIndex((p) => getSlug(p) === params.slug);
  const prayer = PRAYERS[prayerIndex];
  if (!prayer) return <div></div>;

  const prevPrayer = PRAYERS[prayerIndex - 1];
  const nextPrayer = PRAYERS[prayerIndex + 1];

  return (
    <main className="flex min-h-screen flex-col items-center px-6 pt-16 pb-12 sm:p-12 lg:p-24 bg-bg text-text">
      <h1 className="text-2xl font-semibold mb-1">{prayer.title}</h1>
      <p className="text-text-muted text-sm mb-6">{prayer.page}</p>
      {prayer.paragraphs.map((p, i) => (
        <Paragraph key={i} align="left">
          {p.map((line, j) => (
            <p key={j}>{line}</p>
          ))}
        </Paragraph>
      ))}

      <div className="flex space-x-4 mt-4">
        {prevPrayer && (
          <Button text="←" size="sm" url={`/oracion/${getSlug(prevPrayer)}`} />
        )}
        <Button text="Regresar" url="/oracion" />
        {nextPrayer && (
          <Button text="→" size="sm" url={`/oracion/${getSlug(nextPrayer)}`} />
        )}
      </div>
    </main>
  );
}
