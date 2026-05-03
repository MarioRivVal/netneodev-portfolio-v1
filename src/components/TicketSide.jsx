import NetneoLogo from "./NetneoLogo";
import { languages } from "../data/data";
import { SendIcon } from "./Icons";

const TicketSide = () => {
  return (
    <section className="ticket-box">
      <div className="ticket">
        <div className="ticket-header">
          <NetneoLogo />
          <div className="ticket-img-box">
            <picture>
              <source srcSet="img/developer_lighter.webp" />
              <img src="img/developer.png" alt="" />
            </picture>
          </div>
        </div>
        <div className="ticket-details-box">
          <div className="ticket-profession-box">
            <p className="profession">Profesión:</p>
            <p>APIs · IA Generativa</p>
            <p>SaaS · Producto digital</p>
          </div>
          <div className="ticket-profession-box">
            <p className="profession">Contactos:</p>
            <a href="tel:+34642469683">+34 642 469 683</a>
            <a href="mailto:netneo.web@gmail.com">netneo.web@gmail.com</a>
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
          <a className="btn-violet" href="mailto:netneo.web@gmail.com">
            Contactar
            <div className="small-icon">
              <SendIcon />
            </div>
          </a>
        </div>
      </div>
    </section>
  );
};

export default TicketSide;
