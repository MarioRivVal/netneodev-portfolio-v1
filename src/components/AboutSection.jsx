/* eslint-disable react/prop-types */
import { useTiltEffect } from "../functions";
import SocialIcons from "./SocialIcons";
import { DownloadIcon } from "./Icons";

const AboutSection = () => {
  useTiltEffect(".stats-box div");

  return (
    <section className="section" id="about">
      <h4 className="title-section">Sobre mí</h4>
      <h2 className="secondary-title">
        <span>
          Visión de producto y experiencia con clientes para crear herramientas
        </span>
        <span>útiles, escalables y mantenibles.</span>
      </h2>
      <div className="stats-box">
        <div>
          <span>4+</span>
          <p>Años de Experiencia</p>
        </div>
        <div>
          <span>10+</span>
          <p>Proyectos desarrollados</p>
        </div>
        <div>
          <span>20+</span>
          <p>Tecnologías y Herramientas</p>
        </div>
      </div>
      <div className="about-me">
        <div className="about-me-text">
          <p>
            Soy desarrollador orientado a producto, con experiencia en APIs,
            aplicaciones web y soluciones digitales para clientes reales y
            entornos corporativos. Combino desarrollo técnico, visión de
            negocio, trato directo con cliente y capacidad para llevar una
            solución desde la idea hasta el despliegue.
          </p>
          <p>
            Trabajo principalmente con JavaScript, TypeScript, Node.js, NestJS,
            React, MongoDB y MySQL, Figma, desarrollando y diseñando, interfaces
            y soluciones desplegadas en entornos reales. También utilizo
            herramientas como GitHub, Docker, Azure DevOps y Application
            Insights.
          </p>
        </div>
        <div className="about-contact">
          <div>
            <p>Nombre</p>
            <p>Mario Rivera Valverde</p>
          </div>
          <div>
            <p>Teléfono</p>
            <p>+34 642 469 683</p>
          </div>
          <div>
            <p>Email</p>
            <p>netneo.web@gmail.com</p>
          </div>
          <SocialIcons />
        </div>
      </div>
      <a
        href="documents/CV-MARIO-RIVERA-ESP-2026.pdf"
        download
        className="btn-violet"
      >
        Descarga CV técnico
        <div className="small-icon">
          <DownloadIcon />
        </div>
      </a>
      {/* <a
        className="btn-violet"
        data-section="blog"
        onClick={(e) => handleOpenModal(e)}
      >
        Mi Historia
        <div className="small-icon">
          <BlogIcon />
        </div>
      </a> */}
    </section>
  );
};

export default AboutSection;
