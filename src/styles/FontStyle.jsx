import { createGlobalStyle } from "styled-components";
import Gumok from "../assets/fonts/Gumok.otf"

const FontStyle = createGlobalStyle`

@font-face {

  font-family: 'Gumok';
  src: url(${Gumok})

}
`;

export default FontStyle;