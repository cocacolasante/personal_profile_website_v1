
const profileImg = "https://pbs.twimg.com/profile_images/1488263165548847112/3tog1GwP_400x400.jpg"

const ProfileCard = () => {
    return (
        <div className="profile">
        <img src={profileImg} alt="" />
        <h2>Hello and Welcome!</h2>
        <p>My name is Anthony! It is great to meet you! A little about me, I am a US based full-stack devloper as well as IT security expert</p>
      </div>
    )
}

export default ProfileCard;