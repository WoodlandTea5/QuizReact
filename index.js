import React from 'react';
import ReactDOM from 'react-dom/client';  // Usando createRoot em vez de render()
import App from './App';  // Componente principal
import './estilos/Geral.css';  // Estilos globais

// Criando a raiz e renderizando o componente App
const root = ReactDOM.createRoot(document.getElementById('root'));  // Criando raiz de renderização
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
