import './Footer.scss'
import WhatsappIcon from './../../images/icons/whatsapp.svg'
import EmailIcon from './../../images/icons/mail.svg'
import InstagramIcon from './../../images/icons/instagram.svg'
import DoveImg from './../../images/dove.jpg'

const Footer = () => {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer__sectionTitle">
          <h2 className="sectionTitle">Contatos</h2>
        </div>
        <div className="footer__row">
          <a href="https://wa.me/5521967261434" className="footer__item">
            <img src={WhatsappIcon} alt="whatsapp" />
          </a>
          <div className="footer__item">
            <img src={EmailIcon} alt="Email" />
          </div>
          <a href="https://www.instagram.com/eformaliza/" className="footer__item">
            <img src={InstagramIcon} alt="Instagram" />
          </a>
        </div>
        <div className="footer__box">
          <div className="footer__unit">
            <img src={DoveImg} alt="Peace" />
          </div>
          <div className="footer__unit">
            <div className="footer__copyright">
              <p>Criado por <a href="https://eformaliza.com/" title="clique para saber mais" >eformaliza.com
                </a></p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer
