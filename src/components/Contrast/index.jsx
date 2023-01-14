import React from "react";
import { ContrastStyled } from "./style";


function Contrast (props) {
    return (
        <ContrastStyled style={{color: props.color}} > { props.text } </ContrastStyled>
    )
}

export default Contrast;