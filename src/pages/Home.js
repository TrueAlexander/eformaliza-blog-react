import Header from "../components/Header/Header"
import Footer from "../components/Footer/Footer"
import WhatsappButton from "../components/WhatsappButton/WhatsappButton"
import BlogMain from "../components/BlogMain/BlogMain"
import AuthModal from "../components/AuthModal/AuthModal"
import { useState } from "react"

const Home = () => {

  const [showModal, setShowModal] = useState(false)

  return (
    <div style={showModal ? {position: "fixed", width: "100vw"} :  {position: "static"}}>
      <Header setShowModal={setShowModal}/>
      <BlogMain/>
      <Footer/>
      {!showModal && <WhatsappButton/>}
      {showModal && <AuthModal showModal={showModal} setShowModal={setShowModal}/>}
    </div>
  )
}

export default Home
