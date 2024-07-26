import { LinkedinIcon, GithubIcon, InstagramIcon } from "./Icons";
const SocialIcons = () => {
  return (
    <div className="icons-box">
      <a
        href="https://www.linkedin.com/in/mario-valverde-web-developer/"
        target="_blank"
      >
        <span>
          {" "}
          <LinkedinIcon />{" "}
        </span>
        <span>
          {" "}
          <LinkedinIcon />{" "}
        </span>
        <span>
          {" "}
          <LinkedinIcon />{" "}
        </span>
      </a>
      <a href="https://github.com/MarioRivVal" target="_blank">
        <span>
          {" "}
          <GithubIcon />{" "}
        </span>
        <span>
          {" "}
          <GithubIcon />{" "}
        </span>
        <span>
          {" "}
          <GithubIcon />{" "}
        </span>
      </a>
      <a href="https://www.instagram.com/netneoweb/" target="_blank">
        <span>
          {" "}
          <InstagramIcon />{" "}
        </span>
        <span>
          {" "}
          <InstagramIcon />{" "}
        </span>
        <span>
          {" "}
          <InstagramIcon />{" "}
        </span>
      </a>
    </div>
  );
};

export default SocialIcons;
