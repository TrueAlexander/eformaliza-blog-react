import { useState, useEffect } from 'react'
import axios from 'axios'
import { useDispatch } from 'react-redux'
import { login } from '../../features/authSlice'

const Login = ({setShowModal}) => {
  const dispatch = useDispatch()

  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")

  const handleSubmit = async (e) => {
    e.preventDefault()
    //send email and password to server
    try {
      const response = await axios.post('http://localhost:4444/auth/login', {email, password})
      ///dispatch to store that the user is logged in
      ///send to store the name of a user
      dispatch(login(response.data.userData))
      //send username and token to localstorage
      localStorage.setItem("user", response.data.userData.username)
      localStorage.setItem("token", response.data.token)
      setShowModal(false)
      
    } catch (error) {
      console.log('error!!')
      console.log(error.response.data.message)
    }     
  }
 
  // useEffect(() => {
   
  // }, [])
  
  return (
    <div className="login">
      <form className="form" onSubmit={handleSubmit}>
        <div className="form__input">
          <input 
            type="email" 
            name="email" 
            autoComplete="on"
            placeholder="email" 
            onChange={(e) => setEmail(e.target.value)} required 
          />
        </div>
        <div className="form__input">
          <input 
            type="password" 
            name="password"
            minLength={5}
            autoComplete="on" 
            placeholder="senha" 
            onChange={(e) => setPassword(e.target.value)} required 
          />
        </div>
        <button className="form__btn btn" type="submit">Enviar</button>
      </form>
      <button 
        className="login__reset"
      >
        Clique para recuperar a senha</button>
    </div>
  )
}

export default Login
