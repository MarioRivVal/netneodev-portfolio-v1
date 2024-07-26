import { projectsData } from "../data/projects";
import { ArrowRightIcon, CloseIcon } from "./Icons";
import { useEffect, useState } from "react";
import { tools } from "../data/data";

const ProjectsContainer = () => {
  const [modalActive, setModalActive] = useState(false);
  const [projectSelected, setProjectSelected] = useState({});

  const handleProjectsDetailsActive = (e) => {
    e.preventDefault();
    const parentLink = e.target.closest("a[data-title]");
    if (parentLink) {
      const dataTitle = parentLink.getAttribute("data-title");

      const projectSelected = projectsData.find(
        (project) => project.title === dataTitle
      );
      setProjectSelected(projectSelected);
      setModalActive(true);
    }
  };

  const handleCloseModal = () => {
    setModalActive(false);
    setProjectSelected({});
  };

  const getTechnologies = () => {
    const selectedTools = tools.filter((item) =>
      projectSelected.technologies.includes(item.name)
    );
    console.log(selectedTools);
    return selectedTools;
  };

  return (
    <div className="projects-container">
      <h4 className="title-section">Portfolio</h4>
      <h2 className="secondary-title">
        <span>Viaje de Desarrollo</span>
      </h2>
      <div className="projects-cards columns-2">
        {projectsData.map((item) => (
          <div className="projects-card" key={item.id}>
            <img
              src={`img/projects/${item.img}.png`}
              alt={`${item.title} project image`}
            />
            <div className="projects-details">
              <p className="projects-title">{item.title}</p>
              <a
                className="link-btn clickable"
                data-title={item.title}
                onClick={(e) => handleProjectsDetailsActive(e)}
              >
                Detalles
                <div className="small-icon">
                  <ArrowRightIcon />
                </div>
              </a>
            </div>
          </div>
        ))}
      </div>

      <div
        className={`overflow-x-hidden project-details-container ${
          modalActive ? "project-details-container-active" : ""
        }`}
      >
        <div
          className="small-icon clickable project-details-icon"
          onClick={handleCloseModal}
        >
          <CloseIcon />
        </div>
        <h4 className="title-section">{projectSelected.type}</h4>
        <h2 className="secondary-title">
          {" "}
          <span>{projectSelected.title}</span>
        </h2>
        <div className="project-alldetails-container">
          <img
            className="project-alldetails-img"
            src={`img/projects/${projectSelected.img}.png`}
            alt={`${projectSelected.title} project image`}
          />

          <div className="project-alldetails-tools">
            {projectSelected.technologies
              ? getTechnologies().map((item) => (
                  <div className="tool-small-box">
                    <img
                      className="tool-small-img"
                      src={`img/logos/${item.img}.png`}
                      alt={`${item.name} logo`}
                    />
                    <p className="tool-small-name">{item.name}</p>
                  </div>
                ))
              : null}
          </div>
          <p className="project-alldetails-description">
            {projectSelected.description}
          </p>
          <div className="project-alldetails-btns">
            <a
              href={projectSelected.url}
              className="link-btn clickable item-active"
              target="_blank"
              rel="noopener noreferrer"
            >
              Pruebalo
              <div className="small-icon">
                <ArrowRightIcon />
              </div>
            </a>
            <a
              href={projectSelected.gitURL}
              className="link-btn clickable"
              target="_blank"
              rel="noopener noreferrer"
            >
              Codigo
              <div className="small-icon">
                <ArrowRightIcon />
              </div>
            </a>
          </div>
        </div>

        <div className="big-circle"></div>
      </div>
      <div className="big-circle"></div>
    </div>
  );
};

export default ProjectsContainer;
