import React from 'react';
import reactPokedex from '../assets/react-pokedex.png'
import reactRickMorty from '../assets/react-rick-morty.png'
import reactEcommerce from '../assets/react-ecommerce.png'
import reactHttpMethods from '../assets/react-http-methods.png'


const Projects = () => {
    return (
        <div className='projects-container'>
            <div>
            <h1>
                <span>M</span>
                <span>Y</span>
                <span> </span>
                <span>P</span>
                <span>R</span>
                <span>O</span>
                <span>J</span>
                <span>E</span>
                <span>C</span>
                <span>T</span>
                <span>S</span>
            </h1>
            </div>
            <div className='projects-body'>
                <div className='projects-left'>
                    <h2>Development Projects</h2>
                    <div className='projects-body'>
                        <div className='projects-left'>
                            <div className='hidden-project'>
                                <img src={reactPokedex} alt="" />
                                <p>Used the Pokemon Api in order to show items as cards, filter by type and search by name, used routes as Pokemons Details and show more information</p>
                            </div>
                            <div className='hidden-project-down'>
                                <img src={reactRickMorty} alt="" />
                                <p>Used the Rick and Morty Api in order to show characters and status, we can filter by location and see the current location, planet and dimension, used pagination</p>
                            </div>
                        </div>
                        <div className='projects-left'>
                            <div className='hidden-project'>
                                <img src={reactEcommerce} alt="" />
                                <p>We use a custom Api with electronic products, show items as cards and each of them clickable in order to see the details, purchases history, login and suggested products</p>
                            </div>
                            <div className='hidden-project-down'>
                                <img src={reactHttpMethods} alt="" />
                                <p>Practice using the http methods such as Post, Delete, Update and Create by using an user Api <br /> "Just training"</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className='projects-right'>
                    <h2>Design projects</h2>
                    <div className='projects-body'>
                        <div className='projects-left'>
                            <div className='hidden-project'>
                                <img src={reactPokedex} alt="" />
                                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni, minima! hola como estaas que tal todo si yo my nien la ragazza ha un caney  le canenon e mio</p>
                            </div>
                            <div className='hidden-project-down'>
                                <img src={reactRickMorty} alt="" />
                                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorem, eius! hola como estaas que tal todo si yo my nien la ragazza ha un caney  le canenon e mio</p>
                            </div>
                        </div>
                        <div className='projects-left'>
                            <div className='hidden-project'>
                                <img src={reactEcommerce} alt="" />
                                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorem, eius! hola como estaas que tal todo si yo my nien la ragazza ha un caney  le canenon e mio</p>
                            </div>
                            <div className='hidden-project-down'>
                                <img src={reactHttpMethods} alt="" />
                                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorem, eius! hola como estaas que tal todo si yo my nien la ragazza ha un caney  le canenon e mio</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            
        </div>
    );
};

export default Projects;