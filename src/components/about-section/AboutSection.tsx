
import Image from "next/image";

const AboutSection: React.FC = () => {
  return (
    <section>
      <div className="about-container">
        <h2 className="about-title">
          About{" "}
          <span className="highlight-text">Me</span>
        </h2>

        <div className="about-grid">
          <Image
            src="/images/about.webp"
            alt="About Section Image"
            width={500}
            height={500}
            className="about-image"
          />

          <div className="about-text">
            <div className="info-box">
              <p className="text-content">
              I am Ghulam Fareed, a passionate front-end web developer with a
              strong foundation in TypeScript, JavaScript, HTML, CSS, and Node.js
                <br />{" "}
              </p>
            </div>

            <div className="info-box">
              <p className="text-content">
              I completed my matriculation at Kutiyana Memon Academy,
                achieving an A+ grade with an 89% score from 2020 to 2022. Later, I
                pursued intermediate in Computer Science at Sir Adamjee Institute,
                F.B Area, Karachi and acheieved an A grade with an 77% score from 2022 to 2024.
                <br />
              </p>
            </div>

            <div className="info-box">
              <p className="text-content">
              I am passionate about embracing new challenges and enjoy engaging in innovative projects. 
                With a strong interest in emerging technologies, I love exploring their potential and applying them creatively.
                In my free time, I enjoy playing strategic games and sharing knowledge with others, 
                finding fulfillment in motivating and helping them acquire new skills. 
                My commitment to personal and professional growth drives my enthusiasm for web development and technology, 
                inspiring me to continuously enhance my expertise and tackle exciting opportunities.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
