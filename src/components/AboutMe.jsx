import { useContext } from 'react';
import { Port } from '../context/Port';
import { arrow, arrow10, face } from '../utils/img'
import { useTranslation } from "react-i18next";

const AboutMe = () => {
  const { t } = useTranslation();
  const { theme } = useContext(Port)
  return (
    <div className='about'>
      <div className="container about__nav">
        <img src={face} alt="" />
        <div className="about__title">
          <h4 className="about__title-title">
            {t("about.myName")}
          </h4>
          <div className="about__title-desc">
            <div className='dev'> {t("about.develop")} <span className='sp'> {t("about.ideas")} </span><p className='also'> & </p> <p className='and'> {t("about.and")} </p></div>
            <p> {t("about.helpBuild")} </p>
            <p> {t("about.worldThrough")} </p>
            <p> {t("about.software")} </p>
          </div>
        </div>
        <div className="about__btns">
          <button className='about__btns-contact' >
            <a href="#footer">{t("about.contact")}</a>
          </button>
          <div className="about__btns-download">
            <a href="/cv.pdf" download='Firdavs_CV.pdf' className='about__btns-download_desc'>{t("about.downloadCv")}</a>
            <img src={theme === "light" ? arrow : arrow10} alt="" className='about__img-black' />
          </div>
        </div>
      </div>
    </div>
  )
}

export default AboutMe