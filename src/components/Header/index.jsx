import React, { useContext } from "react";
import { HeaderStyled, MenuStyled, MobileMenuStyled } from "./style";
import { AiOutlineMenu } from "react-icons/ai";
import { AuthContext } from "../../providers/auth";

function Header () {

    const { menuVisible, setMenuVisible } = useContext(AuthContext);

    const toggleMenu = () => {
        setMenuVisible(!menuVisible);
    }

    return(
        <HeaderStyled>
            <MobileMenuStyled onClick={toggleMenu} visible={ menuVisible }>
                <AiOutlineMenu style={{fontSize: "36px", color: "#FFFFFF", stroke: "#000000", strokeWidth: "20px" }} />
            </MobileMenuStyled>

            <MenuStyled visible={ menuVisible }>
                <li onClick={toggleMenu} visible={ menuVisible }> Sobre </li> 
                <li onClick={toggleMenu} visible={ menuVisible }> Habilidades </li> 
                <li onClick={toggleMenu} visible={ menuVisible }> Projetos </li> 
                <li onClick={toggleMenu} visible={ menuVisible }> Ver o código </li> 
                <li onClick={toggleMenu} visible={ menuVisible }> Contato </li> 
            </MenuStyled>
        </HeaderStyled>
    )
};

export default Header;
