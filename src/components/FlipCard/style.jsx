import styled, { css } from 'styled-components';

export const CardContainer = styled.div`

width: 70vw;
height: 70vw;
max-width: 350px;
max-height: 350px;
display: flex;
flex-direction: column;
justify-content: space-around;
align-items: center;
opacity: 1;
perspective: 1000px;
margin: 0 auto;
position: relative;
margin: 2rem;

`;

export const Card = styled.div`
height: 100%;
width: 100%;
position: absolute;
transform-style: preserve-3d;
transition: all 0.5s ease;
transform: ${props => (props.isFlipped ? 'rotateY(180deg)' : 'rotateY(0)')};

`;

export const Front = styled.div`
height: 100%;
width: 100%;
position: absolute;
backface-visibility: hidden;
background-color: ${({ theme }) => theme.colors.tertiary};
display: flex;
align-items: center;
justify-content: center;
border-radius: 1rem;
overflow: hidden;
-webkit-box-shadow: 0px 3px 37px 10px rgba(0,0,0,0.46);
-moz-box-shadow: 0px 3px 37px 10px rgba(0,0,0,0.46);
box-shadow: 0px 3px 37px 10px rgba(0,0,0,0.46);

`;

export const Back = styled.div`
height: 100%;
width: 100%;
position: absolute;
backface-visibility: hidden;
background-color: ${({ theme }) => theme.colors.tertiary};
transform: rotateY(180deg);
display: flex;
align-items: center;
justify-content: space-evenly;
flex-direction: column;
border-radius: 1rem;
-webkit-box-shadow: 0px 3px 37px 10px rgba(0,0,0,0.46);
-moz-box-shadow: 0px 3px 37px 10px rgba(0,0,0,0.46);
box-shadow: 0px 3px 37px 10px rgba(0,0,0,0.46);

`;

export const Image = styled.img`
height: 100%;
border-radius: 10px;
`;

export const Description = styled.p`
font-size: 1em;
text-align: center;
padding: 20px;
color: #FFF;
font-weight: 300;
`;

export const Name = styled.p`

    font-size: 1.2em;
    font-weight: 600;
    color: #FFF;

`;

export const LinkStyled = styled.a`

    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;

    a{
        font-weight: 600;
        padding: 4px;
        color: #FFF;
        text-decoration: none;
    }
`;
