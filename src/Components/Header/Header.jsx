import Logo from '../Img/logo.svg'
import './Styles.css'

function Header ({showProducts}) {

  return (
    <header className="App-header">
      <div className='divLogo'> 
        <img className='logo' src={Logo} alt='Logo'/>
      </div>
      <form onSubmit={showProducts}>
        <div className='divButton'>
        <input type='text' placeholder='Pesquisar por produto'/>
        <button type='submit' className='search'>Pesquisar</button>
        </div>
      </form>
    </header>
  )
}

export default Header