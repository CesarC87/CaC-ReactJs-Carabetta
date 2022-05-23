import React from 'react'
import "../Footer/Footer.css"
import { Link } from 'react-router-dom'
import { FaTwitter, FaInstagram, FaFacebook } from 'react-icons/fa'

const Footer = () => {
    return (
        <footer className="footer">
            <div className="footer__redes">
            <Link to="/">
                <FaFacebook/>
            </Link>
            <Link to="/">
                <FaInstagram/>
            </Link>
            <Link to="/">
                <FaTwitter/>
            </Link>
            </div>
            <div className="footerbottom__der">
                &copy; ToTheWorld | By César Carabetta
            </div>
        </footer>
    )
}

export default Footer

{/* <div class="footerbottom">
      <div class="footerbottom__izq">
        <a href="https://www.facebook.com/" target="_blank"><i class="fab fa-facebook-f"></i></a>
        <a href="https://www.Instagram.com/" target="_blank"><i class="fab fa-instagram"></i></a>
        <a href="https://www.twitter.com/" target="_blank"><i class="fab fa-twitter"></i></a>
        <a href="https://www.gmail.com/" target="_blank"><i class="far fa-envelope"></i></a>
      </div>
      <div class="footerbottom__der">
        &copy; MixitUp | By César Carabetta
      </div>
</div> */}