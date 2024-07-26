import { useState } from "react";
import { ChevronLeftIcon, ChevronRightIcon } from "./Icons";
import TestiminialItem from "./TestimonialItem";
import { testimonials } from "../data/data";

const Testimonials = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const handleSlider = (direction) => {
    if (direction === "left") {
      setCurrentIndex((prevIndex) =>
        prevIndex > 0 ? prevIndex - 1 : testimonials.length - 1
      );
    } else if (direction === "right") {
      setCurrentIndex((prevIndex) =>
        prevIndex < testimonials.length - 1 ? prevIndex + 1 : 0
      );
    }
  };

  const carrouselStyle = {
    transform: `translateX(-${(currentIndex * 100) / testimonials.length}%)`,
    width: `${testimonials.length * 100}%`,
    transition: "transform 0.5s ease-in-out",
  };

  return (
    <section className="section" id="testimonial">
      <h4 className="title-section">Clientes</h4>
      <h2 className="secondary-title">
        <span>Testimonios que avalan</span>
        <span>mis resultados.</span>
      </h2>
      <div className="testimonials-box">
        <div style={carrouselStyle}>
          {testimonials.map((item) => (
            <TestiminialItem key={item.id} item={item} />
          ))}
        </div>
      </div>

      {testimonials.length > 1 && (
        <div className="testimonials-buttons">
          <button
            className="testimonials-btn-left"
            onClick={() => handleSlider("left")}
          >
            <div className="small-icon ">
              <ChevronLeftIcon />
            </div>
          </button>
          <button
            className="testimonials-btn-right"
            onClick={() => handleSlider("right")}
          >
            <div className="small-icon">
              <ChevronRightIcon />
            </div>
          </button>
        </div>
      )}
    </section>
  );
};

export default Testimonials;
