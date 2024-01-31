import React, { useState, useEffect } from 'react';
import { CSSTransition } from 'react-transition-group';
import './App.css';

function App() {
  const [showText, setShowText] = useState(true);
  const [text, setText] = useState('Aline');
  const [count, setCount] = useState(0);

  const handleButtonClick = () => {
    setShowText(false);
  };

  const changeText = () => {
    switch (count) {
      case 0:
        setText("Quero que preste atenção");
        setCount(count + 1);
        break;
      case 1:
        setText("Tenho uma coisa importante para te falar");
        setCount(count + 1);
        break;
      case 2:
        setText("Eu queria um cachorro quente...");
        setCount(count + 1);
        break;
      case 3:
        setText("Mas sei que é difícil pra você");
        setCount(count + 1);
        break;
      case 4:
        setText("Eu estou sendo muito chato ultimamente");
        setCount(count + 1);
        break;
      case 5:
        setText("Falando de conhecer seus pais");
        setCount(count + 1);
        break;
      case 6:
        setText("Mas eu deixo você fazer isso no seu tempo");
        setCount(count + 1);
        break;
      case 7:
        setText("Te amo demais, quero que saiba disso");
        setCount(count + 1);
        break;
      case 8:
        setText("Só queria te ver mais seguido");
        setCount(count + 1);
        break; 
      case 9:
        setText("Enfim, você tá de saco cheio desse papo já");
        setCount(count + 1);
        break; 
      case 10:
        setText("Aliás, quero que você se lembre de uma coisa");
        setCount(count + 1);
        break;
      case 11:
        setText("Quero ver você na formatura do meu lado");
        setCount(count + 1);
        break;
      case 12:
        setText("E da próxima vez ver você na sua formatura");
        setCount(count + 1);
        break;
      case 8:
        setText("Sou grudento porque tenho saudade");
        setCount(count + 1);
        break;
      case 9:
        setText("Sou tarado porque você me excita");
        setCount(count + 1);
        break;
      case 10:
        setText("Sou chato porque me preocupo");
        setCount(count + 1);
        break;
      case 11:
        setText("Eu vou trabalhar de dia e você estudar de noite");
        setCount(count + 1);
        break;
      case 12:
        setText("Vai ficar difícil de a gente até mesmo conversar");
        setCount(count + 1);
        break;
      case 13:
        setText("Mas a gente resolve isso como sempre");
        setCount(count + 1);
        break;
      case 14:
        setText("Perceba que não há botão de voltar");
        setCount(count + 1);
        break;
      case 15:
        setText("Assim como o tempo não tem volta");
        setCount(count + 1);
        break;
      case 16:
        setText("A gente não sabe o dia de amanhã");
        setCount(count + 1);
        break;
      case 17:
        setText("Portanto vamos aproveitar mais o nosso tempo");
        setCount(count + 1);
        break;
      case 18:
        setText("Não me importaria de passar o resto dele do seu lado");
        setCount(count + 1);
        break;
      case 19:
        setText("E como não podia faltar a minha cantada...");
        setCount(count + 1);
        break;
      case 20:
        setText("Se não der pra ir comer o cachorro quente beleza");
        setCount(count + 1);
        break;
      case 21:
        setText("A gente pode fazer um caseiro");
        setCount(count + 1);
        break;
      case 22:
        setText("Eu coloco a minha salsicha no meio do seu pão!");
        setCount(count + 1);
        break;
      case 23:
        setText("TE AMO!");
        setCount(count + 1);
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

  return (
    <div className="App">
      <div className='text-container'>
        {/* Use CSSTransition para aplicar classes de animação ao texto */}
        <CSSTransition
          in={showText}
          timeout={500}
          classNames="fade"
        >
          <h2>{text}</h2>
        </CSSTransition>
      </div>
      <div className='button-container'>
        <div className='button' onClick={handleButtonClick}>
          <span>Avançar</span>
        </div>
      </div>
    </div>
  );
}

export default App;