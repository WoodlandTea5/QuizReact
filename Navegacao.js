import React from 'react';

const Navegacao = ({ paginaAtual, questoes }) => {
  return (
    <div className="navegacao">
      <p>
        <strong>Página {paginaAtual + 1}</strong> de {questoes.length}
      </p>
      <div className="progresso">
        <div
          className="barra-progresso"
          style={{
            width: `${((paginaAtual + 1) / questoes.length) * 100}%`, // Calcula a largura da barra com base na página atual
          }}
        ></div>
      </div>
    </div>
  );
};

export default Navegacao;
