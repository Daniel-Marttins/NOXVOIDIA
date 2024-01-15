import React, { useState } from "react";
import logo from '../imgs/Logotipo-busto-branco (2).png';
import whatsapp from '../imgs/icons8-whatsapp-250.png';
import whatsapp2 from '../imgs/icons8-whatsapp-250.png';
import instagram from '../imgs/icons8-instagram-250.png';
import linkedin from '../imgs/icons8-linkedin-250.png';
import github from '../imgs/icons8-github-250.png';
import '../styles/Presentation.css';

const PresentationTab = () => {

    const[activeSquare, setActiveSquare] = useState();

    const handleActiveSquare = () => {

        const toggleIcon = document.querySelector('#toggle');

        setActiveSquare(!activeSquare);
        
        if(activeSquare) {
            toggleIcon.innerHTML = "arrow_circle_right";
        } else {
            toggleIcon.innerHTML = "arrow_circle_left";
        }
    };

    return(
        <div className="presentation-body">
                <div className="card-presentation">
                    <h3 className="text-presentation-h3">Sejam Bem vindos(a)s</h3>
                    <h1 className="text-presentation-h1">Explorem um pouco do meu Universo</h1>
                </div>

                <div className="initial-text">
                    <p>
                    Programador apaixonado, vejo nos códigos uma forma de arte. Cada linha é uma expressão criativa, onde lógica e elegância se encontram. Enfrento desafios com entusiasmo, transformando-os em oportunidades de inovação. No mundo digital em constante evolução, encontro inspiração na harmonia entre a precisão da programação e a liberdade criativa que ela proporciona.
                    </p>
                </div>


                <div className="card-mobile">
                    <h1>Daniel Martins. <br /> <span>@Desenv. Full-Stack</span></h1>
                </div>
                <div className="follow-mobile">
                    <a href="#"><img src={whatsapp}></img></a>
                    <a href="https://www.instagram.com/noxvoidiax/"><img src={instagram}></img></a>
                    <a href="https://www.linkedin.com/in/danielmartinsds/"><img src={linkedin}></img></a>
                    <a href="https://github.com/Daniel-Marttins?tab=repositories"><img src={github}></img></a>
                </div>

                <span className="material-symbols-outlined" id="toggle" onClick={handleActiveSquare}>arrow_circle_right</span>

                <div className={`person-infos ${activeSquare ? 'active' : ''}`}>
                    <h1>Daniel Martins. <br /><span>@Desenv. Full-Stack</span></h1>
                </div>

                <div className={`follows ${activeSquare ? 'active' : ''}`}>
                        <a href="#"><img src={whatsapp2}></img></a>
                        <a href="https://www.instagram.com/noxvoidiax/"><img src={instagram}></img></a>
                        <a href="https://www.linkedin.com/in/danielmartinsds/"><img src={linkedin}></img></a>
                        <a href="https://github.com/Daniel-Marttins?tab=repositories"><img src={github}></img></a>
                </div>

                <div className={`square ${activeSquare ? 'active' : ''}`}>
                    <img src={logo}></img>
                </div>
        </div>
    );

};

export default PresentationTab;