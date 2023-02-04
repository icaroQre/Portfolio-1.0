import React, { useContext } from "react";
import { MainContainer, MainImage, MainText, TypeWriter, ArrowDownStyled } from "./style"
import { RiArrowDownSLine } from "react-icons/ri"
import { AuthContext } from "../../providers/auth"
import { ImSwitch } from "react-icons/im"
import { ThemeStateContext } from "../../providers/theme";
import { Fade } from "react-awesome-reveal";

function MainSection () {

    const { menuVisible } = useContext(AuthContext);

    const { setThemeState } = useContext(ThemeStateContext)

    function toggleThemeState () {
        setThemeState(themeState => themeState === 'dark' ? 'light' : 'dark')
    }

    return(
        <>
        <MainContainer id="home">
            <MainText>
            <Fade direction="right" duration={3000}>
                <div className="container">
                    <p id="name"> Ícaro Queiroz </p>
                    <TypeWriter id="title"> <p>&lt; Desenvolvedor /&gt;</p> </TypeWriter>
                </div>
                </Fade>
                <ImSwitch onClick={ toggleThemeState } className="switch-icon-mobile" />
            </MainText>
            <MainImage>
                <ImSwitch onClick={ toggleThemeState } className="switch-icon" />
            </MainImage>
            <ArrowDownStyled visible={ menuVisible }>
                <RiArrowDownSLine style={{fontSize: "36px"}}/>
            </ArrowDownStyled>
            </MainContainer>
            </>
    )
}; 

export default MainSection;