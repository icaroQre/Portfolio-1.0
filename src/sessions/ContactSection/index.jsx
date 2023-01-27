import React from "react";
import Contrast from "../../components/Contrast";
import { AiFillLinkedin, AiFillGithub, AiFillInstagram } from "react-icons/ai"
import { FaDiscord } from "react-icons/fa"
import { IoLogoWhatsapp } from "react-icons/io"
import { Container, Text, ContactPhoto, ContactIcons, EmailStyled } from "./style"
import photo from "../../assets/images/profile.jpg";

function ContactSection () {
    return(
        <Container>

            <Text>
                <p> Me envie um e-mail em: </p>
                <EmailStyled>
                    <Contrast text="icaro.queiroz.reccanello"/>
                    <Contrast text="@gmail.com"/>
                </EmailStyled>
            </Text>

            <ContactPhoto src={photo}/>

            <p style={{ color: "#999999" }}>Ou entre em contato por:</p>

            <ContactIcons>
                <li> <a href="https://www.linkedin.com/in/%C3%ADcaro-queiroz-reccanello-9b903a235/"> <AiFillLinkedin color= "#FFF" fontSize="36px" /> </a> </li>
                <li> <FaDiscord color= "#FFF" fontSize="36px" /> </li>
                <li> <a href="https://github.com/icaroQre"> <AiFillGithub color= "#FFF" fontSize="36px" /> </a> </li>
                <li>  <a href="https://api.whatsapp.com/send?phone=5543999694177"> <IoLogoWhatsapp color= "#FFF" fontSize="36px" /> </a> </li>
                <li> <a href="https://www.instagram.com/icaroqre"> <AiFillInstagram color= "#FFF" fontSize="36px" /> </a> </li>
            </ContactIcons>
        </Container>
    )
}

export default ContactSection;