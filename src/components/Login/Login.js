import { useState, useEffect } from 'react'
// import axios from 'axios'
import { useDispatch, useSelector } from 'react-redux'
import { fetchAuth } from '../../features/authSlice'

const Login = ({setShowModal}) => {
  const dispatch = useDispatch()

  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")

  const handleSubmit = async (e) => {
    e.preventDefault()
    //send email and password to server
    try {
      const data = await dispatch(fetchAuth({email, password}))
      if (!data.payload) {
        alert("O login e/ou a senha estão errados!")
      } else {
        alert(data.payload.message)
        setShowModal(false)
        //send username and token to localstorage
        localStorage.setItem("user", data.payload.userData.username)
        localStorage.setItem("token", data.payload.token)
      }   
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
