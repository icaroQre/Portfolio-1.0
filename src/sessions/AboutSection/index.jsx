import React from "react";
import Underlined from "../../components/Underlined";
import { AboutContainer, AboutText, AboutImage, AboutTextContainer, AboutTitle, Contrast } from "./style";

function AboutSection () {
    return(
        <AboutContainer>
            <AboutImage></AboutImage>
            <AboutTextContainer>
                <AboutTitle> <Underlined text="&lt; Sobre mim /&gt;"/> </AboutTitle>
                <AboutText> Olá, meu nome é <Contrast>Ícaro Queiroz Reccacnello</Contrast>. Tenho 19 anos, atualmente estudante de <Contrast className="contrast">Ciência da Computação</Contrast> pela UENP (Universidade Estadual do Norte do Paraná),
                    apaixonado por desenvolvimento e com o foco voltado para desenvolvimento <Contrast className="contrast">Front-End</Contrast>, aqui você pode conhecer um pouco dos meus projetos. </AboutText>
            </AboutTextContainer>
        </AboutContainer>
    )
};

export default AboutSection;