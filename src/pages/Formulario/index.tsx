import React, { useEffect, useState } from 'react';
import { useMask } from '@react-input/mask';
import { nanoid } from '@reduxjs/toolkit';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate, useParams } from 'react-router-dom';

import Header from '../../components/Header/index.tsx';
import { Container, Campo, Titulo } from './styles.ts';
import { GreenButton } from '../../styles/index.ts';
import Contato from '../../models/Contato.ts';
import { conatatoAdiciondo, contatoEditado } from '../../store/reducers/contatos.ts';
import { RootReducer } from '../../store/index.ts';

const Formulario = () => {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const { contatoId } = useParams<{ contatoId: string }>();

    const [nome, setNome] = useState('');
    const [telefone, setTelefone] = useState('');
    const [email, setEmail] = useState('');


    const contatoExistente = useSelector((state: RootReducer) => state.contatos.find(contato => contato.id === contatoId));

    useEffect(() => {
        if (contatoExistente) {
            setNome(contatoExistente.nome);
            setTelefone(contatoExistente.telefone);
            setEmail(contatoExistente.email);
        }
    }, [contatoExistente]);

    const inputRef = useMask({
        mask: '(__) _____-____',
        replacement: { _: /\d/ },
    });

    if(contatoId && !contatoExistente){
        return (
            <>
                <Header tipoHeader='voltar'></Header>
                <Container>
                    <Titulo>Contato não encontrado</Titulo>
                </Container>
            </>
            
        )
    }

    const handleSubmit = (e) => {
        e.preventDefault();

        if(contatoExistente){
            const contatoEditadoData = { ...contatoExistente, nome, telefone, email};
            dispatch(contatoEditado(contatoEditadoData));
        } else {
            const novoContato = new Contato(nanoid(), nome, email, telefone);
            dispatch(conatatoAdiciondo({ ...novoContato }));
        }
        
        navigate('/');
    }

    return (
        <>
            <Header tipoHeader='voltar'></Header>
            <Container onSubmit={handleSubmit}>
                <Titulo>{contatoExistente ? 'Editar contato' : 'Adicionar novo contato'}</Titulo>
                <Campo type='text' placeholder='Nome' id='postNome' required value={nome} onChange={(e) => setNome(e.target.value)}/>
                <Campo type='tel' placeholder='Telefone' id='postTelefone' required ref={inputRef} value={telefone} onChange={(e) =>setTelefone(e.target.value)}/>
                <Campo type='email' placeholder='E-mail' id='postEmail' required value={email} onChange={(e) => setEmail(e.target.value)}/>
                
                <GreenButton type='submit'>Salvar</GreenButton>
            </Container>
            
        </>
        
    )
    
}

export default Formulario;