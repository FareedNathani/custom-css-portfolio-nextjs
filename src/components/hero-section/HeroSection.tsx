
"use client";
import React from "react";
import Image from "next/image";
import { TypeAnimation } from "react-type-animation";

const HeroSection = () => {
  return (
    <section className="hero-section">
      <div className="hero-grid">
        <div className="hero-text">
          <h1 className="hero-title">
            <span className="hero-greeting">Hi, I am{" "}</span>
            <br />
            <TypeAnimation
              sequence={[
                'Fareed Nathani',
                1000,
                'Web Developer',
                1000,
                'TypeScript Developer',
                1000,
                'Frontend Developer',
                1000
              ]}
              wrapper="span"
              speed={40}
              repeat={Infinity}
              className="hero-animation"
            />
          </h1>
          <p className="hero-description">
            A passionate front-end web developer. I have honed my skills in a variety of technologies, including TypeScript, JavaScript, HTML, CSS, and Node.js. I love creating clean, efficient, and responsive websites that provide a great user experience. Whether it is coding up a new feature or optimizing performance, I am always eager to take on new challenges and continue learning in this ever-evolving field.
          </p>
          <div className="hero-buttons">
            <button className="btn-contact">Contact</button>
            <button className="btn-hire-me">
              <span className="hire-me-span">Hire Me</span>
            </button>
          </div>
        </div>
        <div className="hero-image-container">
          <div className="hero-image-wrapper">
            <Image
              src="/images/home.jpg"
              alt="Hero Section Image"
              width={350}
              height={350}
              className="hero-image"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
