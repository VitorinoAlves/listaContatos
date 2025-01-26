import React from "react";
import { ContactCardContainer, CardTitle, ConstactInfo, ContactInfoLabel } from "./styles.ts";
import { GreenButton, Button } from "../../styles/index.ts";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { contatoDeletado } from "../../store/reducers/contatos.ts";

type ContactCardProps = {
    id: string;
    nome: string;
    email: string;
    telefone: string;
}

const ContactCard = ({ id, nome, email, telefone }: ContactCardProps) => {
    const navigate = useNavigate();
    const dispatch = useDispatch();

    const editarContato = () => {
        navigate(`/edit/${id}`);
    }

    return (
        <ContactCardContainer>
            <CardTitle>{nome}</CardTitle>
            <ConstactInfo><ContactInfoLabel>Email: </ContactInfoLabel>{email}</ConstactInfo>
            <ConstactInfo><ContactInfoLabel>Telefone: </ContactInfoLabel>{telefone}</ConstactInfo>
            <div>
                <GreenButton type="button" onClick={editarContato}>Editar</GreenButton>
                <Button type="button" onClick={() => dispatch(contatoDeletado(id))}>Deletar</Button>
            </div>
        </ContactCardContainer>
    )
}

export default ContactCard;