import React, { useContext } from "react";
import { MainContainer, MainImage, MainText, TypeWriter, ArrowDownStyled } from "./style"
import { RiArrowDownSLine } from "react-icons/ri"
import { AuthContext } from "../../providers/auth"

function MainSection () {

    const { menuVisible } = useContext(AuthContext);

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
            <ArrowDownStyled visible={ menuVisible }>
                <RiArrowDownSLine style={{fontSize: "36px"}}/>
            </ArrowDownStyled>
            </MainContainer>
            </>
    )
}; 

export default MainSection;