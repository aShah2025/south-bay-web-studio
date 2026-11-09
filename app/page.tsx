import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Demos from "@/components/Demos";
import Pricing from "@/components/Pricing";
import ContactForm from "@/components/ContactForm";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <Demos />
        <Pricing />
        <ContactForm />
      </main>
      <Footer />
    </>
  );
}
