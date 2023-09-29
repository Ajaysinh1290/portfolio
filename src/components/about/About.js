import SectionHeading from '../custom_components/SectionHeading';
import './About.css';

function About() {
    return (
        <div id='aboutsection'>
            <SectionHeading title={'About'} />
            <p className="about-text">
                Hey👋,! I'm Ajaysinh Rathod, a passionate and innovative software engineer
                hailing from India. I've been on an exciting journey
                of crafting digital experiences and solving complex challenges.
                What drives me is innovation, and I'm always eager to explore new tech. Whether I'm crafting user-friendly apps, handling behind-the-scenes tech stuff, or diving into the nitty-gritty of how things work.
            </p>
        </div>
    );
}

export default About;
