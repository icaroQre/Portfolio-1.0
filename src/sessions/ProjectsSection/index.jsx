import React from "react";
import { Container, ProjectTitle } from "./style"
import marioHome from "../../assets/images/marioHome.png"
import localizeHome from "../../assets/images/localizeHome.png"
import todoListHome from "../../assets/images/todoListHome.png"
import instagramHome from "../../assets/images/instagramHome.png"
import FlipCard from "../../components/FlipCard";
import { Bounce, Fade, Rotate, Slide } from "react-awesome-reveal";

function ProjectSection () {

    var windowWidth = window.innerWidth;
    var desc

    if(windowWidth < 1025){
        desc = 'Toque para ver detalhes'
    }else{ desc = 'Clique para ver detalhes' }

    return (

        <div id="projects" >
        <Fade duration={1500}>
            <ProjectTitle>
                &lt; Projetos  /&gt;
                <p className="desc">* { desc } *</p>
            </ProjectTitle>
        </Fade>
        <Container>
            <Fade duration={2000}>
                <FlipCard name="Super Mario Game" image = {marioHome} description="Projeto de um jogo simples para fins de estudo sobre propriedades de Java Script e CSS. Tendo como base Super Mario" github="https://github.com/icaroQre/Mario-Game" web="https://mario-game-xi.vercel.app/"/>
                <FlipCard name="Hackaton Turismo" image = {localizeHome} description="Aplicação produzida em um hackaton com o objetivo de ser uma ferramenta para o turismo local, desenvolvido utilizando React e Styled Components " github="https://github.com/icaroQre/Hackaton-Turismo" web="https://hackaton-turismo.vercel.app/"/>
                <FlipCard name="ToDo List" image = {todoListHome} description="Projeto pessoal para estudo de Java Scripts, Manipulação da DOM e CSS " github="https://github.com/icaroQre/To-Do-List" web="https://to-do-list-blond-zeta.vercel.app/"/>
                <FlipCard name="Instagram Copy" image = {instagramHome} description="Cópia da tela de login do instagram com o objetivo de estudo das propriedades de CSS" github="https://github.com/icaroQre/Instagram-Login-Copy" web="https://instagram-login-copy.vercel.app/"/>
            </Fade>
            </Container>
        </div>
    )
}

export default ProjectSection