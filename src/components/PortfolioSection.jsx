/* eslint-disable react/prop-types */
import PortfolioCard from "./PortfolioCard";
import { PortfolioIcon } from "./Icons";
import { projectsData } from "../data/projects";

const PortfolioSection = ({ handleOpenModal }) => {
  const mainProjects = projectsData.filter(
    (project) => project.favorite === true,
  );

  return (
    <section className="section" id="portfolio">
      <h4 className="title-section">Proyectos destacados</h4>
      <h2 className="secondary-title">
        <span>Aplicaciones web, plataformas y herramientas</span>
        <span>desarrolladas desde la idea hasta el despliegue.</span>
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
