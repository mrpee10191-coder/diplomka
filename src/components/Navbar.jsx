import { useContext, useEffect, useRef, useState } from "react";
import { Port } from "../context/Port";
import { useTranslation } from "react-i18next";
import { moo, russia, su, sun, usa, uzb } from "../utils/img";


const Navbar = () => {
  const { t, i18n } = useTranslation();

  const burgerRef = useRef(null);
  const langRef = useRef(null);

  const { navbarSections, toggleTheme, theme } = useContext(Port);

  const [openBurger, setOpenBurger] = useState(false);
  const [isLanguageOpen, setIsLanguageOpen] = useState(false);

  const lang = [
    { img: usa, value: "en", id: 1 },
    { img: russia, value: "ru", id: 2 },
    { img: uzb, value: "uz", id: 3 },
  ];

  const [language, setLanguage] = useState(() => {
    return localStorage.getItem("lang") || "ru";
  });
  const changeLangHandler = (langCode) => {
    setLanguage(langCode);
    i18n.changeLanguage(langCode);
    localStorage.setItem("lang", langCode);
    setIsLanguageOpen(false);
  };



  useEffect(() => {
    i18n.changeLanguage(language);
  }, []);
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (
        burgerRef.current &&
        !burgerRef.current.contains(event.target)
      ) {
        setOpenBurger(false);
      }

      if (
        langRef.current &&
        !langRef.current.contains(event.target)
      ) {
        setIsLanguageOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (
        burgerRef.current &&
        !burgerRef.current.contains(event.target)
      ) {
        setOpenBurger(false);
      }

      if (
        langRef.current &&
        !langRef.current.contains(event.target)
      ) {
        setIsLanguageOpen(false);
      }
    };

    const handleScroll = () => {
      setOpenBurger(false);
      setIsLanguageOpen(false);
    };

    document.addEventListener("mousedown", handleClickOutside);
    window.addEventListener("scroll", handleScroll);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <header className="header">
      <div className="container nav">

        {/* LANGUAGE */}
        <div className="header__name" ref={langRef}>
          <button
            className="btn__lang"
            onClick={() => setIsLanguageOpen(prev => !prev)}
          >
            <img
              src={lang.find(item => item.value === language)?.img}
              alt=""
            />
          </button>

          {isLanguageOpen && (
            <ul className="language__list show">
              {lang
                .filter(item => item.value !== language)
                .map(item => (
                  <li
                    key={item.id}
                    className="language__item"
                    onClick={() => changeLangHandler(item.value)}
                  >
                    <img src={item.img} alt="" />
                  </li>
                ))}
            </ul>
          )}

          <button onClick={toggleTheme} className="theme">
            {theme === "light"
              ? <img src={moo} alt="" className="moo" />
              : <img src={sun} alt="" className="su" />}
          </button>
        </div>

        {/* BURGER */}
        <div className="header__sections" ref={burgerRef}>
          <button
            className={`burger ${openBurger ? "active" : ""}`}
            onClick={() => setOpenBurger(prev => !prev)}
          >
            <span></span>
            <span></span>
            <span></span>
          </button>

          {openBurger && (
            <div className="sections show">
              {navbarSections.map(item => (
                <a
                  className="a"
                  key={item.id}
                  href={`#${item.id}`}
                  onClick={() => setOpenBurger(false)}
                >
                  {t(item.key)}
                </a>
              ))}
            </div>
          )}
        </div>

      </div>
    </header>
  );
};

export default Navbar;