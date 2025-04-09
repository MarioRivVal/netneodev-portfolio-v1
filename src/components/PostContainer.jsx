import { Fragment, useEffect, useState } from "react";
import { ArrowRightIcon, CloseIcon } from "./Icons";
import { postData } from "../data/post";
import { getDataset } from "../functions";

const PostContainer = () => {
  const [modalActive, setModalActive] = useState(false);
  const [postSelected, setPostSelected] = useState("");
  const [post, setPost] = useState({});

  const handleBlogTextActive = (e) => {
    const dataTitle = getDataset(e);

    setPostSelected(dataTitle);
    setModalActive(true);
    console.log(postSelected);
  };

  useEffect(() => {
    if (postSelected) {
      findPost();
    }
  }, [postSelected]);

  const findPost = () => {
    const section = postData
      .filter((item) => item.title === postSelected)
      .at(0);
    setPost(section);
    console.log(post);
  };

  const handleCloseModal = () => {
    setModalActive(false);
    setPostSelected("");
    setPost({});
  };

  return (
    <div className="blog-container">
      <h4 className="title-section">Mis Posts</h4>
      <h2 className="secondary-title">
        {" "}
        <span>Experiencias y Opiniones</span>
      </h2>
      <div className="blog-cards columns-3">
        {postData.map((item) => (
          <div className="blog-card" key={item.id}>
            <picture>
              <source
                loading="lazy"
                srcSet={`img/post/${item.img}_light.webp`}
              />
              <img
                loading="lazy"
                src={`img/post/${item.img}.jpeg`}
                alt="blog-img"
              />
            </picture>

            <div className="post-date">
              <p>{item.date}</p>
            </div>

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
        <h4 className="title-section">Mis Posts</h4>
        <h2 className="secondary-title">
          {" "}
          <span>{post.title}</span>
        </h2>
        <div className="post-box">
          <div className="post-fulltext-box">
            <picture>
              <source
                loading="lazy"
                srcSet={`img/post/${post.img}_light.webp`}
              />
              <img
                loading="lazy"
                src={`img/post/${post.img}.jpeg`}
                alt="blog-img"
              />
            </picture>
            <p className="post-fulltext-date">{post.date}</p>
            {modalActive && post.text
              ? post.text.map((item, i) => (
                  <Fragment key={i}>
                    <p className="post-fulltext">{item}</p>
                  </Fragment>
                ))
              : null}
          </div>
        </div>
      </div>
    </div>
  );
};

export default PostContainer;
