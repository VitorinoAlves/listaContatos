import React from 'react';
import { Provider } from 'react-redux'
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import EstiloGlobal from './styles/index.ts';



import Home from './pages/Home/index.tsx';
import Formulario from './pages/Formulario/index.tsx';
import store from './store/index.ts';

const rotas = createBrowserRouter([
  {
    path: '/',
    element: <Home></Home>
  },
  {
    path: '/form',
    element: <Formulario></Formulario>
  }
])

function App() {
  return (
    <Provider store={store}>
      <div>
        <EstiloGlobal></EstiloGlobal>
        <RouterProvider router={rotas} />
      </div>
    </Provider>
  );
}

export default App;
