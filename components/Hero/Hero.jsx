import Image from "next/image";
import avatar from "../../public/images/avatar.png";
import "./hero.css";

function Hero() {
  return (
    <section className="hero" id="inicio">
      <div className="bubbles"></div>
      <main>
        <div className="content-wrapper">
          <div className="hero-text">
            <h1>Hola, soy Alejandro Oliva</h1>
            <h2>Ingeniero en Sistemas Computacionales</h2>

            <p>
              Me apasiona la creación de aplicaciones web que no solo
              sobresalgan en su funcionamiento, sino que también inspiren a
              través de diseños atractivos. Bienvenidos a mi mundo, donde me
              gusta fusionar la tecnología y la creatividad.
            </p>
          </div>
          <div className="avatar-wrapper">
            <Image
              className="hero-avatar"
              src={avatar}
              alt="Avatar"
              width={268}
              height={287}
              priority={true}
            />
          </div>
        </div>
      </main>
    </section>
  );
}

export default Hero;
