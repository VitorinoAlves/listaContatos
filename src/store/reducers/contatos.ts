import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import Contato from "../../models/Contato";

const initialState: Contato[] = [
    {
        id: '1',
        nome: 'Nome contato 01',
        email: 'test@email.com',
        telefone: '(55)55555-5555'
    },
    {
        id: '2',
        nome: 'Nome contato 02',
        email: 'test@email.com',
        telefone: '(55)55555-5555'
    },
    {
        id: '3',
        nome: 'Nome contato 03',
        email: 'test@email.com',
        telefone: '(55)55555-5555'
    },
    {
        id: '4',
        nome: 'Nome contato 04',
        email: 'test@email.com',
        telefone: '(55)55555-5555'
    },
    {
        id: '5',
        nome: 'Nome contato 05',
        email: 'test@email.com',
        telefone: '(55)55555-5555'
    }
]

const contatoSlice = createSlice({
    name: 'contatos',
    initialState,
    reducers: {
        conatatoAdiciondo(state, action: PayloadAction<Contato>){
            state.push(action.payload);
        },
        contatoEditado(state, action: PayloadAction<Contato>){
            const { id, nome, telefone, email} = action.payload;
            const contatoExistente = state.find(contato => contato.id === id);

            if(contatoExistente){
                contatoExistente.nome = nome;
                contatoExistente.telefone = telefone;
                contatoExistente.email = email;
            }
        },
        contatoDeletado(state, action: PayloadAction<string>){
            return state.filter((contato) => contato.id !== action.payload);
        }
    }
});

export const { conatatoAdiciondo, contatoEditado, contatoDeletado } = contatoSlice.actions;

export default contatoSlice.reducer;