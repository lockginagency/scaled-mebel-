import type { Metadata } from "next";
import { Unbounded, Inter } from "next/font/google";
import "./globals.css";

const display = Unbounded({
  subsets: ["latin", "cyrillic"],
  weight: ["400", "500", "700", "900"],
  variable: "--font-display",
  display: "swap",
});

const body = Inter({
  subsets: ["latin", "cyrillic"],
  weight: ["400", "500", "600"],
  variable: "--font-body",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Заявки для мебельных компаний | Реклама, которая замеряет клиента раньше замерщика",
  description:
    "Настраиваем рекламу для мебельных производств: отсеиваем тех, кто просто прикидывает варианты, и доводим до менеджеров только готовых купить.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="ru">
      <body className={`${display.variable} ${body.variable} grain`}>
        {children}
      </body>
    </html>
  );
}
