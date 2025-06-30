import "./globals.css";
import { Inter } from "next/font/google";
import Theme from "../app/components/ThemeProvider";
import { ToastContainer } from "react-toastify"; 
import "react-toastify/dist/ReactToastify.css";  

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
      className={inter.className}
      suppressHydrationWarning
    >
      <body>
        <Theme>
          {children}
          <ToastContainer
            position="top-right"
            autoClose={5000}
            hideProgressBar={false}
            newestOnTop={false}
            closeOnClick
            rtl={false}
            pauseOnFocusLoss
            draggable
            pauseOnHover
            theme="light" // or "dark" based on your design
          />
        </Theme>
      </body>
    </html>
  );
}
