import { Roboto } from "next/font/google";
import Button from "@/components/Button";
import { CHOIRS } from "data";

const roboto = Roboto({
  weight: "400",
  subsets: ["latin"],
});

export default function Home() {
  return (
    <main
      className={`flex min-h-screen flex-col items-center justify-center p-24 ${roboto.className}`}
    >
      <h1 className="text-2xl mb-4">Cantos</h1>
      {CHOIRS.map((c, i) => {
        return (
          <Button
            key={i}
            text={`${c.page} - ${c.title}`}
            w="96"
            url={"canto/" + c.page}
          />
        );
      })}
      <Button text="Regresar" url="/" />
    </main>
  );
}
