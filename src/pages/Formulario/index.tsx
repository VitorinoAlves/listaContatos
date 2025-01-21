import React from 'react';
import { useMask } from '@react-input/mask';
import Header from '../../components/Header/index.tsx';
import { Container, Campo, Titulo } from './styles.ts';
import { GreenButton } from '../../styles/index.ts';

const Formulario = () => {
    const inputRef = useMask({
        mask: '(__) _____-____',
        replacement: { _: /\d/ },
    });
    
    return (
        <>
            <Header tipoHeader='voltar'></Header>
            <Container>
                <Titulo>Adicionar novo contato</Titulo>
                <Campo type='text' placeholder='Nome' required/>
                <Campo type='tel' placeholder='Telefone' required ref={inputRef}/>
                <Campo type='email' placeholder='E-mail' required/>
                
                <GreenButton type='button'>Salvar</GreenButton>
            </Container>
            
        </>
        
    )
    
}

export default Formulario;