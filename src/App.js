import React, { useState, useEffect } from 'react';
import { CSSTransition } from 'react-transition-group';
import './App.css';

function App() {
  const [showText, setShowText] = useState(true);
  const [text, setText] = useState('Olá Raposinha');
  const [count, setCount] = useState(0);
  const [heart, setHeart] = useState(false);
  const [hearts, setHearts] = useState([]); // Para armazenar os corações da chuva

  const handleButtonClick = () => {
    setShowText(false);
    if (count === 17) {
      document.querySelector('.button-container').style.display = 'none'; // Esconde o botão
    }
  };

  const changeText = () => {
    switch (count) {
      case 0:
        setText("Não queria deixar essa data passar em branco");
        setCount(count + 1);
        break;
      case 1:
        setText("Obrigado por esse 1 ano");
        setCount(count + 1);
        break;
      case 2:
        setText("Lembro como se fosse ontem");
        setCount(count + 1);
        break;
      case 3:
        setText("Eu peguei suas mãos");
        setCount(count + 1);
        break;
      case 4:
        setText("Olhei nos seus olhos");
        setCount(count + 1);
        break;
      case 5:
        setText("E te pedi em namoro");
        setCount(count + 1);
        break;
      case 6:
        setText("De lá até aqui as coisas não foram fáceis");
        setCount(count + 1);
        break;
      case 7:
        setText("As nossas vidas mudaram drasticamente");
        setCount(count + 1);
        break;
      case 8:
        setText("Não foi fácil passar por tudo isso");
        setCount(count + 1);
        break;
      case 9:
        setText("Muitas alegrias, tristezas, brigas");
        setCount(count + 1);
        break;
      case 10:
        setText("Experiências únicas juntos");
        setCount(count + 1);
        break;
      case 11:
        setText("Passamos por várias coisas");
        setCount(count + 1);
        break;
      case 12:
        setText("Incontáveis momentos de aventura juntos");
        setCount(count + 1);
        break;
      case 13:
        setText("Queria dizer que gosto sim muito de você");
        setCount(count + 1);
        break;
      case 14:
        setText("Obrigado por esses momentos inesquecíveis");
        setCount(count + 1);
        break;
      case 15:
        setText("Beijo minha gata");
        setCount(count + 1);
        break;
      case 16:
        setText("29/09");
        setCount(count + 1);
        break;
      case 17:
        setHeart(true);
        setText('');
        generateHearts(); // Inicia a geração da chuva de corações
        break;
      // Adicione mais casos conforme necessário
    }
    setShowText(true); // Atualiza o estado showText após a transição
  };

  useEffect(() => {
    if (!showText) {
      // Aguarda a transição antes de chamar a função changeText
      setTimeout(() => {
        changeText();
      }, 500); // O valor deve ser igual ao timeout definido em CSSTransition
    }
  }, [showText]);

  // Função para gerar a chuva de corações
  const generateHearts = () => {
    const newHearts = [];
    for (let i = 0; i < 30; i++) {
      const randomLeft = Math.random() * 100; // Posição horizontal aleatória
      const randomDuration = Math.random() * 5 + 2; // Duração aleatória da queda
      newHearts.push({
        id: i,
        left: randomLeft,
        animationDuration: `${randomDuration}s`
      });
    }
    setHearts(newHearts);
  };

  return (
    <div className="App">
      <div className="text-container">
        {/* Use CSSTransition para aplicar classes de animação ao texto */}
        <CSSTransition in={showText} timeout={500} classNames="fade">
          <h2>{text}</h2>
        </CSSTransition>
        {heart && <div id="heart"></div>}
      </div>
      <div className="button-container">
        <div className="button" onClick={handleButtonClick}>
          <span>Avançar</span>
        </div>
      </div>

      {/* Chuva de corações menores */}
      <div className="heart-rain-container">
        {hearts.map((heart) => (
          <div
            key={heart.id}
            className="falling-heart"
            style={{
              left: `${heart.left}%`,
              animationDuration: heart.animationDuration
            }}
          >
            ❤️
          </div>
        ))}
      </div>
    </div>
  );
}

export default App;
