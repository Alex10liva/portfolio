import Image from "next/image";
import styles from "./page.module.css";
import Navbar from "@/components/Navbar/Navbar";
import Hero from "@/sections/Hero/Hero";
import About from "@/sections/About/About";
import Projects from "@/sections/Projects/Projects";
import Footer from "@/components/Footer/Footer";

export default function Home() {
  return (
    <main>
      <Navbar />
      <Hero />
      <About />
      <Projects />
      <Footer />
    </main>
  );
}
