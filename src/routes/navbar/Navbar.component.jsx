import "./navbar.styles.css"
import Logo from "../../components/logo/Logo.component";
import { Fragment } from "react";
import { Link, Outlet } from "react-router-dom";

const Navbar = () => {
   return( 
    <Fragment>
   <div className="nav-container" >
        <section className="logo-container" >
            <Logo className='logo' />
        </section>
            <nav className="nav" >
                <ul className="nav-list" >
                    <Link className="nav-links" to='/' >Home</Link>
                    <Link className="nav-links" to='/hire-me' >Hire Me</Link>
                    <li className="nav-links "><a><button className="mint-nft" >Mint a Crypted Coder NFT</button></a></li>
                </ul>

            </nav>

     </div>
     <Outlet />
     </Fragment>)
}

export default Navbar;