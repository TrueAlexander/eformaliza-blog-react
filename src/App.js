import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import Post from './pages/Post'
import CreatePost from './pages/CreatePost'
import EditPost from './pages/EditPost'

const App = () => {
  return (
    <div className="app">
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Home/>} />
          <Route path='/post' element={<Post/>} />
          <Route path='/create-post' element={<CreatePost/>} />
          <Route path='/edit-post/:id' element={<EditPost/>} />
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App
