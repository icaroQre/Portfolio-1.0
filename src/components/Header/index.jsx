import React, { useContext } from "react";
import { HeaderStyled, MenuStyled, MobileMenuStyled } from "./style";
import { AiOutlineMenu } from "react-icons/ai";
import { AuthContext } from "../../providers/auth";
import { useTheme } from "styled-components";
import { Link } from "react-scroll"

function Header () {

    const { menuVisible, setMenuVisible } = useContext(AuthContext);

    const toggleMenu = () => {
        setMenuVisible(!menuVisible);
    }

    const theme = useTheme()

    return(
        <HeaderStyled theme={theme}>
            <MobileMenuStyled onClick={toggleMenu} visible={ menuVisible }>
                <AiOutlineMenu style={{fontSize: "36px", color: "#FFFFFF", stroke: "#000000", strokeWidth: "20px" }} />
            </MobileMenuStyled>

            <MenuStyled visible={ menuVisible }>
            <Link to="home" spy={true} smooth={true} offset={0} duration={1000}><li onClick={toggleMenu} visible={ menuVisible }> Home </li> </Link>
            <Link to="about" spy={true} smooth={true} offset={-50} duration={1000}><li onClick={toggleMenu} visible={ menuVisible }> Sobre </li> </Link>
            <Link to="projects" spy={true} smooth={true} offset={-50} duration={1000}><li onClick={toggleMenu} visible={ menuVisible }> Projetos </li> </Link>
            <a href="https://github.com/icaroQre"><li onClick={toggleMenu} visible={ menuVisible }> Git Hub </li></a>
            <Link to="contact" spy={true} smooth={true} offset={-50} duration={1000}><li onClick={toggleMenu} visible={ menuVisible }> Contato </li> </Link>
            </MenuStyled>
        </HeaderStyled>
    )
};

export default Header;
