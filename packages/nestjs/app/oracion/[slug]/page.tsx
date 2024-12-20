import { Roboto } from "next/font/google";
import Button from "@/components/Button";
import Paragraph from "@/components/Paragraph";
import { PRAYERS } from "data";
import { getSlug } from "@/helpers/slug";

const roboto = Roboto({
  weight: "400",
  subsets: ["latin"],
});

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
    <main
      className={`flex min-h-screen flex-col items-center justify-center p-24 ${roboto.className}`}
    >
      <h1 className="text-2xl mb-4">
        {prayer.page} - {prayer.title}
      </h1>
      {prayer.paragraphs.map((p, i) => (
        <Paragraph key={i}>
          {p.map((line, j) => (
            <p key={j}>{line}</p>
          ))}
        </Paragraph>
      ))}

      <div className="flex space-x-4 mt-4">
        {prevPrayer && (
          <Button text="←" url={`/oracion/${getSlug(prevPrayer)}`} />
        )}
        <Button text="Regresar" url="/oracion" />
        {nextPrayer && (
          <Button text="→" url={`/oracion/${getSlug(nextPrayer)}`} />
        )}
      </div>
    </main>
  );
}
