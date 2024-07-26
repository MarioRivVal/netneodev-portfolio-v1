import { Fragment, useEffect, useState } from "react";
import { ArrowRightIcon, CloseIcon } from "./Icons";
import { blog } from "../data/blog";
import { getDataset } from "../functions";
const BlogContainer = () => {
  const [modalActive, setModalActive] = useState(false);
  const [blogSelected, setBlogSelected] = useState("");
  const [fullText, setFullText] = useState([]);

  const handleBlogTextActive = (e) => {
    const dataTitle = getDataset(e);

    setBlogSelected(dataTitle);
    setModalActive(true);
  };

  useEffect(() => {
    if (blogSelected) {
      getFullText();
    }
  }, [blogSelected]);

  const getFullText = () => {
    const section = blog.filter((item) => item.title === blogSelected);
    if (section.length > 0) {
      setFullText(section[0].text);
    }
  };

  const handleCloseModal = () => {
    setModalActive(false);
    setBlogSelected("");
    setFullText([]);
  };

  return (
    <div className="blog-container">
      <h4 className="title-section">Mi Blog</h4>
      <h2 className="secondary-title">
        {" "}
        <span>Dev y Experiencias</span>
      </h2>
      <div className="blog-cards columns-3">
        {blog.map((item) => (
          <div className="blog-card" key={item.id}>
            <img src={`img/blog/${item.img}.jpeg`} />
            <div className="blog-details">
              <p className="blog-title">{item.title}</p>

              <a
                className="link-btn clickable"
                data-title={item.title}
                onClick={(e) => handleBlogTextActive(e)}
              >
                Leer
                <div className="small-icon">
                  <ArrowRightIcon />
                </div>
              </a>
            </div>
          </div>
        ))}
      </div>

      <div
        className={`overflow-y-scroll blog-fulltext-container ${
          modalActive ? "blog-fulltext-container-active" : ""
        }`}
      >
        <div
          className="small-icon clickable fulltext-icon"
          onClick={handleCloseModal}
        >
          <CloseIcon />
        </div>
        <h4 className="title-section">Mi Blog</h4>
        <h2 className="secondary-title">
          {" "}
          <span>{blogSelected}</span>
        </h2>
        <div className="blog-fulltext-box">
          {modalActive
            ? fullText.map((item) => (
                <Fragment key={item.part}>
                  <p className="blog-part">{item.part}</p>
                  <p className="blog-fulltext">
                    {item.paragraph.map((item, i) => (
                      <span key={i}>{item}</span>
                    ))}
                  </p>
                </Fragment>
              ))
            : null}
        </div>
      </div>
    </div>
  );
};

export default BlogContainer;
