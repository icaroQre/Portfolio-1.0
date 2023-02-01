import React from "react";
import { Container, ProjectTitle } from "./style"
import marioHome from "../../assets/images/marioHome.png"
import localizeHome from "../../assets/images/localizeHome.png"
import todoListHome from "../../assets/images/todoListHome.png"
import instagramHome from "../../assets/images/instagramHome.png"
import mkCombosHome from "../../assets/images/mkCombosHome.png"
import FlipCard from "../../components/FlipCard";

function ProjectSection () {

    var windowWidth = window.innerWidth;
    var desc

    if(windowWidth < 1025){
        desc = 'Toque para ver detalhes'
    }else{ desc = 'Clique para ver detalhes' }

    return (

        <>
        <ProjectTitle>
            &lt; Projetos  /&gt;
            <p className="desc">* { desc } *</p>
        </ProjectTitle>

        <Container>

            <FlipCard name="Super Mario Game" image = {marioHome} description="Projeto de um jogo simples para fins de estudo sobre propriedades de Java Script e CSS. Tendo como base Super Mario" />
            <FlipCard name="Hackaton Turismo" image = {localizeHome} description="Aplicação produzida em um hackaton com o objetivo de ser uma ferramenta para o turismo local, desenvolvido utilizando React e Styled Components "/>
            <FlipCard name="ToDo List" image = {todoListHome} description="Projeto pessoal para estudo de Java Scripts, Manipulação da DOM e CSS "/>
            <FlipCard name="Instagram Copy" image = {instagramHome} description="Cópia da tela de login do instagram com o objetivo de estudo das propriedades de CSS"/>
            <FlipCard name="MK Combos" image = {mkCombosHome} description="Trabalho acadêmico desenvolvido com a intenção de enteder o funcionamento de RegEx"/>
        </Container>
        </>
    )
}

export default ProjectSection