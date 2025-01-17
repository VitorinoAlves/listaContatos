import React from "react";
import { ContactCardContainer, CardTitle, ConstactInfo, ContactInfoLabel, Button, EditButton } from "./styles.ts";

type ContactCardProps = {
    id: string;
    nome: string;
    email: string;
    telefone: string;
}

const ContactCard = ({ id, nome, email, telefone }: ContactCardProps) => {
    return (
        <ContactCardContainer>
            <CardTitle>{nome}</CardTitle>
            <ConstactInfo><ContactInfoLabel>Email: </ContactInfoLabel>{email}</ConstactInfo>
            <ConstactInfo><ContactInfoLabel>Telefone: </ContactInfoLabel>{telefone}</ConstactInfo>
            <div>
                <EditButton type="button">Editar</EditButton>
                <Button type="button">Deletar</Button>
            </div>
        </ContactCardContainer>
    )
}

export default ContactCard;