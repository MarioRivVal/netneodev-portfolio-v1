import { useState } from "react";
import { CloseIcon } from "./components/Icons";
import { getDataset } from "./functions";
import Header from "./components/Header";
import BlogContainer from "./components/BlogContainer";
import ProjectsContainer from "./components/ProjectsContainer";
import Navigation from "./components/Navigation";
import TicketSide from "./components/TicketSide";
import PortfolioSection from "./components/PortfolioSection";
import AboutSection from "./components/AboutSection";
import ResumeSection from "./components/ResumeSection";
import TestimonialsSection from "./components/TestimonialsSection";
import FormSection from "./components/FormSection";
import Footer from "./components/Footer";

const App = () => {
  const [isModalActive, setIsModalActive] = useState(false);
  const [modalSectionSelected, setModalSectionSelected] = useState("");

  const handleOpenModal = (e) => {
    const dataSection = getDataset(e);
    setModalSectionSelected(dataSection);
    setIsModalActive(true);
  };

  const handleCloseModal = () => {
    setIsModalActive(false);
    setModalSectionSelected("");
  };

  const displayModalSection = (sectionSelected) => {
    if (sectionSelected === "blog") {
      return <BlogContainer />;
    } else if (sectionSelected === "projects") {
      return <ProjectsContainer />;
    }

    return null;
  };

  return (
    <>
      <div className="app">
        <TicketSide />
        <div className="content-box">
          <main className="main-box" id="header">
            <Navigation />
            <Header handleOpenModal={handleOpenModal} />
          </main>
          <PortfolioSection handleOpenModal={handleOpenModal} />
          <AboutSection handleOpenModal={handleOpenModal} />
          <ResumeSection />
          <TestimonialsSection />
          <FormSection />
          <Footer />
        </div>
        <div className="big-circle"></div>
        <div className="small-circle"></div>
        <div className={`modal-box ${isModalActive ? "modal-box-active" : ""}`}>
          <div className="modal-container">
            <div
              className="small-icon clickable modal-icon"
              onClick={handleCloseModal}
            >
              <CloseIcon />
            </div>
            {displayModalSection(modalSectionSelected)}
          </div>
        </div>
      </div>
    </>
  );
};

export default App;
