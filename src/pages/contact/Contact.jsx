import Header from "../../components/Header";
import HeaderImage from "../../images/headerbg2.jpg";
import { MdEmail } from "react-icons/md";
import { BsMessenger } from "react-icons/bs";
import { IoLogoWhatsapp } from "react-icons/io";
import "./Contact.css";

const Contact = () => {
  return (
    <>
      <Header title="Get In Touch" image={HeaderImage}>
        Dolor sit amet consectetur adipisicing elit. Mollitia unde minus quas
        quam reprehenderit maxime.
      </Header>
      <section className="contact">
        <div className="container contact__container">
          <div className="contact__wrapper">
            <a href="mailto:support@myself.com" target="__blank" rel = "noreferrer noopener"><MdEmail/></a>
            <a href="http://m.me/vintage" target="__blank" rel = "noreferrer noopener"><BsMessenger/></a>
            <a href="https://wa.me/your number" target="__blank" rel = "noreferrer noopener"><IoLogoWhatsapp/></a>
          </div>
        </div>
      </section>
    </>
  );
};

export default Contact;
