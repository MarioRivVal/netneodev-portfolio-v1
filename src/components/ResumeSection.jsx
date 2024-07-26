import { DownloadIcon } from "./Icons";
import { tools, education, workExperience } from "../data/data";
import { useTiltEffect } from "../functions";
import ToolItem from "./ToolItem";
import ResumeItem from "./ResumeItem";

const ResumeSection = () => {
  useTiltEffect(".tools-box .tool");
  return (
    <section className="section" id="resume">
      <h4 className="title-section">Curriculum</h4>
      <h2 className="secondary-title">
        <span>Educación y</span>
        <span>Experiencia.</span>
      </h2>
      <p className="resume-text">
        Autodidacta apasionado con más de 12 cursos online en programación
        completados. Nivel C1 en inglés y portugués, y C2 en italiano y español.
        Excelentes habilidades de comunicación y liderazgo adquiridas durante
        mas de 15 años como coordinador de eventos en cruceros y hoteles.
      </p>

      <div className="resume-section">
        <h3 className="tertiary-title">Mi educación</h3>
        {education.map((item) => (
          <ResumeItem key={item.id} item={item} />
        ))}
      </div>

      <div className="resume-section">
        <h3 className="tertiary-title">Experiencia laboral</h3>

        {workExperience.map((item) => (
          <ResumeItem key={item.id} item={item} />
        ))}
      </div>

      <div className="resume-section">
        <h3 className="tertiary-title">Mi herramientas favoritas</h3>
        <div className="tools-box">
          {tools.map((tool) => (
            <ToolItem key={tool.id} tool={tool} />
          ))}
        </div>
      </div>
      <a className="btn-violet" href="#">
        Descarga CV
        <div className="small-icon">
          <DownloadIcon />
        </div>
      </a>
    </section>
  );
};

export default ResumeSection;
