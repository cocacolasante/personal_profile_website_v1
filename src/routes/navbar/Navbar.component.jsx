import "./navbar.styles.css"
import Logo from "../../components/logo/Logo.component";

const Navbar = () => {
   return( 
   <div className="nav-container" >
        <section className="logo-container" >
            <Logo className='logo' />
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