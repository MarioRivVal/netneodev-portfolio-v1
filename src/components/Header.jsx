/* eslint-disable react/prop-types */
import { BlogIcon, DownloadIcon } from "./Icons";

const Header = ({ handleOpenModal }) => {
  return (
    <header className="header">
      <div>
        <h4 className="title-section">Hello!</h4>
        <h1 className="header-title">
          <span>Soy Mario</span>
          <span>Desarrollador Web</span>
        </h1>

        <ul className="header-list">
          <li
            className="item-active clickable"
            data-section="blog"
            onClick={(e) => handleOpenModal(e)}
          >
            <a>
              Mi Blog
              <div className="small-icon">
                <BlogIcon />
              </div>
            </a>
          </li>
          <li className="clickable">
            <a href="documents/CV Mario Valverde Español.pdf" download>
              Descarga CV
              <div className="small-icon">
                <DownloadIcon />
              </div>
            </a>
          </li>
        </ul>
      </div>
    </header>
  );
};

export default Header;
