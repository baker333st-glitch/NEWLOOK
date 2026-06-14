import ContactForm from "@/components/ContactForm";

export const metadata = {
  title: "Contact Us - NEW LOOK",
  description: "Get in touch with NEW LOOK",
};

export default function ContactPage() {
  return (
    <div className="container py-12">
      <div className="max-w-2xl mx-auto">
        <h1 className="text-4xl font-bold mb-8">Contact Us</h1>
        <ContactForm />
      </div>
    </div>
  );
}
