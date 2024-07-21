// Home.js
import React, { useEffect, useState, useRef } from 'react';
import './Home.css';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLinkedin, faGithub } from '@fortawesome/free-brands-svg-icons';
import NumorprismCard from './NumorprismCard'; 
import Button from './Button';
import DownloadButton from './DownloadButton';
import './DownloadButton.css';
import Projects from './Projects';
import './Projects.css';

const Home = () => {
    const [typedText, setTypedText] = useState('');
    const textToType = "An Undergraduate";

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
                                <Link className="btn" to="/contactform">Contact</Link>
                            </div>
                        </div>
                    </nav>
                </header>

                <div className="text1">
                <div className='second-img'>
                        {/* <img src="/images/woman.png" alt="Search" style={{height:'180px'}} />  */}
                        </div>
                    <p className='text2'>
                        Hi..! 
                        <br/>
                        I am <span style={{ color: '#756AB6 ', fontSize:'60px', fontWeight: 'bold' }}>Avishka</span>,
                        <br />
                        <span>{typedText}</span>
                        <span id="cursor">|</span>
                    </p>
                    
                    <DownloadButton />
                    {/* <div className='iconbuttons'>
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
                    </div> */}
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
                        
                        <div className='second-skills'>
                       
                        <NumorprismCard type="submit" ></NumorprismCard>
                        <div className='second-img'>
                        {/* <img src="/images/me1.png" alt="Search" style={{height:'180px'}} /> */}
                        </div>
                        </div>
                    </div>
                    <br/>
                    {/* <div className='third'>
                       <div className='project-txt1' >Projects</div> 
                       <div className='project-container'>
                        <div className='line'></div>
                      
                        <Link to="/project1">
                       
                        <div className='box1 project-box' style={{ backgroundImage: 'url(/images/project1.png)', backgroundSize: 'cover', backgroundPosition: 'center', height: '200px', width: '400px',margin:'10px'}}>
                        
                        <div className="project-text">
                            <p className="project">DownSouth Tourists Medical Help project</p>
                            
                        </div>
                        </div>
                       
                        </Link>
                        <Link to="/project2">
                        <div className='box2 project-box' style={{ backgroundImage: 'url(/images/project2.png)', backgroundSize: 'cover', backgroundPosition: 'center', height: '200px', width: '400px' }}>
                        <div className="project-text">
                            <p className="project">Real Estate website</p>
                           
                        </div>
                        </div>
                        </Link>
                        <div className='box3 project-box' style={{ backgroundImage: 'url(/images/p3.jpg)', backgroundSize: 'cover', backgroundPosition: 'center', height: '200px', width: '400px' }}>
                            
                        <div className="project-text">
                            <p className="project">Real Estate Exploration App</p>
                            <p className="project-des">A group project that aims to develop a mobile app to explore and post an Ad without going through a complex procedure.
                                <br/>Technologies: Flutter
                            </p>
                        </div>
                        </div>
                        <Link to="/project4"> 
                        <div className='box4 project-box'  style={{ backgroundImage: 'url(/images/project4.png)', backgroundSize: 'cover', backgroundPosition: 'center', height: '200px', width: '400px' }}>
                        <div className="project-text">
                            <p className="project">Home Service Finder Website</p>
                            
                        </div>
                        </div>
                        </Link>
                        <Link to="/project5">
                        <div className='box5 project-box' style={{ backgroundImage: 'url(/images/project5.png)', backgroundSize: 'cover', backgroundPosition: 'center', height: '200px', width: '400px' }}>
                            
                        <div className="project-text">
                            <p className="project">Mental Health Website project</p>
                            
                        </div>
                        </div>
                        </Link>

                        
                            
                        </div>
                    </div> */}
                    <div className='project-square' >
                    <div className='project-txt1' style={{ marginTop:'80px'}} >Projects</div>
                    <div className='project-img'>
                    
                        {/* <img src="/images/files.png" alt="Search" style={{height:'180px'}} />  */}
                        <Projects/>
                        </div>
                        <div>
                            <p></p>
                        </div>
                    </div>
                    <div className='four'>
                        <div className='project-txt1' style={{ marginTop:'50px',color:'white'}}>Find Me</div>
                        <Button type="submit" className="btn6 btn-primary">Send</Button>
                        
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
