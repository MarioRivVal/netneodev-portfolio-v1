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
          <a href="#">GitHub</a>
        </span>
      </p>

      <NetneoLogo />
    </footer>
  );
};

export default Footer;
