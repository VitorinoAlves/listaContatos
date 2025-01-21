import React from "react";
import { ContactCardContainer, CardTitle, ConstactInfo, ContactInfoLabel } from "./styles.ts";
import { GreenButton, Button } from "../../styles/index.ts";

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
                <GreenButton type="button">Editar</GreenButton>
                <Button type="button">Deletar</Button>
            </div>
        </ContactCardContainer>
    )
}

export default ContactCard;