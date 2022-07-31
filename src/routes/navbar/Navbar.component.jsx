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
                    <li className="nav-links" ><a href="/" >Home</a></li>
                    <li className="nav-links"><a href="" >Hire Me</a></li>
                    <li className="nav-links "><a><button className="mint-nft" >Mint a Crypted Coder NFT</button></a></li>
                </ul>

            </nav>
     </div>)
}

export default Navbar;