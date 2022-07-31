import "./profile-card.styles.css"

const profileImg = "https://pbs.twimg.com/profile_images/1488263165548847112/3tog1GwP_400x400.jpg"

const ProfileCard = () => {
    return (
        <section className = "top-container profile">
            <h1>Im Anthony</h1>
            <h2>A <span className = "web">Full-Stack</span> Blockchain Developer</h2>
            <img className="profile-img" src={profileImg} alt="" />
            <h2>Hello and Welcome!</h2>
            <p>My name is Anthony! It is great to meet you! A little about me, I am a US based full-stack Blockchain Developer</p>
    </section>
        
    )
}

export default ProfileCard;