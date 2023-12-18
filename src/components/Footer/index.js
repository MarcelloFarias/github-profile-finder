import './style.scss';
import { FaLinkedin, FaGithub } from "react-icons/fa";

const Footer = () => {
    return (
        <div className='footer'>
            <div className='text-field'>
                <p>{`<Desevolvido com 💚 por Marcello Farias />`}</p>
            </div>
            <div className='medias-field'>
                <a href='https://github.com/MarcelloFarias'><FaGithub /></a>
                <a href='https://www.linkedin.com/in/marcello-rocha-381572231/'><FaLinkedin/></a>
            </div>
        </div>
    );
}

export default Footer;