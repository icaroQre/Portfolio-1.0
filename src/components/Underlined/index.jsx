import React from "react";
import { UnderlinedContainer } from "./style";

function Underlined (props) {

    return(
        <UnderlinedContainer>
            {props.text}
        </UnderlinedContainer>
    )
};

export default Underlined;