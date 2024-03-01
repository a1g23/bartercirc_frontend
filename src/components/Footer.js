//Social links
//Created By - Github
import facebookIcon from "./Facebook.jpg"
import githubIcon from "./Github.jpg"
import instagramIcon from "./Instagram.jpg"
import linkedinIcon from "./LinkedIn.jpg"
import twitterIcon from "./Twitter(X).jpg"
import { Link } from 'react-router-dom'

const Footer = () => {
    return(
        <div className="footer">
            <div className="footer-social-links">
                <Link to="https://www.facebook.com" target="_blank">
                    <img src={facebookIcon} alt="facebook-icon"/>
                </Link>
                <Link to="https://www.instagram.com" target="_blank">
                    <img src={instagramIcon} alt="instagram-icon"/>
                </Link>
                <Link to="https://www.linkedin.com" target="_blank">
                    <img src={linkedinIcon} alt="linkedin-icon"/>
                </Link>
                <Link to="https://www.twitter.com" target="_blank">
                    <img src={twitterIcon} alt="twitter-icon"/>
                </Link>
            </div>
            <div className="footer-github-container">
                <div className="footer-github">
                    Alex
                    <Link to="https://github.com/a1g23" target="_blank">
                        <img src={githubIcon} alt="github-icon"/>
                    </Link>
                </div>
                <div className="footer-github">
                    Rohan
                    <Link to="https://github.com/rohansinha01" target="_blank">
                        <img src={githubIcon} alt="github-icon"/>
                    </Link>
                </div>
                <div className="footer-github">
                    Nick
                    <Link to="https://github.com/nmurr13" target="_blank">
                        <img src={githubIcon} alt="github-icon"/>
                    </Link>
                </div>
                <div className="footer-github">
                    Dan
                    <Link to="https://github.com/lldeejeell102" target="_blank">
                        <img src={githubIcon} alt="github-icon"/>
                    </Link>
                </div>
            </div>
        </div>
    )
}


export default Footer