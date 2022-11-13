import './Header.scss'
import logo from "./../../images/icons/logo_principal.svg"
import enterIcon from "./../../images/icons/enter.svg"
import { useState } from "react"

const Header = () => {

  const [auth, setAuth] = useState(false)

  return (
    <header className="header">
      <div className="container">
        <div className="header__row">
          <a classname="header__logo" href="./">
            <img src={logo} alt="eformaliza" className="logo"/>
          </a>
          <div className="header__title">
            <h1>Blog do seu negócio</h1>
          </div>
          <div className="header__auth">
            {!auth 
            ? <button className="btn" title="Entrar">
              <img src={enterIcon} alt="entrar" />
            </button>
            : <>
                <p>Usuario</p>
                <button className="btn">Sair</button>
              </>}
          </div>
        </div>
      </div>
    </header>
  )
}

export default Header
