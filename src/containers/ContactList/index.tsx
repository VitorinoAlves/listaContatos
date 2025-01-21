import React from "react";
import { ListContainer } from "./styles.ts";
import ContactCard from "../../components/ContactCard/index.tsx";
import { useSelector } from "react-redux";
import { RootReducer } from "../../store/index.ts";

const ContactList = () => {
    const contatos = useSelector((state: RootReducer) => state.contatos)

    return(
        <ListContainer>
            {
                contatos.map((contact) => (
                    <ContactCard key={contact.id} id={contact.id} nome={contact.nome} email={contact.email} telefone={contact.telefone} />
                ))
            }
        </ListContainer>
    )
}

export default ContactList;