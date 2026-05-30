import type { Metadata } from "next";
import { Manrope } from "next/font/google";
import "./globals.css";
import { TopNav } from "@/features/navigation/components/TopNav";
import { QueryProvider } from "@/providers/QueryProvider";
import { usePatients } from "@/features/patients-list/hooks/usePatients";

const manrope = Manrope({
  subsets: ["latin"],
  weight: ["200", "300", "400", "500", "600", "700", "800"],
  variable: "--font-manrope",
});

export const metadata: Metadata = {
  title: "Tech.Care Portal",
  description: "Patient Health Dashboard",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`${manrope.variable} antialiased`}>
        <QueryProvider>
          <TopNav />
          {children}
        </QueryProvider>
      </body>
    </html>
  );
}
