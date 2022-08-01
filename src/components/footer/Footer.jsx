import { Fragment } from "react"
import { Link } from "react-router-dom";

let date = new Date()
let year = date.getFullYear()


const Footer = () => {
    return (
      <Fragment>
        <div className="bottom-container">
        <nav className="nav" >
                <ul className="nav-list" >
                    <Link className="nav-links" to='/' >Home</Link>
                    <Link className="nav-links" to='/hire-me' >Hire Me</Link>
                    <li className="nav-links "><a><button className="mint-nft" >Mint a Crypted Coder NFT</button></a></li>
               </ul>
            </nav>
          
      </div>
      <p id="copyright" >© Anthony Colasante {year}</p>
      </Fragment>)
}

export default Footer