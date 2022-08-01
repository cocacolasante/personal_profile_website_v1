import './projects.styles.css'

import logo from "../../imgs/AC.png"
import logo2 from '../../imgs/AC blockchain dev logo with color.png'

const Projects = () => {
    return (
        <section className="projects">
            <h2>My Projects</h2>

            <div className="projects__cards">

                <div className="projects__card">
                    <h3>Crytped CrowdFunding DAO V1</h3>
                    <img className='project-img' src={logo2} alt="Crytped CrowdFunding DAO V1" />
                    <p>First version of the Crypted CrowdFunding DAO, which eventuall led into Crypted Coders NFT DAO Project
                    </p>

                    <a href="" target="_blank" className="button">Site</a>
                    <a href="https://github.com/cocacolasante/Crypted_Crowdfunding_Dao" target="_blank" className="button">Code</a>
                </div>

                <div className="projects__card">
                    <h3>Crypto Currency Token</h3>
                    <img className='project-img' src={logo} alt="Crypto Currency Token" />
                    <p>This was the first version of the Crypted Coders smart contracts and tokens
                    </p>

                    <a href="https://github.com/cocacolasante/cryptedtoken_v1" target="_blank" className="button">Code</a>
                </div>

                <div className="projects__card">
                    <h3>Ecommerce Site</h3>
                    <img className='project-img' src={logo2} alt="Ecommerce Site" />
                    <p>Ecommerce store built in React with Redux, FireBase back end.
                    </p>

                    <a href="" target="_blank" className="button">Site</a>
                    <a href="https://github.com/cocacolasante/crwn-clothing-v2" target="_blank" className="button">Code</a>
                </div>
            </div>
        </section>
    );
}

export default Projects;