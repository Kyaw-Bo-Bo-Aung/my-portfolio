import {Github, Linkedin, Gmail} from './../icons/icons'

function Footer() {
    return (
        <footer>
            <div>
                Developed by <span id="footer-name"> Kyaw Bo Bo Aung</span>
            </div>
            <div>
                <a href="https://github.com/Kyaw-Bo-Bo-Aung"><img alt='' className="footer-social-link" src={Github} /></a> 
                <a href="https://www.linkedin.com/in/kyaw-bo-bo-aung"><img alt='' className="footer-social-link" src={Linkedin} /></a> 
                <a href='mailto:dev.kyawboboaung@gmail.com'><img alt='' className="footer-social-link" src={Gmail} /> </a>
            </div>
        </footer>
    )
}

export default Footer