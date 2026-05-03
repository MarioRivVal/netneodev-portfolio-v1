import NetneoLogo from "./NetneoLogo";
import SocialIcons from "./SocialIcons";
import { getCurrentYear } from "../functions";

const Footer = () => {
  return (
    <footer className="footer">
      <SocialIcons />
      <p>
        {getCurrentYear()}{" "}
        <span>
          {" "}
          <a href="https://www.netneo.es/" target="_blank">
            netneo.es
          </a>
        </span>{" "}
        Derechos Reservados
      </p>
      <p>
        Código disponible en{" "}
        <span>
          <a
            href="https://github.com/MarioRivVal/netneodev-portfolio-v1"
            target="_blank"
          >
            GitHub
          </a>
        </span>
      </p>

      <NetneoLogo />
    </footer>
  );
};

export default Footer;
