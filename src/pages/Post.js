import Footer from "../components/Footer/Footer"
import Header from "../components/Header/Header"
import PostMain from "../components/PostMain/PostMain"
import ArrowLeft from "../components/ArrowLeft/ArrowLeft"
import { useState } from "react"
import AuthModal from "../components/AuthModal/AuthModal"
import WhatsappButton from "../components/WhatsappButton/WhatsappButton"

const Post = () => {

  const [showModal, setShowModal] = useState(false)

  return (
    <div style={showModal ? {position: "fixed", width: "100vw"} :  {position: "static"}}>
      <Header setShowModal={setShowModal} />
      <PostMain/>
      <Footer/>
      <ArrowLeft/>
      {!showModal && <WhatsappButton/>}
      {showModal && <AuthModal showModal={showModal} setShowModal={setShowModal}/>}
    </div>
  )
}

export default Post
