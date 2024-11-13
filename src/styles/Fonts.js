import { css } from "styled-components";

import MontserratMedium from "../assets/fonts/Montserrat-Medium.ttf";
import MontserratBold from "../assets/fonts/Montserrat-Bold.ttf";
import PretendardMedium from "../assets/fonts/Pretendard-Medium.otf";
import PretendardSemiBold from "../assets/fonts/Pretendard-SemiBold.otf";
import PretendardExtraBold from "../assets/fonts/Pretendard-ExtraBold.otf";

export const Fonts = css`
    @font-face {
        font-family: "Montserrat";
        font-weight: 500;
        font-style: normal;
        src: url(${MontserratMedium}) format("truetype");
    }

    @font-face {
        font-family: "Montserrat";
        font-weight: 800;
        font-style: normal;
        src: url(${MontserratBold}) format("truetype");
    }

    @font-face {
        font-family: "Pretendard";
        font-weight: 500; 
        font-style: normal;
        src: url(${PretendardMedium}) format("opentype");
    }

    @font-face {
        font-family: "Pretendard";
        font-weight: 600; 
        font-style: normal;
        src: url(${PretendardSemiBold}) format("opentype");
    }

    @font-face {
        font-family: "Pretendard";
        font-weight: 800; 
        font-style: normal;
        src: url(${PretendardExtraBold}) format("opentype");
    }
`;
