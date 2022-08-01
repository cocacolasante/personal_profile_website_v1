import Social from "../social/Social.component";
import { Link } from "react-router-dom";



const ContactMe = () => {
    return (
        <div className="contact-me">
          <h2>Get In Touch</h2>
          <h4>Need a Website, Ecommerce store or Web3 Dapp?</h4>
          <p className="contact-me-website" >I can design and build fully functioning websites, Smart Contracts, or Dapps!! Send an email below!</p>
          <Social />
          <Link className="nav-links contact-me-link" to='/hire-me' >Contact Me</Link>
          
        </div>
    )
}

export default ContactMe;