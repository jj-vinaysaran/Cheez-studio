import React, { useEffect } from 'react';
import './Home.css';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTwitter, faInstagram } from '@fortawesome/free-brands-svg-icons';
import ImageCarousel from './ImageCarousel';

const Home = () => {
    useEffect(() => {
        const handleScroll = () => {
            const navbar = document.querySelector('.navbar');
            if (window.scrollY > 0) {
                navbar.classList.add('white');
            } else {
                navbar.classList.remove('white');
            }
        };

        window.addEventListener('scroll', handleScroll);

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    return (
        <div className='home_bg'>

            {/* NavBar */}
            <nav className="navbar">
                <div className="navbar-logo">
                    <Link to="/" className='link-text'>Photographer's Name</Link>
                </div>
                <div className='nav-options'>
                    <ul className="navbar-menu">
                        <li className="navbar-item">
                            <Link to="/">Home</Link>
                        </li>
                        <li className="navbar-item">
                            <Link to="/portfolio">Portfolio</Link>
                        </li>
                        <li className="navbar-item">
                            <Link to="/services">Services</Link>
                        </li>
                        <li className="navbar-item">
                            <Link to="#contact">Contact</Link>
                        </li>
                    </ul>
                </div>
                <div className='social-icons'>
                    <FontAwesomeIcon icon={faTwitter} size="1x" color='black' />
                    <FontAwesomeIcon icon={faInstagram} size="1x" color='black' />
                </div>
            </nav>

            {/* Carousel Part */}
            <div className='carousel'>
                <ImageCarousel />
            </div>

            {/* About Photographer */}
            <div className='about-section'>

            </div>
        </div>
    )
}

export default Home;
