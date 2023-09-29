import './Contact.css';
import facebook from '../../assets/social-media-icons/facebook.png';
import github from '../../assets/social-media-icons/github.png';
import instagram from '../../assets/social-media-icons/instagram.png';
import linkedin from '../../assets/social-media-icons/linkedin.png';
import twitter from '../../assets/social-media-icons/twitter.png';
import youtube from '../../assets/social-media-icons/youtube.png';
import SectionHeading from '../custom_components/SectionHeading';

function Contact() {
    return (
        <div id="contactsection">
            <div id='contacttitle'>“LET’S DISCUSS ON SOMETHING COOL TOGETHER“</div>
            <a id='sayHelloButton' href='mailto:ajaysinhrathod1290@gmail.com'>sayHello 👋</a>
            <div id='socialmedialinks'>
                <a href='https://www.facebook.com/ajaysinh.rathod.7927' target='_blank'><img src={facebook}/></a>
                <a href='https://github.com/Ajaysinh1290'target='_blank'><img src={github}/></a>
                <a href='https://www.instagram.com/ajaysinhhh/' target='_blank'><img src={instagram}/></a>
                <a href='https://www.linkedin.com/in/ajaysinh-rathod/' target='_blank'><img src={linkedin}/></a>
                <a href='https://twitter.com/Ajaysin34751867' target='_blank'><img src={twitter}/></a>
                <a href='https://www.youtube.com/@ajaysinhrathod' target='_blank'><img src={youtube}/></a>
            </div>
        </div>
    );
}

export default Contact;