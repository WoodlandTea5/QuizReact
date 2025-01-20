import React, { useState } from 'react';

const PaginaQuestao = ({ questao, onResposta }) => {
  const [respostaSelecionada, setRespostaSelecionada] = useState('');

  const handleRespostaChange = (event) => {
    setRespostaSelecionada(event.target.value);  // Atualiza a resposta selecionada
  };

  const handleSubmit = () => {
    if (respostaSelecionada) {
      onResposta(respostaSelecionada);  // Passa a resposta selecionada para o App.js
    }
  };

  return (
    <div className="questao">
      <h2>{questao.pergunta}</h2>
      <div className="alternativas">
        {questao.alternativas.map((alternativa, index) => (
          <label key={index}>
            <input
              type="radio"
              name={`questao-${questao.id}`} // Garante que cada questão tenha seu próprio grupo de opções
              value={alternativa}
              onChange={handleRespostaChange} // Atualiza a resposta selecionada
              checked={respostaSelecionada === alternativa}
            />
            {alternativa}
          </label>
        ))}
      </div>
      <button
        onClick={handleSubmit}
        disabled={!respostaSelecionada} // Desabilita o botão até que uma resposta seja selecionada
      >
        Próxima
      </button>
    </div>
  );
};

export default PaginaQuestao;
