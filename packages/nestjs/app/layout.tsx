import "./globals.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import ThemeToggle from "@/components/ThemeToggle";
import { palette } from "data";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Sexto Sello",
  description: "Oraciones y Cantos dados al Sexto Sello",
};

function buildCssVars(colors: typeof palette.light): string {
  return [
    `--c-bg: ${colors.bg};`,
    `--c-surface: ${colors.surface};`,
    `--c-text: ${colors.text};`,
    `--c-text-muted: ${colors.textMuted};`,
    `--c-border: ${colors.border};`,
    `--c-accent: ${colors.accent};`,
    `--c-accent-text: ${colors.accentText};`,
  ].join(" ");
}

const cssVariables = `:root { ${buildCssVars(
  palette.light
)} } .dark { ${buildCssVars(palette.dark)} }`;

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <script
          dangerouslySetInnerHTML={{
            __html: `
              (function() {
                var t = localStorage.getItem('theme');
                if (t === 'dark' || (!t && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
                  document.documentElement.classList.add('dark');
                }
              })();
            `,
          }}
        />
        <style dangerouslySetInnerHTML={{ __html: cssVariables }} />
      </head>
      <body className={inter.className}>
        <ThemeToggle />
        {children}
      </body>
    </html>
  );
}
