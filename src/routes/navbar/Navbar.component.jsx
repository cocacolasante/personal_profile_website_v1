import "./navbar.styles.css"

const Navbar = () => {
   return( 
   <div className="nav-container" >
        <section className="logo-container" >
            <h2 className="logo" >Logo</h2>
        </section>
            <nav className="nav" >
                <ul className="nav-list" >
                    <li className="nav-links" >Home</li>
                    <li className="nav-links">Hire Me</li>
                    <li className="nav-links "><button className="mint-nft" >Mint a Crypted Coder NFT</button></li>
                </ul>

            </nav>
     </div>)
}

export default Navbar;