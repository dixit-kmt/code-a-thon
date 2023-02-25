import { useState } from "react";
import people from "../assets/data/carouselData";
import { FaChevronLeft, FaChevronRight, FaQuoteRight } from "react-icons/fa";

const Carousel = () => {
  const [index, setIndex] = useState(0);
  const { name, job, image, text } = people[index];

  const checkNum = (num) => {
    if (num > people.length - 1) {
      return 0;
    }
    if (num < 0) {
      return people.length - 1;
    }
    return num;
  };

  const nextPerson = () => {
    setIndex((index) => {
      let newIdx = index + 1;
      return checkNum(newIdx);
    });
  };

  const prevPerson = () => {
    setIndex((index) => {
      let newIdx = index - 1;
      return checkNum(newIdx);
    });
  };

  return (
    <div className="review">
      <div className="img-container">
        <img src={image} alt={name} className="person-img" />
        <span className="quote-icon">
          <FaQuoteRight />
        </span>
      </div>
      <h4>{name}</h4>
      <p className="job">{job}</p>
      <p className="info">{text}</p>
      <div className="button-container">
        <button className="prev-btn" onClick={prevPerson}>
          <FaChevronLeft />
        </button>
        <button className="next-btn" onClick={nextPerson}>
          <FaChevronRight />
        </button>
      </div>
    </div>
  );
};
export default Carousel;
