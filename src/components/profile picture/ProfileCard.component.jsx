import "./profile-card.styles.css"

const profileImg = "https://pbs.twimg.com/profile_images/1488263165548847112/3tog1GwP_400x400.jpg"

const ProfileCard = () => {
    return (
        <section className = "top-container profile">
            <h1>Im Anthony</h1>
            <h2>A <span className = "web">Full-Stack</span> Blockchain Developer</h2>
            <h3>Building The New Internet - One Project At A Time</h3>
            <img className="profile-img" src={profileImg} alt="" />
            <h2>Hello and Welcome!</h2>
            <p>My name is Anthony! I am a US based full-stack Blockchain Developer. I offer a variety of development options ranging from large business scale solutions to helping the aspiring entrepeneur.</p>
            <p>I focus primarily on Blockchain Smart Contracts, Dapps, DeFi, Web3.0 and Ecommerce, but message me for a consultation to see if you project is a good fit for my skill set!</p>
            <p>Join The Crypted Coders DAO by purchasing an NFT and participate in a Decentralized community of blockchain enthusiests, building and working on projects together</p>
            <p>Skill set does not matter, we do not need just blockchain devs, but we need everone from front-end, to back-end dev, to sales, marketing, business management, community outreach, and more</p>
            <br />
            <h4>Ask Me How To Get A Discount on Development Services!</h4>

    </section>
        
    )
}

export default ProfileCard;