import { Roboto } from "next/font/google";
import Button from "@/components/Button";
import Paragraph from "@/components/Paragraph";
import { PRAYERS } from "data";

const roboto = Roboto({
  weight: "400",
  subsets: ["latin"],
});

export async function generateStaticParams() {
  return PRAYERS.map((prayer) => ({ page: prayer.page }));
}

export default function Page({ params }: { params: { page: string } }) {
  const prayer = PRAYERS.find((p) => p.page === params.page);
  if (!prayer) return <div></div>;

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
      <Button text="Regresar" url="/oracion" />
    </main>
  );
}
