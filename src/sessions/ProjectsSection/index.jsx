import React, { useContext } from "react";
import SkillSwiper from "../../components/SkillSwiper";
import { ProjectsContainer, ProjectsImage, ProjectsTextContainer, ProjectsTitle, } from "./style";
import { AuthContext } from "../../providers/auth";

function ProjectsSection () {

    const { menuVisible } = useContext(AuthContext);

    return(

        <ProjectsContainer visible={ menuVisible } >
            <ProjectsTextContainer>
                <ProjectsTitle> &lt; Projetos /&gt; </ProjectsTitle>
            </ProjectsTextContainer>

            <div id="desktop">
            <ProjectsImage>
                <SkillSwiper size="25vh" color="#000000"/>
            </ProjectsImage>
            </div>

            <div id="mobile">
            <ProjectsImage>
                <SkillSwiper size="15vh" color="#000000"/>
            </ProjectsImage>
            </div>
        </ProjectsContainer>
    )
};

export default ProjectsSection;