import mapImg from "../assets/cap-parana1";
import paradasImg from "../assets/cap-parana1";
import rutasImg from "../assets/cap-parana1";

const images = [mapImg, paradasImg, rutasImg];

const ProjectDetail = () => {
    return (
      <section className="max-w-5xl mx-auto px-4">
        <h1 className="text-3xl font-bold mb-6">
          App de Transporte Urbano
        </h1>
  
        <div className="grid md:grid-cols-2 gap-6">
          {images.map((img, i) => (
            <img
              key={i}
              src={img}
              className="rounded-xl shadow"
              alt={`Captura ${i + 1}`}
            />
          ))}
        </div>
      </section>
    );
  };
  
  export default ProjectDetail;
  