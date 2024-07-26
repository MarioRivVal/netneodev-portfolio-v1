/* eslint-disable react/prop-types */

import { ArrowRightIcon } from "./Icons";

const PortfolioCard = ({ project }) => {
  const { img, title, url } = project;
  return (
    <div className="portfolio-card">
      <img src={`img/projects/${img}.png`} alt={title} />
      <div className="project-details">
        <p className="project-title">{title}</p>

        <a
          href={url}
          className="link-btn clickable"
          data-title={title}
          target="_blank"
          rel="noopener noreferrer"
        >
          Pruebalo
          <div className="small-icon">
            <ArrowRightIcon />
          </div>
        </a>
      </div>
    </div>
  );
};

export default PortfolioCard;
