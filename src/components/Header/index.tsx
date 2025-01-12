import React from "react";
import { HeaderBox, HeaderContainer, NewButton } from "./styles.ts";

const Header = () => {
    return(
        <HeaderBox>
            <HeaderContainer>
                <h1>Lista de Contatos</h1>
                <NewButton type="button">Novo Contato</NewButton>
            </HeaderContainer>
        </HeaderBox>
    )
}

export default Header;