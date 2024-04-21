import About from "@/components/about/About";
import Contact from "@/components/contact/Contact";
import Experience from "@/components/experience/Experience";
import Header from "@/components/Header";
import HomeDash from "@/components/home/HomeDash";
import Leadership from "@/components/leadership/Leadership";
import Projects from "@/components/projects/Projects";
import Skills from "@/components/skills/Skills";
import { useRouter } from "next/router";

const index = () => {
  const router = useRouter();

  const handleLinkClick = (path) => {
    router.push(`/myportfolio/#${path}`);
  };

  return (
    <>
      <div className="flex flex-col items-center">
        <div className="relative">
          <nav className="fixed left-0 right-0">
            <Header handleNavigation={handleLinkClick} />
          </nav>
        </div>
        <main>
          <HomeDash id="home" />
          <About id="about" />
          <Experience />
          <Projects id="project" />
          <Leadership />
          <Skills id="skills" />
          <Contact />
        </main>
        <footer></footer>
      </div>
    </>
  );
};

export default index;
