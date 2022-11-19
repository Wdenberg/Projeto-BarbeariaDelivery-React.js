import ReactTypingEffect from 'react-typing-effect';

//Css
import Login from '../login/login';



import './home.css';
export const Home = () => {
  return (
    <>

      <div className='home-text'>
        <ReactTypingEffect speed={500}
          text={["Beggin 'S Hair"]}
        />
      </div>
      <div className='tela-login-tn'>
        < Login />

      </div>

    </>

  );
}