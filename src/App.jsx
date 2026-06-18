import Navbar from "./components/Navbar";
import Projects from "./components/Projects";
import AboutMe from "./components/AboutMe";
import Contacts from "./components/Contacts";
import Footer from "./components/Footer";

import { Port } from "./context/Port";
import { node, react, sql, trybe } from "./utils/img";
import { useEffect, useState, useLayoutEffect } from "react";
import { useTranslation } from "react-i18next";

const App = () => {
  const { t } = useTranslation();
  
  const [theme, setTheme] = useState(
    localStorage.getItem("theme") || "light"
  )
  const toggleTheme = () => {
    setTheme(prev => (prev === "light" ? "dark" : "light"))
  }

  const navbarSections = [
    { id: 'projects', key: "nav.projects" },
    { id: 'aboutme', key: "nav.about" },
    { id: 'contacts', key: "nav.contacts" }
  ];

  const projects = [
    {
      id: "first", title: t("projects.shoppingCart"),
      langFirst: "React", langSecond: "JavaScript",
      img: trybe,
      github: t("projects.github"), deploy: t("projects.deploy"),
    },
    {
      id: "second", title: t("projects.shoppingCart"),
      langFirst: "React", langSecond: "JavaScript", langThird: "node.js",
      img: trybe,
      github: t("projects.github"), deploy: t("projects.deploy"),
    },
    {
      id: "third", title: t("projects.shoppingCart"),
      langFirst: "React", langSecond: "API",
      img: trybe,
      github: t("projects.github"), deploy: t("projects.deploy"),
    },
    {
      id: "forth", title: t("projects.shoppingCart"),
      langFirst: "React", langSecond: "API",
      img: trybe,
      github: t("projects.github"), deploy: t("projects.deploy"),
    },
    {
      id: "fifth", title: t("projects.shoppingCart"),
      langFirst: "React", langSecond: "API",
      img: trybe,
      github: t("projects.github"), deploy: t("projects.deploy"),
    },
    {
      id: "sixth", title: t("projects.shoppingCart"),
      langFirst: "React", langSecond: "API",
      img: trybe,
      github: t("projects.github"), deploy: t("projects.deploy"),
    },
  ]

  const skills = [
    { id: 'react', title: 'React', img: react },
    { id: 'node', title: 'Node.js', img: node },
    { id: 'mySql', title: 'MySQL', img: sql },
  ]

  useEffect(() => {
    document.body.className = theme
  }, [theme])
  useEffect(() => {
    localStorage.setItem("theme", theme)
  }, [theme])
  useLayoutEffect(() => {
  const saved = localStorage.getItem("scrollY");

  if (saved !== null) {
    requestAnimationFrame(() => {
      window.scrollTo({
        top: Number(saved),
        behavior: "smooth",
      });
    });
  }
}, []);

  return (
    <>
      <Port.Provider value={{
        navbarSections,
        skills,
        theme,
        setTheme,
        toggleTheme,
        projects,
      }} >
        <Navbar />

        <section id="aboutme">
          <AboutMe />
        </section>

        <section id="projects">
          <Projects />
        </section>

        <section id="contacts">
          <Contacts />
        </section>

        <section id="footer">
          <Footer />
        </section>

      </Port.Provider>

    </>
  )
}

export default App