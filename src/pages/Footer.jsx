import cIcon from '../assets/letter-c.png';
import github from '../assets/github.png';
import facebook from '../assets/facebook.png';
import linkedin from '../assets/linkedin.png';

const Footer = () => {
    return (
        <footer>
            <div>
                <span><img src={cIcon} width={20} />LEMENT</span>
                <p>Let’s build something amazing together</p>
                <ul>
                    <li><a href="#"><img src={github} alt="github" width={20}/></a></li>
                    <li><a href="#"><img src={facebook} alt="facebook" width={20}/></a></li>
                    <li><a href="#"><img src={linkedin} alt="linkedin" width={20}/></a></li>
                </ul>
                <hr width={50}/>
                <p>&copy;{new Date().getFullYear()} Clement Mathole</p>
            </div>
        </footer>
    );
}

export default Footer;