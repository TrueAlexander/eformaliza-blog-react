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
    //send data to server
    // const body = {
    //   "email": email,
    //   "password": password
    // }

    try {
      const response = await axios.post('http://localhost:4444/auth/login', {email, password})

      console.log(response.data.userData);

      ///dispatch to store that the user is logged in
      ///send to store the name of a user
      dispatch(login(response.data.userData))

      setShowModal(false)
      // return response.data.message;
      

      

    } catch (error) {

      console.log(error.response.data.message)
     
      return alert(error.response.data.message)
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
    </div>
  )
}

export default Login
