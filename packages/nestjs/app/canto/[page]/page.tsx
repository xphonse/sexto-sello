import { Roboto } from "next/font/google";
import Button from "@/components/Button";
import Paragraph from "@/components/Paragraph";
import { CHOIRS } from "data";

const roboto = Roboto({
  weight: "400",
  subsets: ["latin"],
});

export async function generateStaticParams() {
  return CHOIRS.map((c) => ({ page: c.page }));
}

export default function Page({ params }: { params: { page: string } }) {
  const choirIndex = CHOIRS.findIndex((o) => o.page === params.page);
  const choir = CHOIRS[choirIndex];
  if (!choir) return <div></div>;

  const prevChoir = CHOIRS[choirIndex - 1];
  const nextChoir = CHOIRS[choirIndex + 1];

  return (
    <main
      className={`flex min-h-screen flex-col items-center justify-center p-24 ${roboto.className}`}
    >
      <h1 className="text-2xl mb-4">
        {choir.page} - {choir.title}
      </h1>
      {choir.paragraphs.map((p, i) => (
        <Paragraph key={i}>
          {p.split("/n").map((t) => (
            <>
              {t} <br />
            </>
          ))}
        </Paragraph>
      ))}
      <div className="flex space-x-4 mt-4">
        {prevChoir && <Button text="←" url={`/canto/${prevChoir.page}`} />}
        <Button text="Regresar" url="/canto" />
        {nextChoir && <Button text="→" url={`/canto/${nextChoir.page}`} />}
      </div>
    </main>
  );
}
