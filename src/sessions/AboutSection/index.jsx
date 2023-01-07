import React from "react";
import Underlined from "../../components/Underlined";
import { AboutContainer, AboutText, AboutImage } from "./style";

function AboutSection () {
    return(
        <AboutContainer>
            <AboutImage></AboutImage>
            <AboutText>
                <div id="title"> <span> &lt; Sobre mim /&gt; </span> </div>
                <p id="text"> Olá, meu nome é Ícaro Queiroz Reccacnello. Tenho 19 anos, atualmente estudante de <Underlined text="Ciência da Computação"/> pela UENP (Universidade Estadual do Norte do Paraná),
                    apaixonado por desenvolvimento e com o foco voltado para desenvolvimento <Underlined text="Front-End"/> aqui você pode conhecer um pouco dos meus projetos. </p>
            </AboutText>
        </AboutContainer>
    )
};

export default AboutSection;