import React from "react";
import { MainContainer, MainImage, MainText, ArrowDownStyled, TypeWriter } from "./style"
import { RiArrowDownSLine } from "react-icons/ri";

function MainSection () {

    return(
        <>
        <MainContainer>
            <MainText>
                <div>
                    <p id="name"> Ícaro Queiroz </p>
                    <TypeWriter id="title"> <p>&lt; Desenvolvedor /&gt;</p> </TypeWriter>
                </div>
            </MainText>
            <MainImage>

            </MainImage>
            <ArrowDownStyled>
                <RiArrowDownSLine style={{fontSize: "36px"}}/>
            </ArrowDownStyled>
            </MainContainer>
            </>
    )
}; 

export default MainSection;