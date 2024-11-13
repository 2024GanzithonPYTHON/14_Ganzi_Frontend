import { createGlobalStyle } from "styled-components";
import reset from "styled-reset";
import { Fonts } from "./Fonts";

const GlobalStyles = createGlobalStyle`
    ${reset}
    ${Fonts}

    body {
        font-family: "Pretendard", sans-serif;
    }
`;

export default GlobalStyles;
