import Image from "next/image";
import styles from "./page.module.css";
import Navbar from "@/components/Navbar/Navbar";
import Hero from "@/sections/Hero/Hero";
import About from "@/sections/About/About";

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
