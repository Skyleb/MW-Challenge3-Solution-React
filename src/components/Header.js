import { Link } from 'react-router-dom'
import { useLocation } from 'react-router-dom'
import logo from './Logo.png'

const Header = () => {
  const location = useLocation()

  return (
    <header className='header'>
      <img src={logo}/>
      {location.pathname === '/' && <Link to='/contact'><h2>contact</h2></Link>}
      {location.pathname === '/contact' && <Link to='/'><h2>home</h2></Link>}
    </header>
  )
}

export default Header