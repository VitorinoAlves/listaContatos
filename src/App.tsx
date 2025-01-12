import React from 'react';
import EstiloGlobal from './styles/index.ts';

import Header from './components/Header/index.tsx';
import ContactList from './containers/ContactList/index.tsx';

function App() {
  return (
    <div>
      <EstiloGlobal></EstiloGlobal>
      <Header></Header>
      <ContactList></ContactList>
    </div>
  );
}

export default App;
