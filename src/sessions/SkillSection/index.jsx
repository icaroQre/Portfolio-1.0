import React from "react";
import SkillSwiper from "../../components/SkillSwiper";
import Underlined from "../../components/Underlined";
import { SkillContainer, SkillText, SkillImage, SkillTextContainer, SkillTitle, Contrast } from "./style";

function SkillSection () {
    return(
        <SkillContainer>
            <SkillTextContainer>
                <SkillTitle> <Underlined text="&lt; Habilidades /&gt;"/> </SkillTitle>
                <SkillText> Tenho conhecimento em <Contrast>HTML5</Contrast>, <Contrast>CSS3</Contrast>, <Contrast>JavaScript</Contrast> 
                     e em alguns Frameworks e bibliotecas, como <Contrast>React JS</Contrast> e <Contrast>Styled-Components</Contrast> 
                </SkillText>
            </SkillTextContainer>
            <SkillImage>
                <SkillSwiper color="#FFFFFF" size="25vh"/>
            </SkillImage>
        </SkillContainer>
    )
};

export default SkillSection;