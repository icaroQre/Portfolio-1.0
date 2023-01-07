import React, { useState } from "react";
import { HeaderStyled, MenuStyled, MobileMenuStyled } from "./style";
import { AiOutlineMenu, AiFillBook, AiFillEye, AiFillPhone } from "react-icons/ai";
import { GoGlobe } from "react-icons/go";
import { GiGears } from "react-icons/gi";

function Header () {

    const [visible, setVisible] = useState(false);

    const toggleMenu = () => {
        setVisible(!visible);
    }

    return(
        <HeaderStyled>
            <MobileMenuStyled onClick={toggleMenu} visible={ visible }>
                <AiOutlineMenu style={{fontSize: "36px", color: "#F5F5F5" }} />
            </MobileMenuStyled>

            <MenuStyled visible={ visible }>
                <li onClick={toggleMenu} visible={ visible }> Sobre <AiFillBook /> </li> 
                <li onClick={toggleMenu} visible={ visible }> Habilidades <GoGlobe /> </li> 
                <li onClick={toggleMenu} visible={ visible }> Projetos <GiGears /> </li> 
                <li onClick={toggleMenu} visible={ visible }> Ver o código <AiFillEye /> </li> 
                <li onClick={toggleMenu} visible={ visible }> Contato <AiFillPhone /> </li> 
            </MenuStyled>
        </HeaderStyled>
    )
};

export default Header;
