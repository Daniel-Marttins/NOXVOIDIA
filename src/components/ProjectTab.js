import React, { useState } from "react";
import '../styles/Project.css';

const  ProjectTab = () => {

    const [activeDescriptProj, setActiveProj] = useState(0);

    const handleDescript = (index) => {
        let allCardsVisibility = document.querySelectorAll('.project-descript');
        let allCardsDescript = document.querySelectorAll('.card-descript');
        let allBlurMobile = document.querySelectorAll('.blur-descript-mobile');

        if(index === 0) {
            allCardsDescript.forEach(all => {
                all.classList.remove('active');
            });

            allCardsVisibility.forEach(all => {
                all.classList.remove('active');
            });

            allBlurMobile.forEach(all => {
                all.classList.remove('active');
            });
        } else{
            if (activeDescriptProj === index) {
                setActiveProj(0);
            } else {
                setActiveProj(index);
            }   
        }
    };
    
    return(
        <div className="project-body">
                <div className="column-projects">
                    <div className="project">

                        <div className="img-project"></div>

                        <h1>
                            [PROJETO EXEMPLO 1]
                            <span>Gerenciador de Recursos</span>
                        </h1>

                        <div className={`project-descript ${activeDescriptProj === 1 ? 'active' : ''}`} onClick={() => handleDescript(1)}>
                            <span className="material-symbols-outlined" title="Visualizar descrição">visibility</span>
                        </div>
                    </div>
                    <div className="project">

                        <div className="img-project"></div>

                        <h1>
                            [PROJETO EXEMPLO 2]
                            <span>Descrição curta projeto 2</span>
                        </h1>

                        <div className={`project-descript ${activeDescriptProj === 2 ? 'active' : ''}`} onClick={() => handleDescript(2)}>
                            <span className="material-symbols-outlined" title="Visualizar descrição">visibility</span>
                        </div>
                    </div>
                    <div className="project">

                        <div className="img-project"></div>

                        <h1>
                            [PROJETO EXEMPLO 3]
                            <span>Descrição curta projeto 3</span>
                        </h1>

                        <div className={`project-descript ${activeDescriptProj === 3 ? 'active' : ''}`} onClick={() => handleDescript(3)}>
                            <span className="material-symbols-outlined" title="Visualizar descrição">visibility</span>
                        </div>
                    </div>
                </div>

                <div title="Clique para fechar" className={`card-descript one ${activeDescriptProj === 1 ? 'active' : ''}`} onClick={() => handleDescript(1)}>

                    <span className="material-symbols-outlined" id="close-descript" onClick={() => handleDescript(0)}>close</span>

                    <h1>
                        [PROJETO EXEMPLO 1]
                        <span>Descrição curta projeto 1</span>
                    </h1>
                    <div className="description">
                        <p>
                            Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.
                        </p>
                        <a href="#">Ver no github</a>
                    </div>
                </div>
                <div title="Clique para fechar" className={`card-descript two ${activeDescriptProj === 2 ? 'active' : ''}`} onClick={() => handleDescript(2)}>

                    <span className="material-symbols-outlined" id="close-descript" onClick={() => handleDescript(0)}>close</span>

                    <h1>
                        [PROJETO EXEMPLO 2]
                        <span>Descrição curta projeto 2</span>
                    </h1>
                    <div className="description">
                        <p>
                            Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.
                        </p>
                        <a href="#">Ver no github</a>
                    </div>
                </div>
                <div title="Clique para fechar" className={`card-descript three ${activeDescriptProj === 3 ? 'active' : ''}`} onClick={() => handleDescript(3)}>

                    <span className="material-symbols-outlined" id="close-descript" onClick={() => handleDescript(0)}>close</span>

                    <h1>
                        [PROJETO EXEMPLO 3]
                        <span>Descrição curta projeto 3</span>
                    </h1>
                    <div className="description">
                        <p>
                            Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.
                        </p>
                        <a href="#">Ver no github</a>
                    </div>
                </div>

                <div className={`blur-descript-mobile ${activeDescriptProj === 1 ? 'active' : ''}`}></div>
                <div className={`blur-descript-mobile ${activeDescriptProj === 2 ? 'active' : ''}`}></div>
                <div className={`blur-descript-mobile ${activeDescriptProj === 3 ? 'active' : ''}`}></div>
        </div>
    );

}

export default ProjectTab;