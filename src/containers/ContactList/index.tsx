import React from "react";
import { ListContainer } from "./styles.ts";
import Contato from '../../models/Contato.ts'
import ContactCard from "../../components/ContactCard/index.tsx";

const ContactList = () => {
    type contactListType = Contato[];

    const initialList: contactListType = [
        {
            id: '1',
            nome: 'Nome contato 01',
            email: 'test@email.com',
            telefone: '55555-5555'
        },
        {
            id: '2',
            nome: 'Nome contato 02',
            email: 'test@email.com',
            telefone: '55555-5555'
        },
        {
            id: '3',
            nome: 'Nome contato 03',
            email: 'test@email.com',
            telefone: '55555-5555'
        },
        {
            id: '4',
            nome: 'Nome contato 04',
            email: 'test@email.com',
            telefone: '55555-5555'
        },
        {
            id: '5',
            nome: 'Nome contato 05',
            email: 'test@email.com',
            telefone: '55555-5555'
        }
    ]

    return(
        <ListContainer>
            {
                initialList.map((contact) => (
                    <ContactCard key={contact.id} id={contact.id} nome={contact.nome} email={contact.email} telefone={contact.telefone} />
                ))
            }
        </ListContainer>
    )
}

export default ContactList;