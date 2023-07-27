import { useLocation, useNavigate } from "react-router-dom"
import { useState, useEffect } from "react"
import axios from '../../utils/axios'
import "./PostMain.scss"
import { Link as LinkRoll } from 'react-scroll'
import { useSelector } from "react-redux"
import { selectIsAuth } from "../../features/authSlice"


const PostMain = () => {

  //get the post id
  const { state } = useLocation()
  const id = state.id
  console.log(id)
  
  const [data, setData] = useState()
  const [isLoading, setLoading] = useState(true)
  ////
  const navigate = useNavigate()
  // const [user, setUser] = useState(localStorage.getItem("user"))
  const auth = useSelector(selectIsAuth)
  ////


  useEffect(() => {
    axios.get(`/posts/${id}`)
      .then((res) => {
        setData(res.data)
        setLoading(false)
      })
      .catch((err) => {
        console.warn(err)
        alert('O post não foi encontrado!')
      })

  }, [])

  console.log(data)
  console.log(isLoading)

  const deletePost = async () => {
    const sure = alert("Estas seguro que quer apagar o seu post?:-(")
   
    if (sure !== false) {
      await axios.delete(`/posts/${id}`)
      alert("O post esta apagando!:-(")
      navigate(`/`)
    }  
  }

  if (isLoading) return <h3 className="loading">Carregando...</h3>
  return (
    <main>
      <div className="container">
        <div className="postFull">
          <div className="postFull__title">
            <h2 className="title sectionTitle">{data.title}</h2>
          </div>
          {auth && data.authorUsername === localStorage.getItem("user") ? <div className="postFull__delete">
            <button
              className="btn"
              title="Apagar o post"
              onClick={deletePost}
            >
              Apagar
            </button>
          </div> : ""}
          <div className="postFull__box">
            <div className="postFull__image">
              <img className="lazy" src={`https://blog-eformaliza-api.onrender.com${data.imageUrl}`} alt={data.title} title={data.title}/>
            </div>
            <div className="postFull__text">{data.text}</div>
          </div>
          <LinkRoll
            to={"header"} 
            activeClass="active" 
            spy={true} 
            smooth={true} 
            offset={-100} 
            duration={500}
            title="Voltar"
        >
          <button className="postFull__btn btn" title="Ir ao inicio">Ao inicio</button>
        </LinkRoll>         
        </div>
      </div>
    </main>
  )
}

export default PostMain
