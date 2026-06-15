import Navbar from "./components/Navbar";
import Projects from "./components/Projects";
import AboutMe from "./components/AboutMe";
import Contacts from "./components/Contacts";
import Footer from "./components/Footer";

import { Port } from "./context/Port";
import { node, react, sql } from "./utils/img";
import { useEffect, useState } from "react";

const App = () => {
  const navbarSections = [
    { id: 'projects', key: "nav.projects" },
    { id: 'aboutme', key: "nav.about" },
    { id: 'contacts', key: "nav.contacts" }
  ];

  const skills = [
    { id: 'react', title: 'React', img: react },
    { id: 'node', title: 'Node.js', img: node },
    { id: 'mySql', title: 'MySQL', img: sql },
  ]

  const [theme, setTheme] = useState(
    localStorage.getItem("theme") || "light"
  )
  const toggleTheme = () => {
    setTheme(prev => (prev === "light" ? "dark" : "light"))
  }
   useEffect(() => {
    document.body.className = theme
  }, [theme])
  useEffect(() => {
    localStorage.setItem("theme", theme)
  }, [theme])

  return (
    <>
      <Port.Provider value={{
        navbarSections,
        skills,
        theme,
        setTheme,
        toggleTheme,
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

        <Footer />

      </Port.Provider>

    </>
  )
}

export default App