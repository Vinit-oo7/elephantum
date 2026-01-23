import "./why-elephantum-section.css"


const images = [
  "1.jpg",
  "2 Safari in.png",
  "10 Beauty of.jpg",
  "4.jpg",
  "5.jpg",
  "6.jpg",
  "10 Beauty of.jpg",
  "13 Exploring Kerala,.jpg",
];

const WhyElephantumSection = () => {
  return (
    <section id="about" className="about">
      <div className="banner">
        <div
          className="slider"
          style={{ "--quantity": images.length }}
        >
          {images.map((img, i) => (
            <div
              key={i}
              className="item"
              style={{ "--position": i + 1 }}
            >
              <img src={`/assets/images/${img}`} alt="Elephant Experience" />
            </div>
          ))}
        </div>
        <div className="content_2">
          <h1 data-content="ELEPHANTUM.">ELEPHANTUM.</h1>
          <div className="author">
            <h2>Vinit Bhatnagar</h2>
            <p><b>Explore With Us</b></p>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quia, temporibus.</p>
          </div>
          <div className="model" />
        </div>
      </div>
    </section>
  );
};

export default WhyElephantumSection;