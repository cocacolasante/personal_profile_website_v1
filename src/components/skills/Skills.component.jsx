

const Skills = () => {
    return (
        <div className="skills">
          <h2 className="skills-header" >My Skills</h2>
          <div className="skill-row">
            <img className="full-stack" src="https://binaryinformatics.com/wp-content/uploads/2019/04/Full-Stack-Development-Services-1.jpg" alt="" />
            <h3>Full Stack Devloper</h3>
            <p className ="code-skill-description">I am a full stack developer and can help make and build your dream web applications or ecommerce store</p>
          </div>
          <div className="skill-row">
            <img className="security" src="https://www.codemotion.com/magazine/wp-content/uploads/2020/02/blockchain-3019120_1280-896x504.png" alt="" />
            <h3>Blockchain/Web3.0 Developer</h3>
            <p className = "security-description">While I can build standard full-stack applications, I focus in on blockchain based decentralized applications, known as Dapps. Dapps are powered by smart contracts, which are just programs running on the blockchain. I can help build your crypto token, defi platform or Dapp today!</p>
          </div>
        </div>
    )
}

export default Skills;