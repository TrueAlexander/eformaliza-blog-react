import { useState } from "react"
import { useDispatch } from 'react-redux'
import { fetchRegister } from '../../features/authSlice'

const Register = ({setShowModal}) => {
  const dispatch = useDispatch()

  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [username, setUsername] = useState("")

  const handleSubmit = async (e) => {
    e.preventDefault()
    try {
      const data = await dispatch(fetchRegister({username, email, password}))
      if (!data.payload) {
        alert(`O cadastro não foi realizado! Provavelmente o usuario com ${email} ja existe. Tente fazer o login ou recupere sua senha`) 
      } else {
        alert(data.payload.message)
        setShowModal(false)
      }
    } catch (error) {
      console.log('error!!')
      console.log(error.response.data.message)
    }
  }

  return (
    <div className="register">
      <form className="form" onSubmit={handleSubmit}>
      <div className="form__input">
          <input type="text" name="username" autoComplete="on" placeholder="nome" onInput={(e) => setUsername(e.target.value)} required />
        </div>
        <div className="form__input">
          <input type="email" name="email" autoComplete="on" placeholder="email" onInput={(e) => setEmail(e.target.value)} required />
        </div>
        <div className="form__input">
          <input type="password" name="password" autoComplete="on" placeholder="senha" onInput={(e) => setPassword(e.target.value)} required />
        </div>
        <button className="form__btn btn" type="submit">Enviar</button>
      </form>
    </div>
  )
}

export default Register
