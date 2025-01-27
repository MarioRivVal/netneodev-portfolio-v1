/* eslint-disable react/prop-types */
import { useTiltEffect } from "../functions";
import { BlogIcon } from "./Icons";
import SocialIcons from "./SocialIcons";

const AboutSection = ({ handleOpenModal }) => {
  useTiltEffect(".stats-box div");

  return (
    <section className="section" id="about">
      <h4 className="title-section">Sobre mí</h4>
      <h2 className="secondary-title">
        <span>Comprometido a ofrecer soluciones</span>
        <span>web excelentes.</span>
      </h2>
      <div className="stats-box">
        <div>
          <span>2+</span>
          <p>Años de Experiencia</p>
        </div>
        <div>
          <span>10+</span>
          <p>Proyectos completados</p>
        </div>
        <div>
          <span>20+</span>
          <p>Herramientas conocidas</p>
        </div>
      </div>
      <div className="about-me">
        <div className="about-me-text">
          <p>
            Como desarrollador web con más de dos años de experiencia, he tenido
            la oportunidad de crear y gestionar más de 10 proyectos personales y
            2 proyectos para clientes reales.
          </p>
          <p>
            Con un amplio conocimiento de más de 20 herramientas útiles para el
            desarrollo y diseño web, manejo lenguajes como JavaScript y
            TypeScript, hasta frameworks y bibliotecas como React JS, Express y
            TailwindCss. Para el diseño uso Figma que me permite crear
            interfaces de usuario intuitivas y atractivas.
          </p>
          <p>
            Realicé un curso presencial para desarrollo web del lado del cliente y el servidor y
            actualmente estoy ampiando mis conocimientos con un Máster Oficial en
            Desarrollo Web Fullstack a la vez que realizo una Formación
            Profesional Superior en Desarrollo de Aplicaciones Multiplataforma.
          </p>
        </div>
        <div className="about-contact">
          <div>
            <p>Nombre</p>
            <p>Mario Rivera Valverde</p>
          </div>
          <div>
            <p>Mobil</p>
            <p>+34 642 469 683</p>
          </div>
          <div>
            <p>Email</p>
            <p>netneoweb.gmail.com</p>
          </div>
          <SocialIcons />
        </div>
      </div>
      <a
        className="btn-violet"
        data-section="blog"
        onClick={(e) => handleOpenModal(e)}
      >
        Mi Blog
        <div className="small-icon">
          <BlogIcon />
        </div>
      </a>
    </section>
  );
};

export default AboutSection;
