import React, { useState, useEffect } from "react";
import "./navbar.css";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("#"); // تخزين السيكشن النشط

  useEffect(() => {
    const sections = document.querySelectorAll("section");
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(`#${entry.target.id}`);
          }
        });
      },
      { threshold: 0.6 } // تحديد متى يعتبر السيكشن ظاهرًا (60% منه على الأقل)
    );

    sections.forEach((section) => observer.observe(section));

    return () => {
      sections.forEach((section) => observer.unobserve(section));
    };
  }, []);

  return (
    <>
      <div className="nav-size"></div>
      <header className="navbar">
      <a
          className="contact-us"
          href="tel:+201040031584"
        >
          تواصل معنا <i className="fa-solid fa-phone-volume"></i>
        </a>
        <div
          className={`menu-toggle ${menuOpen ? "active" : ""}`}
          onClick={() => setMenuOpen(!menuOpen)}
        >
          <span className="bar"></span>
          <span className="bar"></span>
          <span className="bar"></span>
        </div>
        <ul className={`nav-list ${menuOpen ? "active" : ""}`}>
          <li>
            <a
              href="#"
              className={activeSection === "#" ? "active" : ""}
            >
              الرئيسية
            </a>
          </li>
          <li>
            <a
              href="#about-sec"
              className={activeSection === "#about-sec" ? "active" : ""}
            >
              من أنا
            </a>
          </li>
          <li>
            <a
              href="#achievs"
              className={activeSection === "#achievs" ? "active" : ""}
            >
              الإنجازات
            </a>
          </li>
          <li>
            <a
              href="#certificate"
              className={activeSection === "#certificate" ? "active" : ""}
            >
              الشهادات
            </a>
          </li>
          <li>
            <a
              href="#models-sec"
              className={activeSection === "#models-sec" ? "active" : ""}
            >
              نماذج الشباب
            </a>
          </li>
        </ul>

        <Link to="/" className="logo">
          <img src="/assets/Dr.Mohamed.svg" alt="Ausrah-Logo" />
        </Link>
      </header>
    </>
  );
};

export default Navbar;
