import NetneoLogo from "./NetneoLogo";
import SocialIcons from "./SocialIcons";
import { getCurrentYear } from "../functions";

const Footer = () => {
  return (
    <footer className="footer">
      <SocialIcons />
      <p>
        {getCurrentYear()} <span>NetNeo</span>, Derechos Reservados
      </p>
      <p>
        Mira el código de esta página en{" "}
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
