import React, { useEffect, useState, useRef } from 'react';
import './Home.css';
import Progress from './Progress'; 
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLinkedin, faGithub } from '@fortawesome/free-brands-svg-icons';

const Home = () => {
    const [typedText, setTypedText] = useState('');
    const textToType = "An Undergraduate & A Developer";

    const observer = useRef(null);

    useEffect(() => {
        let options = {
            root: null,
            rootMargin: '0px',
            threshold: 0.5 // Trigger when at least 50% of the element is visible
        };
    
        observer.current = new IntersectionObserver(entries => {
            entries.forEach(entry => {
                if (entry.isIntersecting && entry.intersectionRatio >= 0.5) {
                    entry.target.classList.add('is-visible'); // Add is-visible class when intersecting by at least 50%
                } else {
                    entry.target.classList.remove('is-visible'); // Remove is-visible class when not intersecting
                }
            });
        }, options);
    
        // Observe each image box
        document.querySelectorAll('.project-box').forEach(box => {
            observer.current.observe(box);
        });
    
        return () => observer.current.disconnect();
    }, []);
    
    
    
    
    useEffect(() => {
        let currentIndex = 0;
        const typingInterval = setInterval(() => {
            if (currentIndex <= textToType.length) {
                setTypedText(textToType.substring(0, currentIndex));
                currentIndex++;
            } else {
                clearInterval(typingInterval);
            }
        }, 100); // Adjust typing speed here (milliseconds)
        return () => clearInterval(typingInterval);
    }, []);

    return (
        <div className="container">
            {/* Irregular shape background */}
            <div className="background"></div>

            {/* Main content */}
            <div className="content">
                {/* Header */}
                <header className="header">
                    <nav>
                        <div className="nav-list">
                            <div className="nav-list-a1">
                                <Link className="btn" to="/">Home</Link>
                            </div>
                            <div className="nav-list-a2">
                                <Link className="btn" to="/about">About</Link>
                            </div>
                            <div className="nav-list-a3">
                                <Link className="btn" to="/contact">Contact</Link>
                            </div>
                        </div>
                    </nav>
                </header>

                <div className="text1">
                    <p className='text2'>
                        Hi..! 
                        <br/>
                        I am <span style={{ color: 'rgba(13, 192, 224, 0.959)', fontSize:'60px', fontWeight: 'bold' }}>Avishka</span>,
                        <br />
                        <span>{typedText}</span>
                        <span id="cursor">|</span>
                    </p>
                   
                    <div className='iconbuttons'>
                        <a href="https://www.linkedin.com/in/avishkakoswaththa/" target="_blank" rel="noopener noreferrer">
                            <div className="icon-container1">
                                <FontAwesomeIcon icon={faLinkedin} color="black" size="xs" />
                            </div>
                        </a>
                        <a href="https://github.com/AvishkaKoswatta" target="_blank" rel="noopener noreferrer">
                            <div className="icon-container2">
                                <FontAwesomeIcon icon={faGithub} color="black"  size="xs"/>
                            </div>
                        </a>
                    </div>
                    <div className='circles'>
                        <div className="dot-container">
                            {/* Top row of dots */}
                            <div className="dot-row">
                                <div className="dot"></div>
                                <div className="dot"></div>
                                <div className="dot"></div>
                            </div>
                            <div className="dot-row">
                                <div className="dot"></div>
                                <div className="dot"></div>
                                <div className="dot"></div>
                            </div>
                            <div className="dot-row">
                                <div className="dot"></div>
                                <div className="dot"></div>
                                <div className="dot"></div>
                            </div>
                        </div>
                        <div className="dot-container2">
                            {/* Top row of dots */}
                            <div className="dot-row2">
                                <div className="dot2"></div>
                                <div className="dot2"></div>
                                <div className="dot2"></div>
                            </div>
                            <div className="dot-row2">
                                <div className="dot2"></div>
                                <div className="dot2"></div>
                                <div className="dot2"></div>
                            </div>
                            <div className="dot-row2">
                                <div className="dot2"></div>
                                <div className="dot2"></div>
                                <div className="dot2"></div>
                            </div>
                        </div>
                    </div>
                    <div className='second'>
                        <div className='square'></div>
                       <div className='myskills-txt'>My skills</div> 
                        <br/>
                        <div className='skills'>
                            <div className='square1' style={{ backgroundImage: 'url(/images/java.gif)', backgroundSize: 'cover', backgroundPosition: 'center' }}></div>
                            <div className='square2' style={{ backgroundImage: 'url(/images/react.gif)', backgroundSize: 'cover', backgroundPosition: 'center' }}></div>
                            <div className='square3' style={{ backgroundImage: 'url(/images/flutter.gif)', backgroundSize: 'cover', backgroundPosition: 'center' }}></div>
                            <div className='square4' style={{ backgroundImage: 'url(/images/feather.gif)', backgroundSize: 'cover', backgroundPosition: 'center' }}></div>
                            <Progress  />
                        </div>
                    </div>
                    <br/>
                    <div className='third'>
                       <div className='project-txt1'>Projects</div> 
                       <div className='project-container'>
                        <div className='line'></div>
                        <Link to="/project1">
                        <div className='box1 project-box' style={{ backgroundImage: 'url(/images/fort.jpg)', backgroundSize: 'cover', backgroundPosition: 'center', height: '200px', width: '400px'}}>
                        
                        <div className="project-text">
                            <p className="project">DownSouth Tourists Medical Help project</p>
                            <p className="project-des">This is an ongoing group project that provides medical center and tourist destination information around DownSouth to the tourists.
                                <br/>Technologies: MERN, Flutter
                            </p>
                        </div>
                        </div>
                        </Link>
                        <div className='box2 project-box' style={{ backgroundImage: 'url(/images/land.jpg)', backgroundSize: 'cover', backgroundPosition: 'center', height: '200px', width: '400px' }}>
                        <div className="project-text">
                            <p className="project">Real Estate website</p>
                            <p className="project-des">An individual web application project that aims to develop basic CRUD operations in the land selling and buying system.
                                <br/>Technologies: Java, React, MySQL (Spring Boot)
                            </p>
                        </div>
                        </div>
                        <div className='box3 project-box' style={{ backgroundImage: 'url(/images/house.webp)', backgroundSize: 'cover', backgroundPosition: 'center', height: '200px', width: '400px' }}>
                            
                        <div className="project-text">
                            <p className="project">Real Estate Exploration App</p>
                            <p className="project-des">A group project that aims to develop a mobile app to explore and post an Ad without going through a complex procedure.
                                <br/>Technologies: Flutter
                            </p>
                        </div>
                        </div>
                        <div className='box4 project-box'  style={{ backgroundImage: 'url(/images/srs.jpg)', backgroundSize: 'cover', backgroundPosition: 'center', height: '200px', width: '400px' }}>
                        <div className="project-text">
                            <p className="project">Student registration system</p>
                            <p className="project-des">An individual project that aims to develop a basic student registration system as a GUI application.
                                <br/>Technologies: WPF for GUI (MVVM), SQLite
                            </p>
                        </div>
                        </div>
                        <div className='box5 project-box' style={{ backgroundImage: 'url(/images/mental.jpeg)', backgroundSize: 'cover', backgroundPosition: 'center', height: '200px', width: '400px' }}>
                            
                        <div className="project-text">
                            <p className="project">Mental Health Prediction project</p>
                            <p className="project-des">A machine learning group project that predicts mental health in the IT sector.
                                <br/>Technologies: Python (ML)
                            </p>
                        </div>
                        </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Footer */}
            <footer className="footer">
                
                <p>&copy; 2024 My Portfolio</p>
            </footer>
        </div>
    );
};

export default Home;