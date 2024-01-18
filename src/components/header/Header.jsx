import "./header.css";
import React from 'react';
import { useState, useEffect } from "react";
import { Link, useLocation } from 'react-router-dom';
import { useTranslation } from "react-i18next";
import { SelectButton } from 'primereact/selectbutton';
import { changeLanguage } from "i18next";

const Header = ({ title }) => {
  const [isNavOpen, setIsNavOpen] = useState(false);
  const location = useLocation();
  const { i18n } = useTranslation("global");
  const [languages, setLanguages] = useState(["ned", "eng"]);

  useEffect(() => {
    setIsNavOpen(false);
  }, [location]);

  
  const handleChangeLanguage = (language) => {
    console.log(language);
    i18n.changeLanguage(language);
  };

  const handleClickNavToggle = () => {
    console.log(isNavOpen)
    setIsNavOpen(!isNavOpen);
  };

  return (
    <header className="header">
      <div className={`header__content preload ${isNavOpen && 'open'}`}>
        <Link to="/" className="header__logo--container layered-grid">
          <h1>Emile Caron</h1>
        </Link>
        <input type="checkbox" id="nav-toggle" className="nav-toggle" />
        <nav className={`navbar ${isNavOpen ? 'navOpen' : ''}`}>
          <ul className="menu__items">
            <li className="menu__item">
              <Link className="item__link" to="/">
                Home
              </Link>
            </li>
            <li className="menu__item">
              <Link className="item__link" to="/media">
                Media
              </Link>
            </li>
            <li className="menu__item">
              <Link className="item__link" to="/projects">
                Projecten
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
