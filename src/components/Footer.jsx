import NetneoLogo from "./NetneoLogo";
import SocialIcons from "./SocialIcons";

const Footer = () => {
  return (
    <footer className="footer">
      <SocialIcons />
      <p>
        2024 <span>NetNeo</span>, all right reserved
      </p>
      <p>
        Look at this page code at{" "}
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
