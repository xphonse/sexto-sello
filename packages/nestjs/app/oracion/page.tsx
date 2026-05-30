import Button from "@/components/Button";
import { PRAYERS } from "data";
import { getSlug } from "@/helpers/slug";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center px-6 pt-16 pb-12 sm:p-12 lg:p-24 bg-bg text-text">
      <h1 className="text-2xl font-semibold mb-4">Oraciones</h1>
      {PRAYERS.map((p, i) => {
        return (
          <Button
            key={i}
            text={`${p.page} - ${p.title}`}
            size="full"
            url={"oracion/" + getSlug(p)}
          />
        );
      })}
      <Button text="Regresar" url="/" />
    </main>
  );
}
