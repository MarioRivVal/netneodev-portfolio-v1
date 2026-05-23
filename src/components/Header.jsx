/* eslint-disable react/prop-types */
import { BlogIcon, DownloadIcon } from "./Icons";

const Header = ({ handleOpenModal }) => {
  return (
    <header className="header">
      <div>
        <h4 className="title-section">Hola! Soy Mario Rivera Valverde.</h4>
        <h1 className="header-title">
          <span>Desarrollador</span>
          <span>orientado a producto</span>
        </h1>
        <h4 className="title-section">
          Construyo APIs, aplicaciones web y soluciones SaaS con visión técnica,
          criterio de negocio y foco en resultados reales.
        </h4>

        <ul className="header-list">
          <li className="item-active clickable">
            <a href="documents/CV-MARIO-RIVERA-ESP-2026.pdf" download>
              Descarga CV técnico
              <div className="small-icon">
                <DownloadIcon />
              </div>
            </a>
          </li>

          <li
            className="item-active clickable"
            data-section="blog"
            onClick={(e) => handleOpenModal(e)}
          >
            <a>
              Blog
              <div className="small-icon">
                <BlogIcon />
              </div>
            </a>
          </li>
        </ul>
      </div>
    </header>
  );
};

export default Header;
