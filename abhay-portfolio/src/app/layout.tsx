import "./globals.css";
import { Inter } from "next/font/google";
import Theme from "../app/components/ThemeProvider";

export const metadata = {
  title: "Abhay Bava | Portfolio",
  description: "Enterprise-level portfolio for Abhay Bava",
};

const inter = Inter({ subsets: ["latin"] });

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      className={inter.className} // ✅ Move font here
      suppressHydrationWarning
    >
      <body>
        <Theme>{children}</Theme>
      </body>
    </html>
  );
}
