import React from "react";
import { MainContainer, MainImage, MainText, ArrowDownStyled } from "./style"
import { RiArrowDownSLine } from "react-icons/ri";

function MainSection () {

    return(
        <>
        <MainContainer>
            <MainText>
                <p id="name"> Ícaro Queiroz </p>
                <p id="title"> Desenvolvedor </p>
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