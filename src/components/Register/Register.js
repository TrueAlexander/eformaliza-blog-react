import { useState } from "react"

const Register = () => {

  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [username, setUsername] = useState("")

  const handleSubmit = (e) => {
    e.preventDefault()
    
    console.log(email + " " + password + " " + username)
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
