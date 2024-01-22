import "./header.css";
import React, { useContext } from 'react';
import { useState, useEffect } from "react";
import { Link, useLocation } from 'react-router-dom';
import { useTranslation } from "react-i18next";
import { SelectButton } from 'primereact/selectbutton';
import { changeLanguage } from "i18next";
import { ActivityContext } from "../../contexts/ActivityContext";

const Header = ({ title }) => {
  const [isNavOpen, setIsNavOpen] = useState(false);
  const location = useLocation();
  const { t, i18n } = useTranslation("global");
  const [languages, setLanguages] = useState(["ned", "eng"]);
  const { icon, activityState, toggleActivity } = useContext(ActivityContext);

  useEffect(() => {
    setIsNavOpen(false);
  }, [location]);

  const handleClickNavToggle = () => {
    console.log(isNavOpen)
    setIsNavOpen(!isNavOpen);
  };

  return (
    <header className="header">
      <div className={`header__content preload ${isNavOpen && 'open'}`}>
        <div className="header__logo--container">
          <div onClick={toggleActivity} className={`activity__container fade-img ${activityState ? activityState : ""}`}>
            {icon}
          </div>
          <Link to="/" className="layered-grid">
            <h1>Emile Caron</h1>
          </Link>
        </div>
        
        <input type="checkbox" id="nav-toggle" className="nav-toggle" />
        <nav className={`navbar ${isNavOpen ? 'navOpen' : ''}`}>
          <ul className="menu__items">
            <li className="menu__item">
              <Link className="item__link" to="/">
                Home
              </Link>
            </li>
            <li className="menu__item">
              <Link className="item__link" to="/about">
                {t("header.about")}
              </Link>
            </li>
            <li className="menu__item">
              <Link className="item__link" to="/projects">
                {t("header.projects")}
              </Link>
            </li>
            <li className="menu__item">
              <Link className="item__link" to="/contact">
                Contact
              </Link>
            </li>
            <SelectButton value={i18n.language} onChange={(e) => changeLanguage(e.value)} options={languages} />
          </ul>
        </nav>
        <label htmlFor="nav-toggle" className="toggle-button" onClick={handleClickNavToggle}>
          <span className="toggle-button-bar"></span>
          <span className="toggle-button-bar"></span>
          <span className="toggle-button-bar"></span>
        </label>
      </div>
    </header>
  );
}

export default Header;
