import Header from "../../components/Header";
import HeaderImage from "../../images/headerbg3.jpg";
import "./Gallery.css";

const Gallery = () => {
  const galleryLength = 15;
  const images = [];

  for (let i = 1; i <= galleryLength ; i++ ){
    images.push(require(`../../images/gallery${i}.jpg`))
  }
  return (
    <>
      <Header image={HeaderImage} title="Our Gallery">
        Quia illo est delectus minima adipisci aspernatur animi natus nobis?
        Sint nulla facere repellendus quasi.
      </Header>
      <section className="gallery">
        <div className="container gallery__container">
          {
            images.map((image, index) => {
              return <article key = {index}>
                <img src={image} alt={`Gallery ${index + 1}`} />
              </article>
            })
          }
        </div>
      </section>
    </>
  );
};

export default Gallery;
