import NetneoLogo from "./NetneoLogo";
import { languages } from "../data/data";
import { smoothScrolling } from "../functions";

const TicketSide = () => {
  return (
    <section className="ticket-box">
      <div className="ticket">
        <div className="ticket-header">
          <NetneoLogo />
          <div className="ticket-img-box">
            <img src="img/developer-img-no-bg.png" alt="" />
          </div>
        </div>
        <div className="ticket-details-box">
          <div className="ticket-profession-box">
            <p className="profession">Profesión:</p>
            <p>Desarrollador Web</p>
            <p>Analista de Datos</p>
          </div>
          <div className="ticket-profession-box">
            <p className="profession">Contactos:</p>
            <a href="tel:+34642469683">+34 642469683</a>
            <a href="mailto:netneoweb.gmail.com">netneoweb.gmail.com</a>
          </div>
          <div className="ticket-languages-box">
            <p className="languages">Idiomas hablados:</p>
            <div className="ticket-languages">
              {languages.map((item) => (
                <div className="ticket-language" key={item.id}>
                  <img
                    src={`img/languages/${item.img}.png`}
                    alt={`${item.language} flag`}
                  />

                  <p>{item.level}</p>
                  <p>{item.language}</p>
                </div>
              ))}
            </div>
          </div>
          <div
            className="ticket-social-box"
            onClick={(e) => smoothScrolling(e)}
          >
            <a className="btn-violet" href="#contact">
              Trabajemos Juntos!
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TicketSide;
