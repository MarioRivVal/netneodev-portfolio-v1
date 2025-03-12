/* eslint-disable react/prop-types */
import { BlogIcon, DownloadIcon } from "./Icons";

const Header = ({ handleOpenModal }) => {
  return (
    <header className="header">
      <div>
        <h4 className="title-section">Hola! Soy Mario.</h4>
        <h1 className="header-title">
          <span>Hacemos</span>
          <span>realidad tu idea?</span>
        </h1>

        <ul className="header-list">
          <li className="item-active clickable">
            <a href="documents/CV_Mario_Rivera_esp_digital.pdf" download>
              Descarga CV
              <div className="small-icon">
                <DownloadIcon />
              </div>
            </a>
          </li>
          <li
            className=" clickable"
            data-section="blog"
            onClick={(e) => handleOpenModal(e)}
          >
            <a>
              Mi Historia
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
