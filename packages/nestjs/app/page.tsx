import { Roboto } from "next/font/google";
import Button from "@/components/Button";
import Image from "next/image";
import Link from "next/link";

const roboto = Roboto({
  weight: "400",
  subsets: ["latin"],
});

export default function Home() {
  return (
    <main
      className={`flex min-h-screen flex-col items-center justify-center p-24 ${roboto.className}`}
    >
      <h1 className="text-2xl mb-4">Oraciones y Coros dados al Sexto Sello</h1>
      <Button text="Oraciones" url="/oracion" />
      <Button text="Cantos" url="/canto" />
      <Link href="https://play.google.com/store/apps/details?id=com.sextosello.cantos_y_coros">
        <Image
          className="mt-8"
          width={646 / 4}
          height="1"
          src="google_play.png"
          alt="google_play"
        />
      </Link>
    </main>
  );
}
