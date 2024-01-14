import React, { useState } from "react";
import '../styles/About.css';
import FirstVideo from '../imgs/video-3.mp4';
import SecondVideo from '../imgs/video-4.mov';
import ThirdVideo from '../imgs/video-2.mp4';

const AboutTab = () => {

    const [activeSlide, setActiveSlide] = useState(0);

    const handleSlideClick= (index) => {
        setActiveSlide(index);
    };

    return(
        <div className="about-body">
            <div className={activeSlide === 0 ? "slides active" : "slides"}>
                <div className={activeSlide === 0 ? "slides-text active" : "slides-text"}>
                    <h1>
                        RETROWAVE.<br/>
                        <span>Reviva o passado, construa o futuro.</span>
                    </h1>
                    <p>
                        🌟 Embarque comigo numa viagem temporal onde os pixels dançam ao som dos sintetizadores e as linhas de código se entrelaçam como ondas sonoras. Sou um programador apaixonado pelo universo retrowave, onde cada linha de código é uma nota de uma trilha sonora nostálgica. 💾🎶
                    </p>
                </div>
                <video classNamess="video-slide" src={ThirdVideo} autoPlay muted loop></video>
            </div>
            <div className={activeSlide === 1 ? "slides active" : "slides"}>
                <div className={activeSlide === 1 ? "slides-text active" : "slides-text"}>
                        <h1>
                            SYNTHWAVE.<br/>
                            <span>Conecte-se às ondas do amanhã.</span>
                        </h1>
                        <p>
                            🌌🤖 Como um amante da programação, mergulho nas profundezas do synthwave, onde o ciberespaço se funde com linhas de código elegantes. A terceira posição em um hackathon foi apenas o começo desta jornada, enquanto busco incessantemente mais conhecimento, impulsionado pela ambição de me tornar uma referência no vasto universo tecnológico. 🌐💡
                        </p>
                </div>
                <video classNamess="video-slide" src={SecondVideo} autoPlay muted loop></video>
            </div>
            <div className={activeSlide === 2 ? "slides active" : "slides"}>
                <div className={activeSlide === 2 ? "slides-text active" : "slides-text"}>
                        <h1>
                            RETROVISION.<br/>
                            <span>Desbrave o código, conquiste o futuro digital.</span>
                        </h1>
                        <p>
                            🚀🌠 Navegue comigo através dos códigos e sintetizadores, onde a programação se torna uma forma de arte. Conquistar o terceiro lugar em um hackathon foi como atingir uma nota perfeita em um solo de sintetizador. Minha jornada continua, com a ambição de me tornar um profissional renomado em cibersegurança, construindo defesas digitais tão sólidas quanto os beats de uma música synthwave. 🔒💻
                        </p>
                </div>
                <video classNamess="video-slide" src={FirstVideo} autoPlay muted loop></video>
            </div>


            <div className="navigation-slides">
                <div className={activeSlide === 0 ? "btn-slides active" : "btn-slides"} onClick={() => handleSlideClick(0)}>
                    <span className="material-symbols-outlined">globe</span>
                </div>
                <div className={activeSlide === 1 ? "btn-slides active" : "btn-slides"} onClick={() => handleSlideClick(1)}>
                    <span className="material-symbols-outlined">globe</span>
                </div>
                <div className={activeSlide === 2 ? "btn-slides active" : "btn-slides"} onClick={() => handleSlideClick(2)}>
                    <span className="material-symbols-outlined">globe</span>
                </div>
            </div>
        </div>
    );
}

export default AboutTab;

//<video className="video-slide" src={video} autoPlay loop muted></video>