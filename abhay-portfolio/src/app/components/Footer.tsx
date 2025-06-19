// Footer.tsx
"use client";
import { useEffect, useState } from "react";

export default function Footer() {
  const [year, setYear] = useState("");

  useEffect(() => {
    setYear(new Date().getFullYear().toString());
  }, []);

  return (
    <footer className="text-center py-6 bg-gray-200 dark:bg-gray-800 text-sm text-gray-600 dark:text-gray-400">
      &copy; {year} Abhay Bava. All rights reserved.
    </footer>
  );
}
