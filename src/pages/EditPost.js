import Header from '../components/Header/Header'
import NotAuth from '../components/NotAuth/NotAuth'
import NewPost from '../components/NewPost/NewPost'
import { useSelector } from 'react-redux'
import { selectIsAuth } from '../features/authSlice'

const EditPost = () => {

  const auth = useSelector(selectIsAuth)

  if(!auth) {
    return (
      <>
        <NotAuth/>
      </>
    )
  }

  return (
    <>
      <Header/>
      <NewPost/>
    </>
  )
}

export default EditPost
