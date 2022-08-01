import React from 'react';
import after_effects from '../assets/after_effects.png'
import bootstrap from '../assets/bootstrap.png'
import css from '../assets/css.png'
import github from '../assets/github.png'
import illustrator from '../assets/illustrator.png'
import javascript from '../assets/javascript.png'
import react from '../assets/react.png'
import photoshop from '../assets/photoshop.png'
import html from '../assets/html.png'



const About = () => {
    return (
        <div className='about-page'>
            <div className='text-zone'>
                <h1>
                <span>A</span>  
                <span>b</span>
                <span>o</span>
                <span>u</span>
                <span>t</span>  
                <span> </span>
                <span>M</span>
                <span>e</span>
                </h1>
                <p>My skills are wideraning spanning across multiple creative and technical design experience, also i love to create and improve wep pages and web aplications. </p>
                <p>My favorite part of development is to design cool, modern and uncommon websites, i'm always trying to improve skills i already know and to learn new ones.</p>
                <p>I'm currently studying at <a className='just-link' href="https://www.academlo.com" target="_blank">Academlo</a> to become a web full-stack developer, however i'm here to help you as i can.</p>
            </div>
            <div className="cards-zone">
                <div className="card-item">
                    <img src={react} alt="" />
                    <p>Redux, Hooks, Api's methods such as get, post, put and delete, Routers, Links, and so much more functionallity you can use on react</p>
                </div>
                <div className="card-item">
                    <img src={javascript} alt="" />
                    <p>Callbacks, objects, Api calls,  functions, solve problems, debugging and fix issues, however i rather using react to create websites.</p>
                </div>
                <div className="card-item">
                    <img src={bootstrap} alt="" />
                    <p>Really usefull when creating default projects or simple website pages, however in customizing is not good enough.</p>
                </div>
                <div className="card-item">
                    <img src={css} alt="" />
                    <p>Flexbox, grid, mediaQueries, Responsive and pure css animations are just a few of the things we can create!</p>
                </div>
                <div className="card-item">
                    <img src={github} alt="" />
                    <p>I have been working on some pair-programming projects and already built websites so i have the experience to work on teams.</p>
                </div>
                <div className="card-item">
                    <img src={html} alt="" />
                    <p>when creating a website i am really obssesed on make my code clean, easy to understand and easy to modify an case of need it.</p>
                </div>
                <div className="card-item">
                    <img src={illustrator} alt="" />
                    <p>Create custom logos, characters, color paulette for projects, custom fonts, banners, advertisings and vectorizing real images. </p>
                </div>
                <div className="card-item">
                    <img src={photoshop} alt="" />
                    <p>Give color, shadows, customize, give texture, points of view, and whatever you can imagine!</p>
                </div>
                <div className="card-item">
                    <img src={after_effects} alt="" />
                    <p>Create amazing animations from an image and make it move with totally freedom!</p>
                </div>
            </div>
        </div>
    );
};

export default About;