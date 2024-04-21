import About from "@/components/about/About";
import Contact from "@/components/contact/Contact";
import Experience from "@/components/experience/Experience";
import Header from "@/components/Header";
import HomeDash from "@/components/home/HomeDash";
import Leadership from "@/components/leadership/Leadership";
import Projects from "@/components/projects/Projects";
import Skills from "@/components/skills/Skills";
import { useRouter } from "next/router";
import { useEffect } from "react";

const index = () => {
  const router = useRouter();

  const handleLinkClick = (path) => {
    router.push(`/myportfolio/#${path}`);
  };

  useEffect(() => {
    const stars = () => {
      let e = document.createElement("div");
      e.setAttribute("class", "star");
      document.body.appendChild(e);
      e.style.left = Math.random() * innerWidth + "px";

      setTimeout(() => {
        document.body.removeChild(e);
      }, 5000);
    };

    setInterval(() => {
      stars();
    }, 100);
  }, []);

  return (
    <>
      <div className="relative">
        <nav className="fixed left-0 right-0">
          <Header handleNavigation={handleLinkClick} />
        </nav>
        <main>
          <HomeDash id="home" />
          <About id="about" />
          <Experience />
          <Projects id="project" />
          <Leadership />
          <Skills id="skills" />
        </main>
        <footer>
          <Contact />
        </footer>
      </div>
    </>
  );
};

export default index;
