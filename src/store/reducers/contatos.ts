import { createSlice } from "@reduxjs/toolkit";
import Contato from "../../models/Contato";

type ContatoState = Contato[];

const initialState: ContatoState = [
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

const contatoSlice = createSlice({
    name: 'contatos',
    initialState,
    reducers: {

    }
});

export default contatoSlice.reducer;