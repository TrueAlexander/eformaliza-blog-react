import { Link } from "react-router-dom"
import { useState } from "react"
import { useDispatch } from "react-redux"
import { fetchRecover } from "../features/authSlice"

const NewPassword = () => {

  const dispatch = useDispatch()

  const [password1, setPassword1] = useState("")
  const [password2, setPassword2] = useState("")

  const submitPassword = (e) => {
    e.preventDefault()
    if (password1 !== password2) {
      alert('As senhas têm ser iguais. Digite senhas por favor de novo!')
    } else {
      // ///dispatch post request with new password to api
    // dispatch(fetchPassword({password})) 
    }
    
  }

  return (
    <div className="thanks">
      <div className='container'>
        <h2>Please digit the new password (Min length should be 5 symbols) and click Confirm new password.!</h2>
        <form onSubmit={submitPassword}>
          <div className="form__input">
            <input 
              type="password" 
              name="password1" 
              placeholder="nova senha" 
              onChange={(e) => setPassword1(e.target.value)} required 
            />
          </div>
          <div className="form__input">
            <input 
              type="password" 
              name="password2" 
              placeholder="nova senha" 
              onChange={(e) => setPassword2(e.target.value)} required 
            />
          </div>
          <button className="btn" type="submit">Enviar</button>
        </form>
      </div>
    </div>
  )
}

export default NewPassword
