import styled from "styled-components";
import { Link } from "react-router-dom";
import variaveis from "../../styles/variaveis.ts";

export const HeaderBox = styled.div`
    width: 100%;
    background-color: #dadada;
`

export const HeaderContainer = styled.div`
    max-width: 1024px;
    margin: 0 auto;
    display:flex;
    justify-content: space-between;
    padding: 8px 0;
`

export const NewButton = styled(Link)`
    background-color: ${variaveis.verde};
    color: ${variaveis.branco};
    border: none;
    padding: 8px;
    font-size: 16px;
    font-weight: bold;
    cursor: pointer;
    text-decoration: none;
`

export const VoltarButton = styled(NewButton)`
    background-color: ${variaveis.cinza};
`