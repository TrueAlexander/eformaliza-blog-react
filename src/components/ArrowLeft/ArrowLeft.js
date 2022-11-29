import ArrowLeftIcon from "./../../images/icons/arrow-left.png"
import "animate.css"
import { Link } from "react-router-dom"
import "./ArrowLeft.scss"

const ArrowLeft = () => {
  return (
    <div className="arrowLeft animate__delay-10s animate__animated animate__pulse animate__slow animate__infinite">
      <Link to="/">
        <img src={ArrowLeftIcon} alt="Voltar" title="Voltar" />
      </Link> 
    </div>
  )
}

export default ArrowLeft
