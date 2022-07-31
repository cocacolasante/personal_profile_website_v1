import './App.css';
import { Fragment } from 'react';
import Navbar from './routes/navbar/Navbar.component';
import ProfileCard from './components/profile picture/ProfileCard.component';
import Skills from './components/skills/Skills.component';
import ContactMe from './components/contact-me/ContactMe';
import Footer from './components/footer/Footer';

function App() {
  return (
    <Fragment>
    <Navbar />
    <ProfileCard />
    
    <div className="middle-container">
       
        <hr />
        <Skills />
        <hr />
        <ContactMe />
      </div>
      <Footer />
      
      
      
    
    
</Fragment>
  );
}

export default App;
