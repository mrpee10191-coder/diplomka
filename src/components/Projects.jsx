import { useTranslation } from "react-i18next";
import {
  arrow,
  arrow10,
  black60,
  git,
  internet,
  internet45,
  toLeft,
  toRight,
  trybe,
} from "../utils/img";
import { useContext, useRef } from "react";
import { Port } from "../context/Port";

import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";

const Projects = () => {
  const { t } = useTranslation();
  const { theme, projects } = useContext(Port);

  const swiperRef = useRef(null);

  const langClasses = {
    JavaScript: "javascript",
    API: "api",
    React: "react",
    "node.js": "node",
  };

  return (
    <div className="projects">
      <div className="container projects__nav">

        {/* TITLE */}
        <div className="projects__title">
          <h1 className="projects__title-desc">
            <span>{t("projects.last")}</span>
            <span>{t("projects.projects")}</span>
          </h1>
        </div>

        {/* PROJECTS */}
        <Swiper
          className="projects__examples"
          speed={400}
          spaceBetween={20}
          grabCursor={true}
          onSwiper={(swiper) => (swiperRef.current = swiper)}
          breakpoints={{
            0: {
              slidesPerView: 1,
            },
            700: {
              slidesPerView: 2,
            },
            1200: {
              slidesPerView: 3,
            },
          }}
        >
          {projects.map((item) => (
            <SwiperSlide key={item.id}>
              <div className="projects__examples-try">
                <h3 className="projects__examples-try_title">
                  {item.title}
                </h3>

                <div className="projects__examples-try_lang">
                  <button className="projects__examples-try_lang-uses react">
                    {item.langFirst}
                  </button>

                  <button
                    className={`projects__examples-try_lang-uses ${langClasses[item.langSecond] || ""
                      }`}
                  >
                    {item.langSecond}
                  </button>

                  {item.langThird === "node.js" && (
                    <button className="projects__examples-try_lang-uses node">
                      {item.langThird}
                    </button>
                  )}
                </div>

                <div className="projects__examples-try_img">
                  <img src={trybe} alt="" />
                </div>

                <div className="projects__examples-try_deploy">
                  <a href="#">
                    {item.github}
                    <img
                      src={theme === "light" ? git : black60}
                      className="icon-default"
                      alt=""
                    />
                    <img
                      src={theme === "light" ? arrow : arrow10}
                      className="icon-hover"
                      alt=""
                    />
                  </a>

                  <a href="#">
                    {item.deploy}
                    <img
                      src={theme === "light" ? internet : internet45}
                      className="icon-default"
                      alt=""
                    />
                    <img
                      src={theme === "light" ? arrow : arrow10}
                      className="icon-hover"
                      alt=""
                    />
                  </a>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>

        {/* BUTTONS */}
        <div className="projects__btns">
          <button
            className="btn_left"
            onClick={() => swiperRef.current?.slidePrev()}
          >
            <img src={toLeft} alt="" />
          </button>

          <p className="more">{t("projects.more")}</p>

          <button
            className="btn__right"
            onClick={() => swiperRef.current?.slideNext()}
          >
            <img src={toRight} alt="" />
          </button>
        </div>

      </div>
    </div>
  );
};

export default Projects;