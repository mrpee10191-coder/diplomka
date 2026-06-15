import { useContext } from 'react';
import { useTranslation } from 'react-i18next';
import { mim, skill } from '../utils/img';
import { Port } from '../context/Port';

const Contacts = () => {
  const { skills } = useContext(Port);
  const { t } = useTranslation();

  return (
    <div className='skills'>
      <div className="container skills__nav">

        {/* TITLE */}
        <h1 className="skills__title">
          <span>{t("skills.about")}</span>

          <span className='skills__title-desc'>
            {t("skills.me")}
            <img src={mim} alt="" className='skills__title-img' />
          </span>
        </h1>

        <div className="skills__btw">

          {/* TEXT */}
          <div className="skills__desc">
            <div className="skills__desc-desc">
              <div className="skills__desc-desc_line"></div>

              <div className="skills__desc-desc_text">
                <p>
                  {t("skills.description1")}
                </p>

                <p>
                  {t("skills.description2")}
                </p>
              </div>
            </div>

            {/* SKILLS */}
            <div className="skills__desc-skills">
              <h2 className='skills__desc-skills_title'>
                {t("skills.skills")}
              </h2>

              <div className="skills__desc-skills_lang">
                {skills.map(item => (
                  <div
                    className="skills__desc-skills_lang-type"
                    key={item.id}
                  >
                    <img src={item.img} alt="" />

                    <h4 className="skills__desc-skills_lang-type_title">
                      {item.title}
                    </h4>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* IMAGE */}
          <div className="skills__btw-img">
            <img src={skill} alt="" />
          </div>

        </div>
      </div>
    </div>
  );
};

export default Contacts;