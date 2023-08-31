import Image from "next/image";
import styles from "./page.module.css";
import Navbar from "@/components/Navbar/Navbar";
import Hero from "@/components/Hero/Hero";

export default function Home() {
  return (
    <main>
      <Navbar />
      <Hero />
      <div id="sobre-mi">
        <h2 style={{ minHeight: "100vh" }}>aqui que</h2>
      </div>
    </main>
  );
}
