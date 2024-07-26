import { SendIcon } from "./Icons";
import { useRef, useState } from "react";
import emailjs from "@emailjs/browser";

const FormSection = () => {
  const form = useRef();
  const [formData, setFormData] = useState({
    name_first: "",
    name_last: "",
    user_email: "",
    contact_number: "",
    message: "",
  });
  const [status, setStatus] = useState("");
  const [errors, setErrors] = useState({});

  const validateEmail = (email) => {
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return re.test(email);
  };

  const validateForm = () => {
    let formErrors = {};
    if (!formData.name_first) formErrors.name_first = "Nombre es obligatorio";
    if (!formData.user_email) formErrors.user_email = "Email es obligatorio";
    else if (!validateEmail(formData.user_email))
      formErrors.user_email = "Email no es válido";
    if (!formData.message) formErrors.message = "Mensaje es obligatorio";
    return formErrors;
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({ ...prevData, [name]: value }));
  };

  const clearStatus = () => {
    setTimeout(() => {
      setStatus("");
    }, 3000);
  };

  const sendEmail = (e) => {
    e.preventDefault();

    const formErrors = validateForm();
    if (Object.keys(formErrors).length > 0) {
      setErrors(formErrors);
      return;
    }

    emailjs
      .sendForm(
        "service_xybwxfs",
        "template_iadey3h",
        form.current,
        "-LKdh5y6htjd9kRGW"
      )
      .then(
        () => {
          setStatus("SUCCESS");
          setFormData({
            name_first: "",
            name_last: "",
            user_email: "",
            contact_number: "",
            message: "",
          });
          clearStatus();
        },
        (error) => {
          setStatus("FAILED");
          console.log("FAILED...", error.text);
          clearStatus();
        }
      );
  };

  return (
    <section className="section" id="contact">
      <h4 className="title-section">Hablemos</h4>
      <h2 className="secondary-title">
        <span>Cuentame sobre</span>
        <span>tu idea</span>
      </h2>
      <form className="form" ref={form} onSubmit={sendEmail}>
        <label htmlFor="user-name">
          <input
            id="user-name"
            type="text"
            placeholder="Nombre*"
            name="name_first"
            value={formData.name_first}
            onChange={handleInputChange}
            required
          />
          {errors.name_first && (
            <span className="error">{errors.name_first}</span>
          )}
        </label>
        <label htmlFor="user-surname">
          <input
            id="user-surname"
            type="text"
            placeholder="Apellido"
            name="name_last"
            value={formData.name_last}
            onChange={handleInputChange}
          />
        </label>
        <label htmlFor="user-email">
          <input
            id="user-email"
            type="email"
            placeholder="Email*"
            name="user_email"
            value={formData.user_email}
            onChange={handleInputChange}
            required
          />
          {errors.user_email && (
            <span className="error">{errors.user_email}</span>
          )}
        </label>
        <label htmlFor="user-tel">
          <input
            id="user-tel"
            type="tel"
            placeholder="Telefono"
            name="contact_number"
            value={formData.contact_number}
            onChange={handleInputChange}
          />
        </label>
        <textarea
          name="message"
          id="user-message"
          cols="30"
          rows="10"
          placeholder="Tu idea*"
          value={formData.message}
          onChange={handleInputChange}
          required
        ></textarea>
        {errors.message && <span className="error">{errors.message}</span>}

        <button className="btn-violet" type="submit">
          Envia el mensaje
          <div className="small-icon">
            <SendIcon />
          </div>
        </button>
        {status === "SUCCESS" && (
          <p className="message-send success">¡Mensaje enviado con éxito!</p>
        )}
        {status === "FAILED" && (
          <p className="message-send error">
            Hubo un error al enviar el mensaje. Inténtalo de nuevo.
          </p>
        )}
      </form>
    </section>
  );
};

export default FormSection;
