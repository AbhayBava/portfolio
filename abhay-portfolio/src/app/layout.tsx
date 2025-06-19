import './globals.css' // ✅ This line is critical

export const metadata = {
  title: 'Abhay Bava | Portfolio',
  description: 'Enterprise-level portfolio for Abhay Bava',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
