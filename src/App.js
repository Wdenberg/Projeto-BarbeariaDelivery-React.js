import React from 'react';
import ReactTypingEffect from 'react-typing-effect';
import './App.css';
import Home from './componentes/home/home';
import Login from './componentes/login/login';




const App = () => {

  return (
    <div className='container'>
      <Home />

      <div className='home-text'>
        <ReactTypingEffect speed={500}
          text={["Studio da Barba"]}
        />
      </div>

      <div className='tela-login-tn'>
        < Login />
      </div>
    </div>
  );
}

export default App;
