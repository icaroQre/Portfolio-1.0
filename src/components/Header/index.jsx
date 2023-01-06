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
                <li> Sobre <AiFillBook /> </li> 
                <li> Conhecimentos <GoGlobe /> </li> 
                <li> Projetos <GiGears /> </li> 
                <li> Ver o código <AiFillEye /> </li> 
                <li> Contato <AiFillPhone /> </li> 
            </MenuStyled>
        </HeaderStyled>
    )
};

export default Header;
