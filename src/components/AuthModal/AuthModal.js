import Login from "../Login/Login"
import Register from "../Register/Register"
import "./AuthModal.scss"
import { FaRegWindowClose } from "react-icons/fa"

const AuthModal = ({showModal, setShowModal}) => {
  return (
    <div 
      className={showModal ? "authModal show" : "authModal"} 
      onClick={() => setShowModal(false)}
    >
      <div 
        className="authModal__content"
        onClick={e => e.stopPropagation()}
      >
        <h2 className="authModal__title sectionTitle">Prezado usuario!</h2>
        <button
          onClick={() => setShowModal(false)}
          className="authModal__btn btn btn_icon"
        >
          <FaRegWindowClose/></button>
        <div className="authModal__row">
          <div className="authModal__item">
            <h3>Faz Login:</h3>
            <Login setShowModal={setShowModal} />
          </div>
          <div className="authModal__item">
            <h3>Ou cadastre-se:</h3>
            <Register />
          </div>
        </div>
      </div>
    </div>
  )
}

export default AuthModal
