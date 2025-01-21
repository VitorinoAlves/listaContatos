import styled from "styled-components";
import { Link } from "react-router-dom";

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
    background-color: #048900;
    color: #fff;
    border: none;
    padding: 8px;
    font-size: 16px;
    font-weight: bold;
    cursor: pointer;
    text-decoration: none;
`

export const VoltarButton = styled(NewButton)`
    background-color: #3b3b3b;
`