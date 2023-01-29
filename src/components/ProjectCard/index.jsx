import React from "react"
import { ProjectImage, ProjectName, ProjectDescription, Card, LinkStyled } from "./style"

function ProjectCard (props) {
    return(

        <>

        <Card>
            <ProjectDescription>
                <p> {props.text} </p>

                <LinkStyled>
                    <a href="/"> Vizualizar página </a>
                    <a href="/"> Github </a>
                </LinkStyled>
            </ProjectDescription>

            <ProjectImage>
                <img src={props.image} alt="Ícaro Queiroz Portifólio" />
            </ProjectImage>

            <ProjectName>
                {props.name}
            </ProjectName>
        </Card>

        </>

    )
}

export default ProjectCard