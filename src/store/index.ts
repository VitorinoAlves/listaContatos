import { configureStore } from '@reduxjs/toolkit'

import contatoReducer from './reducers/contatos.ts'

export const store = configureStore({
    reducer: {
        contatos: contatoReducer
    }
})

export type RootReducer = ReturnType<typeof store.getState>

export default store