import { Link } from 'react-router-dom'

const Thanks = () => {
  return (
    <div className="thanks">
      <div className='container'>
        <h2>Prezado, seu email está verificado! Bem-vindo(a) à nossa familia!</h2>
        <h3>Vem ao blog e faz o login... Estamos aguardando você!</h3>
        <Link to="/">
          <button className="btn">Ir ao blog</button>
        </Link>
      </div>
    </div>

  )
}

export default Thanks
