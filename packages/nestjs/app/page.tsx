import Button from "@/components/Button";
import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center p-6 sm:p-12 lg:p-24 bg-bg text-text">
      <h1 className="text-4xl font-bold tracking-tight mb-2">Sexto Sello</h1>
      <p className="text-text-muted mb-8">
        Oraciones y Coros dados al Sexto Sello
      </p>
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
