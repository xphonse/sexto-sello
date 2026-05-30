import Button from "@/components/Button";
import { CHOIRS } from "data";
import { getSlug } from "@/helpers/slug";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center p-24 bg-bg text-text">
      <h1 className="text-2xl font-semibold mb-4">Cantos</h1>
      {CHOIRS.map((c, i) => {
        return (
          <Button
            key={i}
            text={`${c.page} - ${c.title}`}
            w="96"
            url={"canto/" + getSlug(c)}
          />
        );
      })}
      <Button text="Regresar" url="/" />
    </main>
  );
}
