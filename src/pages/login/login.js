import './styled.css';



const Login = () => {
  return (
    <div id='Container'>
      <div className='tela-login'>
        <div className='login-tela'>
          <h1>Faça Seu Login</h1>

          <form className="form-login">
            <input className='input-login' type="text" name="email" placeholder="Digite seu Email" required />
            <input className='input-login' type="password" name="password" placeholder="Digite sua Senha" required />
            <input className='bnt-login' type="submit" value="Login" />
          </form>

        </div>
      </div>
    </div>
  );
}


export default Login;