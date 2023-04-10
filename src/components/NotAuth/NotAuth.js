import { Link } from "react-router-dom"
import './NotAuth.scss'

const NotAuth = () => {
  return (
    <div className='notAuth'>
      <h2 className='sectionTitle notAuth__title'>VOCÊ NÃO ESTÁ AUTORIZADO!!</h2>
      <h2 className='notAuth__subtitle'>Por favor volta e faça o login!!</h2>
      <button
        className='btn notAuth__btn'>
          <Link to="/">
            Voltar
          </Link>
        </button>
    </div>
  )
}

export default NotAuth
