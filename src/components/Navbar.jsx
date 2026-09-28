import { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import classes from "./Navbar.module.css";

const navItems = [
  { label: "About", id: "about" },
  { label: "Projects", id: "projects" },
  { label: "Technologies", id: "technologies" },
  { label: "Contact", id: "contact" },
];

function Navbar() {
  const [activeSection, setActiveSection] = useState("about");

  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    if (location.pathname !== "/") return;

    const handleScroll = () => {
      const sections = navItems
        .map((item) => document.getElementById(item.id))
        .filter(Boolean);

      const scrollPosition = window.scrollY + 180;

      sections.forEach((section) => {
        const top = section.offsetTop;
        const bottom = top + section.offsetHeight;

        if (scrollPosition >= top && scrollPosition < bottom) {
          setActiveSection(section.id);
        }
      });
    };

    window.addEventListener("scroll", handleScroll);

    handleScroll();

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [location.pathname]);

  const handleNavigation = (sectionId) => {
    if (location.pathname !== "/") {
      navigate(`/#${sectionId}`);
      return;
    }

    const section = document.getElementById(sectionId);

    if (section) {
      section.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }
  };

  const handleBrandClick = () => {
    setActiveSection("about");

    if (location.pathname !== "/") {
      navigate("/");

      setTimeout(() => {
        window.scrollTo({
          top: 0,
          behavior: "smooth",
        });
      }, 100);

      return;
    }

    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <header className={classes.header}>
      <nav className={classes.navbar}>
        <button
          className={classes.brand}
          onClick={handleBrandClick}
          type="button"
        >
          <span className={classes.brandDot}></span>

          <span className={classes.name}>
            Buse Nur Boz
          </span>

          <span className={classes.jobTitle}>
            Computer Engineer
          </span>
        </button>

        <div className={classes.navigation}>
          <div className={classes.navLinks}>
            {navItems.map((item) => (
              <button
                key={item.id}
                type="button"
                onClick={() => handleNavigation(item.id)}
                className={`${classes.navItem} ${
                  activeSection === item.id ? classes.active : ""
                }`}
              >
                {item.label}
              </button>
            ))}
          </div>

          <div className={classes.cvWrapper}>
            <a
              href="/cv/BUSE NUR BOZ.pdf"
              target="_blank"
              rel="noreferrer"
              className={classes.cvLink}
            >
              Resume
            </a>
          </div>
        </div>
      </nav>
    </header>
  );
}

export default Navbar;