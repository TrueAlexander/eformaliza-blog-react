import './BlogMain.scss'
import { useState } from 'react'
import { fetchPosts, deletePostById } from '../../features/postsSlice'
import { useDispatch } from 'react-redux'

const BlogMain = () => {
  const dispatch = useDispatch()
  // dispatch(fetchPosts())
  // dispatch(deletePostById("63605e9e3a4a30f9ee74555b"))

  const [auth, setAuth] = useState(true)

  return (
    <main className="main">
      <div className="container">
        <div className="main__box">
          <h2 className="main__title sectionTitle">Nossos Posts</h2>
          {auth && <button className="main__btn btn">Novo post</button>}
          <div className="main__row">
            <div className="main__contents">
              <ul>
                <li>
                  <a href="">
                    <h3>Como iniciar um site pode afetar seu negócio?</h3>
                    <div>
                      <span>13/11/2022</span>
                      <span>Usuario1</span>  
                    </div>            
                  </a>
                </li>
                <li>
                  <a href="">
                    <h3>Como iniciar um site pode afetar seu negócio?</h3>
                    <div>
                      <span>13/11/2022</span>
                      <span>Usuario1</span>  
                    </div>            
                  </a>
                </li>
                <li>
                  <a href="">
                    <h3>Como iniciar um site pode afetar seu negócio?</h3>
                    <div>
                      <span>13/11/2022</span>
                      <span>Usuario1</span>  
                    </div>            
                  </a>
                </li>
                <li>
                  <a href="">
                    <h3>Como iniciar um site pode afetar seu negócio?</h3>
                    <div>
                      <span>13/11/2022</span>
                      <span>Usuario1</span>  
                    </div>            
                  </a>
                </li>
              </ul>
            </div>
            <div className="main__posts">
              Carregando...
            </div>
          </div>
        </div>
      </div> 
    </main>
  )
}

export default BlogMain
