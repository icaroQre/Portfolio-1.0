import React, { useState } from 'react';
import { CardContainer, Card, Front, Image, Back, Description, Name, LinkStyled } from "./style"

const FlipCard = ({ image, description, name, github, web }) => {
  const [isFlipped, setIsFlipped] = useState(false);

  return (
    <CardContainer onClick={() => setIsFlipped(!isFlipped)}>
      <Card isFlipped={isFlipped}>
        <Front>
          <Image src={image} />
        </Front>
        <Back>
            <Name>
                { name }
            </Name>
            <Description>
                { description }
            </Description>    
            <LinkStyled>
                <a href={github}> GitHub </a>
                <a href={web}> Vizualizar Página </a>
            </LinkStyled>  
        </Back>
      </Card>
    </CardContainer>
  );
};

export default FlipCard;
