import { Link, NavLink } from 'react-router-dom'
import './index.scss'
import React, { useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
  faBars,
  faClose,
  faEnvelope,
  faHome,
  faSuitcase,
  faUser,
} from '@fortawesome/free-solid-svg-icons'
import { faInstagram, faLinkedin } from '@fortawesome/free-brands-svg-icons'
import { faGithub } from '@fortawesome/free-brands-svg-icons/faGithub'

const Sidebar = () => {
  const [showNav, setShowNav] = useState(false)

  return (
    <div className="nav-bar">
      <Link className="logo" to="/">
        <h1>S</h1>
        <h2>Suzana</h2>
      </Link>

      <nav className={showNav ? 'mobile-show' : ''}>
        <NavLink
          exact="true"
          activeclassname="active"
          to="/"
          onClick={() => setShowNav(false)}
        >
          <FontAwesomeIcon icon={faHome} />
        </NavLink>
        <NavLink
        onClick={()=> setShowNav(false)}
          exact="true"
          activeclassname="active"
          to="/about"
          className="about-link"
        >
          <FontAwesomeIcon icon={faUser} />
        </NavLink>
        <NavLink
        onClick={()=> setShowNav(false)}
          exact="true"
          activeclassname="active"
          to="/portfolio"
          className="portfolio-link"
        >
          <FontAwesomeIcon icon={faSuitcase} />
        </NavLink>
        <NavLink
        onClick={()=> setShowNav(false)}
          exact="true"
          activeclassname="active"
          to="/contact"
          className="contact-link"
        >
          <FontAwesomeIcon icon={faEnvelope} />
        </NavLink>

        <FontAwesomeIcon
          icon={faClose}
          color="#ff4500"
          size="3x"
          className="close-icon"
          onClick={() => setShowNav(false)}
        />
      </nav>

      <ul>
        <li>
          <a
            target="_blank"
            rel="noreferrer"
            href="https://www.linkedin.com/in/suzanailieva/"
          >
            <FontAwesomeIcon icon={faLinkedin} />
          </a>
        </li>

        <li>
          <a
            target="_blank"
            rel="noreferrer"
            href="https://github.com/SuzanaILIEVA"
          >
            <FontAwesomeIcon icon={faGithub} />
          </a>
        </li>
        <li>
          <a
            target="_blank"
            rel="noreferrer"
            href="https://www.instagram.com/suzi_codes/"
          >
            <FontAwesomeIcon icon={faInstagram} />
          </a>
        </li>
      </ul>

      <FontAwesomeIcon
        icon={faBars}
        color="#ff4500"
        size="3x"
        className="hamburger-icon"
        onClick={() => setShowNav(true)}
      />
    </div>
  )
}
export default Sidebar
