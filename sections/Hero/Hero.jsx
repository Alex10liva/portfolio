import Image from "next/image";
import avatar from "../../public/images/avatar.png";
import "./hero.css";

function Hero() {
  return (
    <section className="hero" id="home">
      <div className="bubbles"></div>
      <main>
        <div className="content-wrapper">
          <div className="hero-text">
            <h1>Hello, I&apos;m Alejandro Oliva</h1>
            <h2>Computer Systems Engineer</h2>

            <p>
              I am passionate about creating apps that not only stand out in
              performance, but also inspire through attractive designs. Welcome
              to my world, where I like to merge technology and creativity.
              Explore my portfolio and discover my featured projects.
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
