import { useTranslation } from "react-i18next";
import { arrow, arrow10, black60, git, internet, internet45, toLeft, toRight, trybe } from '../utils/img';
import { useContext } from "react";
import { Port } from "../context/Port";

const Projects = () => {
  const { t } = useTranslation();
  const { theme } = useContext(Port);
  return (
    <div className='projects'>
      <div className="container projects__nav">

        {/* TITLE */}
        <div className="projects__title">
          <h1 className='projects__title-desc'>
            <span>{t("projects.last")}</span>
            <span>{t("projects.projects")}</span>
          </h1>
        </div>

        {/* PROJECTS */}
        <div className="projects__examples">

          {/* CARD 1 */}
          <div className="projects__examples-try">
            <h3 className="projects__examples-try_title">
              {t("projects.shoppingCart")}
            </h3>

            <div className="projects__examples-try_lang">
              <button className="projects__examples-try_lang-uses react">React</button>
              <button className="projects__examples-try_lang-uses javascript">Javascript</button>
            </div>

            <div className="projects__examples-try_img">
              <img src={trybe} alt="" />
            </div>

            <div className="projects__examples-try_deploy">
              <a href="#">
                {t("projects.github")}
                <img src={theme === "light" ? git : black60} className="icon-default" alt="" />
                <img src={theme === "light" ? arrow : arrow10} className="icon-hover" alt="" />
              </a>

              <a href="#">
                {t("projects.deploy")}
                <img src={theme === "light" ? internet : internet45} className="icon-default" alt="" />
                <img src={theme === "light" ? arrow : arrow10} className="icon-hover" alt="" />
              </a>
            </div>
          </div>

          {/* CARD 2 */}
          <div className="projects__examples-try">
            <h3 className="projects__examples-try_title">
              {t("projects.shoppingCart")}
            </h3>

            <div className="projects__examples-try_lang">
              <button className="projects__examples-try_lang-uses react">React</button>
              <button className="projects__examples-try_lang-uses javascript">Javascript</button>
              <button className="projects__examples-try_lang-uses node">node.js</button>
            </div>

            <div className="projects__examples-try_img">
              <img src={trybe} alt="" />
            </div>

            <div className="projects__examples-try_deploy">
              <a href="#">
                {t("projects.github")}
                <img src={theme === "light" ? git : black60} className="icon-default" alt="" />
                <img src={theme === "light" ? arrow : arrow10} className="icon-hover" alt="" />
              </a>

              <a href="#">
                {t("projects.deploy")}
                <img src={theme === "light" ? internet : internet45} className="icon-default" alt="" />
                <img src={theme === "light" ? arrow : arrow10} className="icon-hover" alt="" />
              </a>
            </div>
          </div>

          {/* CARD 3 */}
          <div className="projects__examples-try third">
            <h3 className="projects__examples-try_title">
              {t("projects.shoppingCart")}
            </h3>

            <div className="projects__examples-try_lang">
              <button className="projects__examples-try_lang-uses react">React</button>
              <button className="projects__examples-try_lang-uses api">API</button>
            </div>

            <div className="projects__examples-try_img">
              <img src={trybe} alt="" />
            </div>

            <div className="projects__examples-try_deploy">
              <a href="#">
                {t("projects.github")}
                <img src={theme === "light" ? git : black60} className="icon-default" alt="" />
                <img src={theme === "light" ? arrow : arrow10} className="icon-hover" alt="" />
              </a>

              <a href="#">
                {t("projects.deploy")}
                <img src={theme === "light" ? internet : internet45} className="icon-default" alt="" />
                <img src={theme === "light" ? arrow : arrow10} className="icon-hover" alt="" />
              </a>
            </div>
          </div>

        </div>

        {/* BUTTONS */}
        <div className="projects__btns">
          <img src={toLeft} alt="" className='btn_left' />
          <p className='more'>{t("projects.more")}</p>
          <img src={toRight} alt="" />
        </div>

      </div>
    </div>
  );
};

export default Projects;