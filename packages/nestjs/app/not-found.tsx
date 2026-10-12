import Link from "next/link";

export default function NotFound() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center p-6 bg-bg text-text">
      <h1 className="text-6xl font-bold mb-4">404</h1>
      <p className="text-text-muted mb-8">Página no encontrada</p>
      <Link href="/" className="text-accent underline">
        Volver al inicio
      </Link>
    </main>
  );
}
