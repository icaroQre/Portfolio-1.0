import React from "react";
import { ContrastStyled } from "./style";


function Contrast (props) {
    return (
        <ContrastStyled> { props.text } </ContrastStyled>
    )
}

export default Contrast;