import './BlogMain.scss'
import { useState, useEffect } from 'react'
import { fetchPosts } from '../../features/postsSlice'
import { useDispatch, useSelector } from 'react-redux'
import { isAuth } from '../../features/authSlice'
import { Link } from 'react-router-dom' 

const BlogMain = () => {
  //check isAuth
  const checkAuth = useSelector(isAuth)
  const auth = checkAuth.payload.auth.auth

  //not to forget add skeleton later
  const [isLoading, setLoading] = useState(true)

  const [posts, setPosts] = useState()


  const dispatch = useDispatch()
 
  //get all posts
  useEffect(() => {

    dispatch(fetchPosts())
    setPosts(useSelector(state => state.posts.posts.items))
    setLoading(false)
  
  }, [])
   
 
 
  console.log(posts)
  
  // dispatch(deletePostById("63605e9e3a4a30f9ee74555b"))

  const date = (currentdate) => {
    const day = new Date(currentdate)
    return day.toLocaleString('pt-BR', {
      month: '2-digit', 
      day: '2-digit', 
      year: 'numeric', 
    })
  }

  const loadTitles = () => {
    const titles = posts.slice(0, 5)
    return isLoading ? <h2 className="loading">Carregando...</h2> : titles.map(post => {
      return(
      <li key={post._id}>
        <Link to="/" title="Clique para abrir">
          <h3>{post.title}</h3>
          <div>
            <span>{date(post.createdAt)}</span>
            <span>{post.authorUsername}</span>  
          </div>            
        </Link>
      </li>
      ) 
    })     
  }

  const loadPosts = () => {
    return isLoading ? <h2 className="loading">Carregando...</h2> : posts.map(post => {
      return (
        <div className="main__item post" key={post._id}>
          <div 
            className="post__image"
            title={post.title}
            style={{backgroundImage: ""}}
          ></div>
          <div className="post__content">
            <div className="post__row">
              <div className="post__date">{date(post.createdAt)}</div>
              <div className="post__author">{post.authorUsername}</div>
            </div>
            <h3 className="post__subtitle">{post.title}</h3>
            <div className="post__text">{post.textShort}</div>
            <button 
              id={post.id}
              title="Leia post completo" 
              className="post__button btn"
            >
              <Link to="/post">
                Leia mais
              </Link>
            </button> 
          </div>
        </div>
      )
    }) 

  }

  return (
    <main className="main">
      <div className="container">
        <h2 className="main__title sectionTitle">Nossos Posts</h2>
        <div className="main__row">
          <div className="main__contents">
            <h2>Conheça nossos ultimos posts:</h2>
            <ul>
              {loadTitles()}
            </ul>
          </div>
          <div className="main__posts">
            {auth && <button
                        className="main__btn btn"
                        title="Escreve um post novo"
                      >
                        Criar post
                      </button>}
            {loadPosts()}
          </div>
        </div>
      </div> 
    </main>
  )
}

export default BlogMain
