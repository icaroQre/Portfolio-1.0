import styled from "styled-components";

export const Card = styled.div`

    width: 80vw;
    height: 80vw;
    max-width: 500px;
    max-height: 500px;
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    align-items: center;
    opacity: 1;
    margin-bottom: 2rem;
`

export const ProjectImage = styled.div`

    width: 70vw;
    height: 70vw;
    max-width: 400px;
    max-height: 400px;
    border-radius: 1rem;
    overflow: hidden;
    display: flex;
    align-items: center;
    justify-content: center;

    img{

        height: 70vw;
        max-height: 400px;
    
    }

`

export const ProjectName = styled.div`

    font-family: 'Rajdhani', sans-serif;
    font-size: 24px;
    font-weight: 600;
    color: ${({theme}) => theme.secondary};

    @media (max-width: 1025px) {
        
        font-size: 24px;

    }

`

export const ProjectDescription = styled.div`

    width: 80vw;
    height: 80vw;
    max-width: 500px;
    max-height: 500px;
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    align-items: center;
    opacity: 0;
    background-color: ${({theme}) => theme.primary}; ;
    transition: all ease-in-out .4s;
    position: absolute;
    border-radius: 1rem;

    p{
        font-family: 'Rajdhani', sans-serif;
        font-size: 20px;
        font-weight: 600;
        color: ${({theme}) => theme.textPrimary};
        flex-wrap: wrap;
        padding: 40px;
        text-align: center;
    }

    :hover{
        opacity: 1;
    }

`

export const LinkStyled = styled.div`

    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    padding: 10px;

    a{
        font-family: 'Rajdhani', sans-serif;
        font-size: 24px;
        font-weight: 900;
        color: ${({theme}) => theme.secondary};
        text-decoration: none;
        margin: 4px;
    }

`