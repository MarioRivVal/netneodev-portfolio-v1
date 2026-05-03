/* eslint-disable react/prop-types */
import { DownloadIcon } from "./Icons";

const Header = () => {
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

          {/* <li
            className=" clickable"
            data-section="post"
            onClick={(e) => handleOpenModal(e)}
          >
            <a>
              Mis Posts
              <div className="small-icon">
                <BlogIcon />
              </div>
            </a>
          </li> */}
        </ul>
      </div>
    </header>
  );
};

export default Header;
