import React from "react";
import Contrast from "../../components/Contrast";
import { AiFillLinkedin, AiFillGithub, AiFillInstagram } from "react-icons/ai"
import { FaDiscord } from "react-icons/fa"
import { IoLogoWhatsapp } from "react-icons/io"
import { Container, Text, ContactPhoto, ContactIcons, EmailStyled } from "./style"
import photo from "../../assets/images/profile.jpg";
import Fade from 'react-reveal/Fade';

function ContactSection () {
    return(
        <Container id="contact" >

            <Fade left>
            <Text>
                <p> Me envie um e-mail em: </p>
                <EmailStyled>
                    <Contrast text="icaro.queiroz.reccanello"/>
                    <Contrast text="@gmail.com"/>
                </EmailStyled>
            </Text>
            
            
            <ContactPhoto src={photo}/>

            <p>Ou entre em contato por:</p>

            
            <ContactIcons>
                <li> <a href="https://www.linkedin.com/in/%C3%ADcaro-queiroz-reccanello-9b903a235/"> <AiFillLinkedin className="contact-icon"/> </a> </li>
                <li> <FaDiscord className="contact-icon" /> </li>
                <li> <a href="https://github.com/icaroQre"> <AiFillGithub className="contact-icon"/> </a> </li>
                <li>  <a href="https://api.whatsapp.com/send?phone=5543999694177"> <IoLogoWhatsapp className="contact-icon"/> </a> </li>
                <li> <a href="https://www.instagram.com/icaroqre"> <AiFillInstagram className="contact-icon" /> </a> </li>
            </ContactIcons>
            </Fade>
        </Container>
    )
}

export default ContactSection;