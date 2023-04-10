import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import Post from './pages/Post'
import Thanks from './pages/Thanks'
import EditPost from './pages/EditPost'
import AccessRecover from './pages/AccessRecover'
import { useDispatch, useSelector } from 'react-redux' 
import { useEffect } from 'react'
import { fetchAuthMe, selectIsAuth } from './features/authSlice'
import NewPassword from './pages/NewPassword'

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
          <Route path='/create-post' element={<EditPost/>} />
          <Route path='/:title/edit-post' element={<EditPost/>} />
          <Route path='/access-recover' element={<AccessRecover/>} />
          <Route path='/new-password' element={<NewPassword/>} />
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App
