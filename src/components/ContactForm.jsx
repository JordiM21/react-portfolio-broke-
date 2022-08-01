import React  from 'react';
import illustrator from '../assets/illustrator.png'
import javascript from '../assets/javascript.png'
import react from '../assets/react.png'

const ContactForm = () => {

    return (
        <>
        <div className='container about-page'>
            <div className='text-zone'>
                <h1>
                <span>C</span>  
                <span>o</span>
                <span>n</span>
                <span>t</span>
                <span>a</span>  
                <span>c</span>
                <span>t</span>
                <span> </span>
                <span>M</span>
                <span>e</span>
                </h1>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Illum, molestiae exercitationem necessitatibus consectetur deleniti laborum saepe nulla dolore accusantium odio, amet nemo cum? Accusantium doloremque iure impedit tempore illo quisquam!</p>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Iste in fugiat natus maxime! Exercitationem deserunt soluta vitae inventore quibusdam, repudiandae eveniet labore voluptates, perferendis sit dolorem, cupiditate sequi odio at.</p>
            </div>
            <div>
            <a className='contact-button' href="mailto:jordimantilla21@gmail.com?Subject=Hi%20Jordi!,%20nice%20to%20meet%20you." target="_blank">SEND ME AN EMAIL</a>
            </div>
        </div>
        <div className='right-middle'>
            <div className='first-child'>
                <h1>Illustration Projects</h1>
                <img src={illustrator} alt="" />
            </div>
            <div>
                <h1>Javascript Projects</h1>
                <img src={javascript} alt="" />
            </div>
            <div className='last-child'>
                <h1>React Projects</h1>
                <img src={react} alt="" />
            </div>
        </div>
        </>
    );
};

export default ContactForm;