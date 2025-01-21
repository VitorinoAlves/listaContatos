import React from 'react';
import Header from "../../components/Header/index.tsx"
import ContactList from '../../containers/ContactList/index.tsx';


const Home = () => {
    return (
        <>
            <Header tipoHeader='novoContato'></Header>
            <ContactList></ContactList>
        </>
        
    )
}

export default Home;