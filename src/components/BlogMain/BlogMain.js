import './BlogMain.scss'
import { useState, useEffect } from 'react'
import { fetchPosts, getPosts } from '../../features/postsSlice'
import { useDispatch, useSelector } from 'react-redux'
import { selectIsAuth } from '../../features/authSlice'
import { Link } from 'react-router-dom'

const BlogMain = () => {

  const dispatch = useDispatch()
  const { posts } = useSelector(state => state.posts)
  const isPostsLoading = posts.status === 'loading'

  useEffect(() => {
    dispatch(fetchPosts())
  }, [])


  //check isAuth
  // const checkAuth = useSelector(isAuth)
  // const auth = checkAuth.payload.auth.auth
  const auth = useSelector(selectIsAuth)

  //not to forget add skeleton later
  // const [isLoading, setLoading] = useState(true)
  // const [posts, setPosts] = useState([])


 
// const data = useSelector((state) => state.posts.posts)


//  useEffect(() => {
//   dispatch(getPosts())
//   setPosts(data)
//  }, []) 
 
  // console.log(posts)

 
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

    const allTitles = posts.items
    let titles = allTitles
    if (allTitles.length > 5) {
      titles = allTitles.slice(0, 5)
    }
   
    return isPostsLoading ? <h3 className="loading">Carregando...</h3> : titles.map(post => {
      return (
        <li key={post._id}>
          <Link 
            to={`/${post.title}`} 
            state={{ id: post._id }} 
            title="Clique para abrir">
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
   
    return isPostsLoading ? <h3 className="loading">Carregando...</h3> : (posts.items).map(post => {

      return (
        <div className="main__item post" key={post._id}>
          <div
            className="post__image"
            title={post.title}
            style={{ backgroundImage: "" }}
          >
            <img src={`http://localhost:4444${post.imageUrl}`} alt={post.title} />
          </div>
          <div className="post__content">
            <div className="post__row">
              <div className="post__date">{date(post.createdAt)}</div>
              <div className="post__author">{post.authorUsername}</div>
            </div>
            <h3 className="post__subtitle">{post.title}</h3>
            <div className="post__text">{post.text}</div>
            <button
              id={post.id}
              title="Leia post completo"
              className="post__button btn"
            >
              <Link to={`/${post.title}`} state={{ id: post._id }} >
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
              <Link to="/create-post">
                Criar post
              </Link>
            </button>}
            {loadPosts()}
          </div>
        </div>
      </div>
    </main>
  )
}

export default BlogMain
