import React from 'react';
import { NavLink, Link } from 'react-router-dom';
import LogoJm from '../assets/LogoJm.png'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHome, faUser, faEnvelope, faBriefcase } from '@fortawesome/free-solid-svg-icons'
import { faLinkedin, faGithub, faInstagram } from '@fortawesome/free-brands-svg-icons';

const Sidebar = () => {
    return (
        <div className='nav-bar'>
             <a className='logo' to='/'>
                <img src={LogoJm} alt="logo" />
             </a>
             <nav className='nav'>
                <Link to="/" className='active'>
                <FontAwesomeIcon icon={faHome} color="#4d4d4e" />
                </Link>
                <Link to="/about" className='about-link'>
                <FontAwesomeIcon icon={faUser} color="#4d4d4e" />
                </Link>
                <Link to="/projects" className='projects-link'>
                <FontAwesomeIcon icon={faBriefcase} color="#4d4d4e"  />  
                </Link>
                <Link to="/contact" className='contact-link'>
                <FontAwesomeIcon icon={faEnvelope} color="#4d4d4e" />  
                </Link>
             </nav>
             <ul className='socialMedia'>
                <li>
                    <a target="_blank" rel='noreferrer' href="https://www.linkedin.com/in/jordi-mantilla21">
                        <FontAwesomeIcon icon={faLinkedin} color="#4d4d4e" /> 
                    </a>
                </li>
                <li>
                    <a target="_blank" rel='noreferrer' href="https://github.com/JordiM21">
                        <FontAwesomeIcon icon={faGithub} color="#4d4d4e" /> 
                    </a>
                </li>
                <li>
                    <a target="_blank" rel='noreferrer' href="https://github.com/JordiM21">
                        <FontAwesomeIcon icon={faInstagram} color="#4d4d4e" /> 
                    </a>
                </li>
             </ul>
        </div>
    );
};

export default Sidebar;