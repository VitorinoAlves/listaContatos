import { createGlobalStyle, styled } from "styled-components";

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
    color: #fff;
    border-radius: 12px;
    background-color: #3b3b3b;
`

export const GreenButton = styled(Button)`
    background-color: #00871d;
`

export default EstiloGlobal