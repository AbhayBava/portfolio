// ✅ components/Contact.tsx
"use client";

export default function Contact() {
  return (
    <section
      id="contact"
      className="py-16 px-6 text-center bg-white dark:bg-gray-900"
    >
      <h2 className="text-3xl font-bold text-blue-600 mb-4">Contact Me</h2>
      <p className="text-gray-600 dark:text-gray-300 mb-6">
        Feel free to reach out via email for collaboration or hiring!
      </p>
      <a
        href="mailto:abhay@example.com"
        className="px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition"
      >
        Send Email
      </a>
    </section>
  );
}
