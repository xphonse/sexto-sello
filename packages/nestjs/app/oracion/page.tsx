import { Roboto } from "next/font/google";
import Button from "@/components/Button";
import { PRAYERS } from "data";
import { getSlug } from "@/helpers/slug";

const roboto = Roboto({
  weight: "400",
  subsets: ["latin"],
});

export default function Home() {
  return (
    <main
      className={`flex min-h-screen flex-col items-center justify-center p-24 ${roboto.className}`}
    >
      <h1 className="text-2xl mb-4">Oraciones</h1>
      {PRAYERS.map((p, i) => {
        return (
          <Button
            key={i}
            text={`${p.page} - ${p.title}`}
            w="96"
            url={"oracion/" + getSlug(p)}
          />
        );
      })}
      <Button text="Regresar" url="/" />
    </main>
  );
}
