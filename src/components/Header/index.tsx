import React from "react";
import { HeaderBox, HeaderContainer, NewButton, VoltarButton } from "./styles.ts";

type Props ={
    tipoHeader: 'novoContato' | 'voltar'
}

const Header = ({ tipoHeader }: Props) => {
    return(
        <HeaderBox>
            <HeaderContainer>
                <h1>Lista de Contatos</h1>
                {tipoHeader==='novoContato' ? (
                    <NewButton to="/form">Novo Contato</NewButton>
                ) : (
                    <VoltarButton to="/">Voltar</VoltarButton>
                )}
                
            </HeaderContainer>
        </HeaderBox>
    )
}

export default Header;