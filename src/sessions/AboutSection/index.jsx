import React from "react";
import SkillSwiper from "../../components/SkillSwiper";
import { AboutContainer, AboutText1, AboutText2, AboutImage, AboutTextContainer, AboutTitle, Contrast } from "./style";

function AboutSection () {
    return(
        <AboutContainer>
            <div id="desktop">
            <AboutImage>
                <SkillSwiper size="25vh" color="#FFFFFF"/>
            </AboutImage>
            </div>
            <AboutTextContainer>
                <AboutTitle> &lt; Sobre mim /&gt; </AboutTitle>
                <AboutText1> 
                    Olá, meu nome é <Contrast>Ícaro Queiroz Reccacnello</Contrast>. Tenho 19 anos, atualmente estudante de <Contrast>Ciência da Computação</Contrast> pela UENP (Universidade Estadual do Norte do Paraná),
                    apaixonado por desenvolvimento e com o foco em <Contrast>Front-End</Contrast> aqui você pode conhecer um pouco dos meus projetos. 
                </AboutText1>
                <AboutText2> 
                    Conhecimento em <Contrast>HTML5</Contrast>, <Contrast>CSS3</Contrast>, <Contrast>JavaScript</Contrast> 
                     e Frameworks e bibliotecas, como <Contrast>React JS</Contrast> e <Contrast>Styled-Components</Contrast>
                </AboutText2>
            </AboutTextContainer>
            <div id="mobile">
            <AboutImage>
                <SkillSwiper size="15vh" color="#FFFFFF"/>
            </AboutImage>
            </div>
        </AboutContainer>
    )
};

export default AboutSection;