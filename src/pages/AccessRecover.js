import { useState } from "react"
import { useDispatch } from "react-redux"
import { fetchRecover } from "../features/authSlice"
import { useNavigate } from "react-router-dom"

const AccessRecover = () => {

  const navigate = useNavigate()
  const dispatch = useDispatch()

  const [email, setEmail] = useState("")

  const submitEmail = async (e) => {
    e.preventDefault()
    ///dispatch post request with email to api
    const data = await dispatch(fetchRecover({email}))
    console.log(data)
    if (!data.payload) {
      alert(`O usuario ${email} não foi encontrado. Por favor cadastre-se a nossa plataforma!`)
    } else alert(data.payload.message) 
    navigate("/")
  }

  return (
    <div className="thanks">
      <div className='container'>
        <h2>Prezado, digite seu email para recuperar o acesso ao seu perfil!</h2>
        <form onSubmit={submitEmail}>
          <div className="form__input">
            <input 
              type="email" 
              name="email" 
              autoComplete="on"
              placeholder="email" 
              onChange={(e) => setEmail(e.target.value)} required 
            />
          </div>
          <button className="btn" type="submit">Enviar</button>
        </form>
      </div>
    </div>
  )
}

export default AccessRecover
