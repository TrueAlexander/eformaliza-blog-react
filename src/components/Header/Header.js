import './Header.scss'
import logo from "./../../images/icons/logo_principal.svg"
import { useState, useEffect } from "react"
import { ImExit, ImEnter } from 'react-icons/im'
import { useSelector, useDispatch } from 'react-redux'
import { fetchAuth, logout, selectIsAuth } from '../../features/authSlice'


const Header = ({setShowModal}) => {

  const dispatch = useDispatch()

  const auth = useSelector(selectIsAuth)

  const user = useSelector(state => {
    if (state.auth.data) {
      return state.auth.data.userData.username
    }  else return undefined
  })

  return (
    <header className="header" id="header">
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
                <p>{user}</p>
                <button
                  className="btn btn_icon"
                  onClick={() => dispatch(logout())}
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
