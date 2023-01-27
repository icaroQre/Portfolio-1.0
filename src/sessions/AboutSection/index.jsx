import React, { useContext } from "react";
import SkillSwiper from "../../components/SkillSwiper";
import { AboutContainer, AboutTextFirst, AboutTextSecond, AboutImage, AboutTextContainer, AboutTitle, } from "./style";
import { AuthContext } from "../../providers/auth";
import Contrast from "../../components/Contrast";

function AboutSection () {

    const { menuVisible } = useContext(AuthContext);

    return(

        <AboutContainer visible={ menuVisible } >
            <div id="desktop">
            <AboutImage>
                <SkillSwiper size="25vh" color="#000"/>
            </AboutImage>
            </div>
            <AboutTextContainer>
                <AboutTitle> &lt; Sobre mim /&gt; </AboutTitle>
                <AboutTextFirst> 
                    <p> Olá, meu nome é <Contrast text="Ícaro Queiroz Reccanello" color="#000"/>. Tenho 19 anos, atualmente estudante de <Contrast color="#000" text="Ciência da Computação"/> pela UENP (Universidade Estadual do Norte do Paraná),
                    apaixonado por desenvolvimento e com o foco em <Contrast text="Front-End" color="#000"/> aqui você pode conhecer um pouco dos meus projetos. </p> 
                </AboutTextFirst>
                <AboutTextSecond> 
                    Conhecimento em <Contrast text="HTML5" color="#000"/>, <Contrast text="CSS3" color="#000"/>, <Contrast text="Java Script" color="#000"/> 
                    e Frameworks e bibliotecas, como <Contrast text="React JS" color="#000"/> e <Contrast text="Styled-Components" color="#000"/>
                </AboutTextSecond>
            </AboutTextContainer>
            <div id="mobile">
            <AboutImage>
                <SkillSwiper size="15vh" color="#000"/>
            </AboutImage>
            </div>
        </AboutContainer>
    )
};

export default AboutSection;