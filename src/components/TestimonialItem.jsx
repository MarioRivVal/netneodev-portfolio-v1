/* eslint-disable react/prop-types */

import { ArrowRightIcon, EmptyStarIcon, FullStarIcon } from "./Icons";

const TestiminialItem = ({ item }) => {
  const { img, name, profession, country, star, url, quote } = item;

  const renderStars = (starCount) => {
    return Array.from({ length: 5 }, (_, index) =>
      index < starCount ? (
        <div key={index} className="small-icon">
          <FullStarIcon />{" "}
        </div>
      ) : (
        <div key={index} className="small-icon">
          <EmptyStarIcon />{" "}
        </div>
      )
    );
  };
  return (
    <>
      <div className="testimonial">
        <div className="testimonial-user">
          <img src={`img/users/${img}.jpg`} alt="" />
          <div className="testimomial-user-details">
            <p className="user-name">{name}</p>
            <p className="user-profession">{profession}</p>
            <p className="user-country">{country}</p>

            <div className="testimonial-stars">{renderStars(star)}</div>
          </div>
        </div>
        <p>{quote}</p>
        <a className="link-btn" href={url} target="_blank">
          Proyecto
          <div className="small-icon">
            <ArrowRightIcon />
          </div>
        </a>
      </div>
    </>
  );
};

export default TestiminialItem;
