import './styled.css';


const Menu = () => {

  function handelClick() {
    let menuOpen = document.getElementById('Container');

    if (menuOpen.classList.contains('open') == true) {
      menuOpen.classList.remove('open');
    } else {
      menuOpen.classList.add('open');
    }

  }
  return (
    <div className="home">
      <div className='home-menu'>
        <nav>
          <ul>
            <li><a href='/'>Home</a></li>
            <li><a href='/about'>Sobre</a></li>
          </ul>
        </nav>
      </div>
      <button className='btn-head' onClick={handelClick}>Login</button>
    </div>
  );
}

export default Menu;