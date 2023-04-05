import { useLocation } from "react-router-dom"
import { useState, useEffect } from "react"
import axios from '../../utils/axios'
import "./PostMain.scss"


const PostMain = () => {

  //get the post id
  const { state } = useLocation()
  const id = state.id
  console.log(id)
  
  const [data, setData] = useState()
  const [isLoading, setLoading] = useState(true)

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

  if (isLoading) return <h3 className="loading">Carregando...</h3>
  return (
    <main>
      <div className="container">
        <div className="postFull">
          <div className="postFull__title">
            <h2 className="title sectionTitle">{data.title}</h2>
          </div>
          <div className="postFull__box">
            <div className="postFull__image">
              <img className="lazy" src={""} data-src={""} alt={""} />
            </div>
            <div className="postFull__text">{data.text}</div>
          </div>
          <a className="postFull__btn btn" href="#" title="Ir ao inicio">Ao inicio</a>
        </div>
      </div>
    </main>
  )
}

export default PostMain
