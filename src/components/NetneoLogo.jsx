import { NetneoIcon } from "./Icons";
const NetneoLogo = () => {
  return (
    <a href="https://www.netneo.es/" target="_blank">
      <div className="logo-box">
        <NetneoIcon />
        <div>
          <p className="ticket-name">netneo.es</p>
          <p className="ticket-job">web-apps</p>
        </div>
      </div>
    </a>
  );
};

export default NetneoLogo;
