import './App.css';
import { Fragment } from 'react';
import Navbar from './routes/navbar/Navbar.component';
import ProfileCard from './profile picture/ProfileCard.component';

function App() {
  return (
    <Fragment>
    <Navbar />

    <section className = "top-container">
        <h1>Im Anthony</h1>
        <h2>A <span className = "web">Full-Stack</span> Blockchain Developer</h2>
    </section>
    <div className="middle-container">
       <ProfileCard />
        <hr />
        <div className="skills">
          <h2>My Skills</h2>
          <div className="skill-row">
            <img className="full-stack" src="https://binaryinformatics.com/wp-content/uploads/2019/04/Full-Stack-Development-Services-1.jpg" alt="" />
            <h3>Full Stack Devloper</h3>
            <p className ="code-skill-description">Lorem ipsum dolor sit amet, quis in duis, iaculis id felis. Consectetuer vestibulum, nunc urna lectus, erat ligula. Hendrerit nam, lectus ante, ut lorem eros.</p>
          </div>
          <div className="skill-row">
            <img className="security" src="https://www.codemotion.com/magazine/wp-content/uploads/2020/02/blockchain-3019120_1280-896x504.png" alt="" />
            <h3>Blockchain</h3>
            <p className = "security-description">Lorem ipsum dolor sit amet, mauris sed consectetuer. Etiam et eu, bibendum interdum, lacus quis mauris. Curabitur wisi, quisque vel eu, rutrum nam.</p>
          </div>
        </div>
        <hr />
        <div className="contact-me">
          <h2>Get In Touch</h2>
          <h3>Need a Website, Ecommerce store or Web3 Dapp?</h3>
          <p>I can design and build a fully functioning website or Smart Contract Dapps!! Send an email below!</p>
          <a className="btn" href="mailto:colasante16@email.com">CONTACT ME</a>
        </div>
      </div>
      
      
      <div className="bottom-container">
        <a className="footer-link" href="https://www.linkedin.com/">LinkedIn</a>
        <a className="footer-link" href="https://twitter.com/">Twitter</a>
        <a className="footer-link" href="">GitHub</a>
        <p>© Anthony Colasante.</p>
      </div>
      
    
    
</Fragment>
  );
}

export default App;
