import SectionHeading from "../custom_components/section_heading/SectionHeading";
import NineTeenFiveImage from "../../assets/images/nineteenfive.webp";
import SanskarPgImage from "../../assets/images/sanskar-pg-app.webp";
import ListlyImage from "../../assets/images/listly.webp";
import CollegeManagerImage from "../../assets/images/college-manager.webp";
import ArrowUpRightIcon from "../../assets/icons/arrow-up-right.svg";
import ArrowRightIcon from "../../assets/icons/arrow-right.svg";
import './Projects.css';



function ProjectCard({ image, title, subtitle, description, isReverse, projectLink }) {

  return (
    <div id="project" style={{ flexDirection: !isReverse ? 'row' : 'row-reverse' }} >
      <div id="projectimage-container">
        <img id="projectimage" className={isReverse ? 'right' : 'left'}  src={image} alt={title} />
      </div>
      <div id="descriptionsection">
        <div id="projecttitle">{title}</div>
        <div id="projectsubTitle">{subtitle}</div>
        <div id="projectdescription">{description}</div>
        <a id="projectlink" href={projectLink} target="_blank">
          github
          <img src={ArrowUpRightIcon} alt="GitHub" />
        </a>
      </div>
    </div>
  );
}


function Projects() {
  return (
    <div id="projectssection">
      <SectionHeading title={'Projects'} />
      <ProjectCard
        image={NineTeenFiveImage}
        title='Ninteenfive'
        subtitle={'Ecommerce app with admin panel'}
        description={'Developed an ecommerce app with detailed product descriptions, shopping cart, and secure in-app payments, along with an admin panel for product and customer management with real-time chat with customers.'}
        isReverse={false}
        projectLink={'https://github.com/Ajaysinh1290/nineteenfive-ecommerce-app'}
      />
      <ProjectCard
        image={SanskarPgImage}
        title='Sanskar PG App'
        subtitle={'PG management app with admin app'}
        description={'This app simpliﬁes PG management for owners and residents with features like room management, resident proﬁles, rent tracking, chat, and event planning, all in one easy-to-use platform'}
        isReverse={true}
        projectLink={'https://github.com/Ajaysinh1290/sanskar-pg-app'}
      />
      <ProjectCard
        image={ListlyImage}
        title='Listly'
        subtitle={'Task, orders and notes management'}
        description={'Listly provides you with ability to save and share your personal Shopping lists, To-do list, Notes and Orders. This app helps in organizing your lists in a manner to help you get your shopping done quickly.'}
        isReverse={false}
        projectLink={'https://github.com/Ajaysinh1290/Listly'}
      />
      <ProjectCard
        image={CollegeManagerImage}
        title='College Manager'
        subtitle={'College management system'}
        description={'Developed a college management app with course and subject management, student/faculty attendance and marks management, roll number generator, and advanced features like real-time chatting, notiﬁcation, and result declaration'}
        isReverse={true}
        projectLink={'https://github.com/Ajaysinh1290/College-Management-System-In-Java'}
      />
      <a id="viewmorebutton" href="https://github.com/Ajaysinh1290?tab=repositories" target="_blank">viewMore<img src={ArrowRightIcon}></img></a>
    </div>
  );
}

export default Projects;