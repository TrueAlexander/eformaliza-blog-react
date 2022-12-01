import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import Post from './pages/Post'
import Thanks from './pages/Thanks'
import CreatePost from './pages/CreatePost'
import EditPost from './pages/EditPost'
import { useDispatch, useSelector } from 'react-redux' 
import { useEffect } from 'react'
import { fetchAuthMe, selectIsAuth } from './features/authSlice'

const App = () => {
  const dispatch = useDispatch()
  const isAuth = useSelector(selectIsAuth)

  useEffect(() => {
    dispatch(fetchAuthMe())
  }, [])

  return (
    <div className="app">
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Home/>} />
          <Route path='/:title' element={<Post/>} />
          <Route path='/thanks' element={<Thanks/>} />
          <Route path='/create-post' element={<CreatePost/>} />
          <Route path='/:title/edit-post' element={<EditPost/>} />
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App
