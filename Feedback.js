import React from 'react';

const Feedback = ({ pontuacao, voltarInicio }) => {
  return (
    <div>
      <h2>Quiz Finalizado!</h2>
      <p>Sua pontuação: {pontuacao}</p>
      <button onClick={voltarInicio}>Voltar ao início</button>
    </div>
  );
};

export default Feedback;
