/* eslint-disable react/prop-types */
import PortfolioCard from "./PortfolioCard";
import { PortfolioIcon } from "./Icons";
import { projectsData } from "../data/projects";

const PortfolioSection = ({ handleOpenModal }) => {
  const mainProjects = projectsData.slice(0, 4);

  return (
    <section className="section" id="portfolio">
      <h4 className="title-section">Mis Trabajos</h4>
      <h2 className="secondary-title">
        <span>Revisa mis mejores</span>
        <span>proyectos.</span>
      </h2>
      <div className="portfolio-projects-box">
        {mainProjects.map((project) => (
          <PortfolioCard key={project.id} project={project} />
        ))}
      </div>
      <a
        className="btn-violet"
        data-section="projects"
        onClick={handleOpenModal}
      >
        Todos los mejores
        <div className="small-icon">
          <PortfolioIcon />
        </div>
      </a>
    </section>
  );
};

export default PortfolioSection;
