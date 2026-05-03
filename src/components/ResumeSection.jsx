import { DownloadIcon } from "./Icons";
import { tools, education, workExperience } from "../data/data";
import { useTiltEffect } from "../functions";
import ToolItem from "./ToolItem";
import ResumeItem from "./ResumeItem";

const ResumeSection = () => {
  useTiltEffect(".tools-box .tool");
  return (
    <section className="section" id="resume">
      <h4 className="title-section">Currículum</h4>
      <h2 className="secondary-title">
        <span>Formación</span>
        <span>y experiencia técnica</span>
      </h2>
      <p className="resume-text">
        Perfil técnico en constante evolución, con formación en desarrollo web
        fullstack, desarrollo de aplicaciones multiplataforma y experiencia
        práctica en proyectos reales. Combino competencias técnicas con
        habilidades de comunicación, liderazgo y trato con cliente desarrolladas
        en entornos internacionales.
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
        <h3 className="tertiary-title">Stack tecnológico</h3>
        <div className="tools-box">
          {tools
            .filter((item) => item.fav)
            .map((tool) => (
              <ToolItem key={tool.id} tool={tool} />
            ))}
        </div>
      </div>
      <a
        className="btn-violet"
        href="documents/CV-MARIO-RIVERA-ESP-2026.pdf"
        download
      >
        Descarga CV técnico
        <div className="small-icon">
          <DownloadIcon />
        </div>
      </a>
    </section>
  );
};

export default ResumeSection;
