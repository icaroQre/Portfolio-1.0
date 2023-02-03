import React, { useContext } from "react";
import SkillSwiper from "../../components/SkillSwiper";
import { AboutContainer, AboutTextFirst, AboutTextSecond, AboutImage, AboutTextContainer, AboutTitle, } from "./style";
import { AuthContext } from "../../providers/auth";
import Contrast from "../../components/Contrast";
import Fade from 'react-reveal/Fade';

function AboutSection () {

    const { menuVisible } = useContext(AuthContext);

    return(
        <AboutContainer visible={ menuVisible } id="about" >
                
            <div id="desktop">
            <AboutImage>
                <SkillSwiper size="25vh" />
            </AboutImage>
            </div>
            <Fade top>
            <AboutTextContainer >
                <AboutTitle> &lt; Sobre mim /&gt; </AboutTitle>
                <AboutTextFirst> 
                    <p> Olá, meu nome é <Contrast text="Ícaro Queiroz Reccanello"/>. Tenho 19 anos, atualmente estudante de <Contrast text="Ciência da Computação"/> pela UENP (Universidade Estadual do Norte do Paraná),
                    apaixonado por desenvolvimento e com o foco em <Contrast text="Front-End"/> aqui você pode conhecer um pouco dos meus projetos. </p> 
                </AboutTextFirst>
                <AboutTextSecond> 
                    Conhecimento em <Contrast text="HTML5" />, <Contrast text="CSS3" />, <Contrast text="Java Script" /> 
                    e Frameworks e bibliotecas, como <Contrast text="React JS" /> e <Contrast text="Styled-Components" />
                </AboutTextSecond>
            </AboutTextContainer>
            </Fade>
            <div id="mobile">
            <AboutImage>
                <SkillSwiper size="15vh" />
            </AboutImage>
            </div>
        </AboutContainer>
    )
};

export default AboutSection;