
let date = new Date()
let year = date.getFullYear()


const Footer = () => {
    return (
        <div className="bottom-container">
        <a className="footer-link" href="https://www.linkedin.com/">LinkedIn</a>
        <a className="footer-link" href="https://twitter.com/">Twitter</a>
        <a className="footer-link" href="">GitHub</a>
        <p id="copyright" >© Anthony Colasante {year}</p>
      </div>)
}

export default Footer