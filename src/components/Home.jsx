import React, { useEffect } from 'react';
import LogoJ from '../assets/LogoJ.png'
import JordiPaint  from "../assets/JordiPaint.png";
import {gsap} from 'gsap'
import { Link } from 'react-router-dom';

const Home = () => {

    const timeline = gsap.timeline();

    useEffect(() => {
        const Button = document.querySelector('.flat-button')
        timeline.to(Button, { opacity: 1, y: 50, duration: 1 })
    }, [])
    
    return (
        <div className='container home-page'>
            <div className='text-zone'>
                <h1>
                <span>H</span>
                <span>i,</span> <br /> 
                <span>I'</span>
                <span>m</span>
                <img src={LogoJ} alt="" />
                <span>o</span>
                <span>r</span>
                <span>d</span>
                <span>i</span>
                <span> </span>
                <span>M</span>
                <span>a</span>
                <span>n</span>
                <span>t</span>
                <span>i</span>
                <span>l</span>
                <span>l</span>
                <span>a,</span>
                <br />
                <span>W</span>
                <span>e</span>
                <span>b</span>
                <span> </span>
                <span>F</span>
                <span>u</span>
                <span>l</span>
                <span>l</span>
                <span>-</span>
                <span>S</span>
                <span>t</span>
                <span>a</span>
                <span>c</span>
                <span>k</span>
                <span> </span>
                <span>D</span>
                <span>e</span>
                <span>v</span>
                <span>e</span>
                <span>l</span>
                <span>o</span>
                <span>p</span>
                <span>e</span>
                <span>r</span>
                </h1>
                <h2>Web Developer/ Graphic Designer</h2>
                <Link to="/contact" className='flat-button'>CONTACT ME</Link>
            </div>
                <div className='character'>
                    <img src={JordiPaint} alt="" />
                </div>
        </div>
    );
};

export default Home;