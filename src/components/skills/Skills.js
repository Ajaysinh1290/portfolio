import SectionHeading from "../custom_components/section_heading/SectionHeading";
import './Skills.css';


function IconCard({ title, icon, iconDir }) {
    return (
        <div id="iconcard" className={title}>
            <img width="30" height="30" src={icon} alt={title} />
            <span>{title}</span>
        </div>
    );
}
function Skills() {
    return (
        <div id="skillssection">
            <SectionHeading title={'SKILLS'} />
            <div id="skillsicons">
                <IconCard title={'flutter'} icon={'https://img.icons8.com/color/60/flutter.png'} />
                <IconCard title={'dart'} icon={'https://img.icons8.com/color/60/dart.png'} />
                <IconCard title={'java'} icon={'https://img.icons8.com/color/60/java-coffee-cup-logo--v1.png'} />
                <IconCard title={'springBoot'} icon={'https://img.icons8.com/color/60/spring-logo.png'} />
                <IconCard title={'python'} icon={'https://img.icons8.com/color/60/python.png'} />
                <IconCard title={'c/c++'} icon={'https://img.icons8.com/color/60/c-plus-plus-logo.png'} />
                <IconCard title={'javaScript'} icon={'https://img.icons8.com/color/60/javascript.png'} />
                <IconCard title={'html'} icon={'https://img.icons8.com/color/60/html-5--v1.png'} />
                <IconCard title={'css'} icon={'https://img.icons8.com/color/60/css3.png'} />

                <IconCard title={'reactJs'} icon={'https://img.icons8.com/color/30/react-native.png'} />
                <IconCard title={'nodeJs'} icon={'https://img.icons8.com/fluency/48/node-js.png'} />
                <IconCard title={'mySQL'} icon={'https://img.icons8.com/color/60/mysql.png'} />
                <IconCard title={'firebase'} icon={'https://img.icons8.com/color/30/firebase.png'} />
                <IconCard title={'jira'} icon={'https://img.icons8.com/color/60/jira.png'} />
                <IconCard title={'docker'} icon={'https://img.icons8.com/color/60/docker.png'} />
                <IconCard title={'git'} icon={'https://img.icons8.com/color/60/git.png'} />
                <IconCard title={'github'} icon={'https://img.icons8.com/glyph-neue/30/github.png'} />
                <IconCard title={'postman'} icon={'https://img.icons8.com/external-tal-revivo-color-tal-revivo/60/external-postman-is-the-only-complete-api-development-environment-logo-color-tal-revivo.png'} />

                <IconCard title={'swagger'} icon={'https://qavalidation.com/wp-content/uploads/2018/12/logo-swagger.png'} />
                <IconCard title={'jenkins'} icon={'https://img.icons8.com/color/36/jenkins.png'} />
                <IconCard title={'kafka'} icon={'https://upload.wikimedia.org/wikipedia/commons/thumb/0/0a/Apache_kafka-icon.svg/1200px-Apache_kafka-icon.svg.png'} />
                <IconCard title={'kubernates'} icon={'https://img.icons8.com/color/60/kubernetes.png'} />
                <IconCard title={'mend'} icon={'https://www.securityweek.com/sites/default/files/logos/Mend_logo.png'} />
                <IconCard title={'solidity'} icon={'https://img.icons8.com/ios-filled/60/solidity.png'} />
                <IconCard title={'remix'} icon={'https://repository-images.githubusercontent.com/59065830/b62be480-45d2-11ea-9989-803db0f9c44d'} />
                <IconCard title={'intellij'} icon={'https://img.icons8.com/color/60/intellij-idea.png'} />
                <IconCard  title={'vsCode'} icon={'https://img.icons8.com/color/48/visual-studio-code-2019.png'} />

            </div>
        </div>
    );
}

export default Skills;

