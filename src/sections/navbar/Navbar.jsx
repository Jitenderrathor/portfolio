import data from './data'
import './navbar.css'
import { IoIosColorPalette } from "react-icons/io";

function Navbar() {
  return (
    <nav>
      <div className="container nav__container">
        <a href="index.html" className='nav__logo'>
          <img src="./assets/logo.jpg" alt="logo" />
        </a>
        <ul className='nav__menu'>
          {
            data.map(item => <li id={item.id}> <a href={item.link}>{item.title}</a></li>)
          }
        </ul>
        <button id='theme__icon'>
          <IoIosColorPalette/>
        </button>
      </div>
    </nav>
  )
}

export default Navbar
