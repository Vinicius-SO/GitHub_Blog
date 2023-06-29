import { createGlobalStyle } from "styled-components";

export const GlobalStyles = createGlobalStyle`
    *{
        margin: 0;
        padding: 0;
        box-sizing: border-box;
        font-family: 'Nunito', sans-serif;
    }

    body{
        width: 100%;
        max-width: 1120px;
        height: 100vh;

        background-color: ${props=>props.theme.background};
        color: ${props=> props.theme.text};
   }
`