import Image from "next/image";
import styles from "./page.module.css";
import Navbar from "@/components/Navbar/Navbar";
import Hero from "@/components/Hero/Hero";
import About from "@/components/About/About";

export default function Home() {
  return (
    <main>
      <Navbar />
      <Hero />
      <About />
      <div id="tecnologias"></div>
      <div id="proyectos"></div>
    </main>
  );
}
