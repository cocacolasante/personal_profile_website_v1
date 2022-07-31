import { Fragment } from "react"

let date = new Date()
let year = date.getFullYear()


const Footer = () => {
    return (
      <Fragment>
        <div className="bottom-container">
        <nav className="nav" >
                <ul className="nav-list" >
                  <li className="nav-links" ><a href="/" >Home</a></li>
                    <li className="nav-links"><a href="" >Hire Me</a></li>
                    <li className="nav-links "><button className="mint-nft" >Mint a Crypted Coder NFT</button></li>
                 </ul>
            </nav>
          
      </div>
      <p id="copyright" >© Anthony Colasante {year}</p>
      </Fragment>)
}

export default Footer