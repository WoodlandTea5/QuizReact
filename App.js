import React, { useState, useEffect } from 'react';
import PaginaQuestao from './componentes/PaginaQuestao';
import Feedback from './componentes/Feedback';
import Navegacao from './componentes/Navegacao';
import './estilos/Geral.css';

const App = () => {
  const [questoes, setQuestoes] = useState([]);  // Estado para armazenar as questões
  const [respostas, setRespostas] = useState([]); // Estado para armazenar as respostas do usuário
  const [paginaAtual, setPaginaAtual] = useState(0); // Estado para controlar a página atual do quiz
  const [quizIniciado, setQuizIniciado] = useState(false); // Estado para controlar se o quiz foi iniciado ou não

  useEffect(() => {
    fetch('/src/dados/questoes.json') // Faz uma requisição para pegar o arquivo JSON das questões
      .then(response => response.json()) // Converte a resposta em formato JSON
      .then(data => setQuestoes(data));  // Atualiza o estado 'questoes' com os dados recebidos
  }, []);

  // Função para registrar a resposta do usuário e avançar para a próxima questão
  const handleResposta = (respostaSelecionada) => {
    setRespostas([...respostas, respostaSelecionada]); // Armazena a resposta selecionada
    if (paginaAtual < questoes.length - 1) { // Se ainda houver mais questões, avança para a próxima
      setPaginaAtual(paginaAtual + 1);
    }
  };

  // Função para calcular a pontuação do quiz comparando as respostas do usuário com a resposta correta
  const calcularPontuacao = () => {
    let pontuacao = 0;
    questoes.forEach((questao, index) => {
      if (questao.respostaCorreta === respostas[index]) {
        pontuacao++; // Incrementa a pontuação se a resposta estiver correta
      }
    });
    return pontuacao;
  };

  // Função para iniciar o quiz
  const iniciarQuiz = () => {
    setQuizIniciado(true);  // Marca que o quiz foi iniciado
    setPaginaAtual(0);       // Começa na primeira questão
  };

  // Função para reiniciar o quiz
  const voltarInicio = () => {
    setPaginaAtual(0);       // Volta para a primeira página
    setRespostas([]);        // Limpa as respostas
    setQuizIniciado(false);  // Reseta o quiz
  };

  // Se o quiz não foi iniciado, exibe a tela de introdução
  if (!quizIniciado) {
    return (
      <div className="introducao">
        <h1>Bem-vindo ao Quiz de Desenvolvimento Web!</h1>
        <p>Este quiz irá testar seus conhecimentos sobre desenvolvimento web.</p>
        <button onClick={iniciarQuiz}>Iniciar Questionário</button>
      </div>
    );
  }

  // Se todas as questões foram respondidas, exibe o feedback
  if (paginaAtual >= questoes.length) {
    return <Feedback pontuacao={calcularPontuacao()} voltarInicio={voltarInicio} />;
  }

  // Se o quiz foi iniciado e ainda não acabou, exibe a navegação e a questão atual
  return (
    <div>
      <Navegacao paginaAtual={paginaAtual} questoes={questoes} />
      <PaginaQuestao
        questao={questoes[paginaAtual]}
        onResposta={handleResposta}
      />
      <div className="botoes-navegacao">
        {paginaAtual > 0 && (
          <button onClick={() => setPaginaAtual(paginaAtual - 1)}>Voltar</button>
        )}
        {paginaAtual < questoes.length - 1 ? (
          <button onClick={() => setPaginaAtual(paginaAtual + 1)}>Próxima</button>
        ) : (
          <button onClick={voltarInicio}>Reiniciar</button>
        )}
      </div>
    </div>
  );
};

export default App;
