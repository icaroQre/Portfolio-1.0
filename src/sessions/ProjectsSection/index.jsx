import React from "react";
import { Container } from "./style"
import ProjectCard from "../../components/ProjectCard"
import marioHome from "../../assets/images/marioHome.png"
import localizeHome from "../../assets/images/localizeHome.png"
import todoListHome from "../../assets/images/todoListHome.png"
import instagramHome from "../../assets/images/instagramHome.png"
import mkCombosHome from "../../assets/images/mkCombosHome.png"

function ProjectSection () {
    return (

        <Container>
            <ProjectCard name="Super Mario Game" image = {marioHome} text="super mario game desenvolvido com a js css e html um jogo simples de plataforma bla bla bla veja mais no link do github"/>
            <ProjectCard name="Hackaton Turismo" image = {localizeHome} text="super mario game desenvolvido com a js css e html um jogo simples de plataforma bla bla bla veja mais no link do github"/>
            <ProjectCard name="ToDo List" image = {todoListHome} text="super mario game desenvolvido com a js css e html um jogo simples de plataforma bla bla bla veja mais no link do github"/>
            <ProjectCard name="Instagram Copy" image = {instagramHome} text="super mario game desenvolvido com a js css e html um jogo simples de plataforma bla bla bla veja mais no link do github"/>
            <ProjectCard name="Instagram Copy" image = {mkCombosHome} text="super mario game desenvolvido com a js css e html um jogo simples de plataforma bla bla bla veja mais no link do github"/>
        </Container>

    )
}

export default ProjectSection