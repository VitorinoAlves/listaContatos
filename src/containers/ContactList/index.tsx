import React from "react";
import { ListContainer } from "./styles.ts";
import Contato from '../../models/Contato.ts'

const ContactList = () => {
    type contactListType = Contato[];

    const initialList: contactListType = [
        {
            nome: 'Nome contato 01',
            email: 'test@email.com',
            telefone: '55555-5555'
        },
        {
            nome: 'Nome contato 02',
            email: 'test@email.com',
            telefone: '55555-5555'
        },
        {
            nome: 'Nome contato 03',
            email: 'test@email.com',
            telefone: '55555-5555'
        },
        {
            nome: 'Nome contato 04',
            email: 'test@email.com',
            telefone: '55555-5555'
        },
        {
            nome: 'Nome contato 05',
            email: 'test@email.com',
            telefone: '55555-5555'
        }
    ]

    return(
        <ListContainer>Lista de contatos</ListContainer>
    )
}

export default ContactList;