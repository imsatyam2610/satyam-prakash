import Contact from "@/components/contact/Contact";
import Footer from "@/components/footer/Footer";
import Header from "@/components/header/Header";
import Navbar from "@/components/navbar/Navbar";
import Skills from "@/components/skills/Skills";

export default function Home() {
  return (
    <>
      <Navbar />
      <Header />
      <Skills />
      <Contact />
      <Footer />
    </>
  );
}
