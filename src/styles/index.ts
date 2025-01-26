import { createGlobalStyle, styled } from "styled-components";
import variaveis from "./variaveis.ts";

const EstiloGlobal = createGlobalStyle`
    *{
        margin:0;
        padding: 0;
        box-sizing: border-box;
        list-style: none;
        font-family: "Roboto", serif;
    }
`

export const Button = styled.button`
    padding: 12px;
    border: none;
    cursor: pointer;
    margin-right: 8px;
    color: ${variaveis.branco};
    border-radius: 12px;
    background-color: ${variaveis.cinza};
`

export const GreenButton = styled(Button)`
    background-color: ${variaveis.verde};
`

export default EstiloGlobal