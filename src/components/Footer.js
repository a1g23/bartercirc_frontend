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
        <div>
            <Link to="https://www.facebook.com">
                <img src={facebookIcon}/>
            </Link>
            <Link to="https://www.instagram.com">
                <img src={instagramIcon}/>
            </Link>
            <Link to="https://www.linkedin.com">
                <img src={linkedinIcon}/>
            </Link>
            <Link to="https://www.twitter.com">
                <img src={twitterIcon}/>
            </Link>
            <div>
                <div>
                    <Link to="https://github.com/a1g23">
                        Alex
                        <img src={githubIcon}/>
                    </Link>
                </div>
                <div>
                    <Link to="https://github.com/rohansinha01">
                        Rohan
                        <img src={githubIcon}/>
                    </Link>
                </div>
                <div>
                    <Link to="https://github.com/nmurr13">
                        Nick
                        <img src={githubIcon}/>
                    </Link>
                </div>
                <div>
                    <Link to="https://github.com/lldeejeell102">
                        Dan
                        <img src={githubIcon}/>
                    </Link>
                </div>
            </div>
        </div>
    )
}


export default Footer