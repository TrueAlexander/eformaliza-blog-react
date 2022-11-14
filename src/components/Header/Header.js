import './Header.scss'
import logo from "./../../images/icons/logo_principal.svg"
import { useState } from "react"
import { ImExit, ImEnter } from 'react-icons/im'

const Header = ({setShowModal}) => {

  const [auth, setAuth] = useState(false)

  return (
    <header className="header">
      <div className="container">
        <div className="header__row">
          <a className="header__logo" href="./">
            <img src={logo} alt="eformaliza" className="logo"/>
          </a>
          <div className="header__title">
            <h1>Blog do seu negócio</h1>
          </div>
          <div className="header__auth">
            {!auth 
            ? <button
                className="btn btn_icon" 
                title="Entrar"
                onClick={() => setShowModal(true)}
              ><ImEnter/></button>
            : <>
                <p>Usuario</p>
                <button
                  className="btn btn_icon" 
                  title="Sair"
                ><ImExit/></button>
              </>}
          </div>
        </div>
      </div>
    </header>
  )
}

export default Header
