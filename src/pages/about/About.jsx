import Header from "../../components/Header";
import HeaderImage from "../../images/headerbg1.jpg";
import StoryImage from "../../images/about1.jpeg";
import VisionImage from "../../images/about2.jpg";
import MissionImage from '../../images/about3.jpg';
import "./About.css";

const About = () => {
  return (
    <>
      <Header title="About us" image={HeaderImage}>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptate rerum
        molestias fugiat a illo esse?
      </Header>
      <section className="about__story">
        <div className="container about__story-container">
          <div className="about__section-image">
            <img src={StoryImage} alt="Our story" />
          </div>
          <div className="about__section-content">
            <h1>Our Story</h1>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid,
              cupiditate cum sint vitae amet quae quod provident harum
              perspiciatis voluptates nihil ab temporibus, officiis veritatis.
              Sequi quaerat tempore pariatur dolores.
            </p>
            <p>
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Libero
              fugit reiciendis iusto? Aperiam consequuntur doloribus quae autem
              laborum inventore consectetur, sit ut voluptatem hic incidunt.
            </p>
            <p>
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ullam
              cumque nostrum expedita, odit in optio sit magnam! Possimus,
              facere vero.
            </p>
          </div>
        </div>
      </section>
      <section className="about__vision">
        <div className="container about__vision-container">
          <div className="about__section-content">
            <h1>Our Vision</h1>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid,
              cupiditate cum sint vitae amet quae quod provident harum
              perspiciatis voluptates nihil ab temporibus, officiis veritatis.
              Sequi quaerat tempore pariatur dolores.
            </p>
            <p>
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ullam
              cumque nostrum expedita, odit in optio sit magnam! Possimus,
              facere vero.
            </p>
          </div>
          <div className="about__section-image">
            <img src={VisionImage} alt="Our vision" />
          </div>
        </div>
      </section>

      <section className="about__mission">
        <div className="container about__mission-container">
          <div className="about__section-image">
            <img src={MissionImage} alt="Our mission" />
          </div>
          <div className="about__section-content">
            <h1>Our Mission</h1>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid,
              cupiditate cum sint vitae amet quae quod provident harum
              perspiciatis voluptates nihil ab temporibus, officiis veritatis.
              Sequi quaerat tempore pariatur dolores.
            </p>
            <p>
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Libero
              fugit reiciendis iusto? Aperiam consequuntur doloribus quae autem
              laborum inventore consectetur, sit ut voluptatem hic incidunt.
            </p>
            <p>
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ullam
              cumque nostrum expedita, odit in optio sit magnam! Possimus,
              facere vero.
            </p>
          </div>
        </div>
      </section>
    </>
  );
};

export default About;
