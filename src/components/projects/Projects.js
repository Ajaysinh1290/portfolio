import SectionHeading from "../custom_components/SectionHeading";
// import NineTeenFiveImage from "../../assets/nineteenfive_.png";
import NineTeenFiveImage from "../../assets/nineteenfive.webp";
// import SanskarPgImage from "../../assets/sanskar-pg-app_.png";
import SanskarPgImage from "../../assets/sanskar-pg-app.webp";
// import ListlyImage from "../../assets/listly_.png";
import ListlyImage from "../../assets/listly.webp";
// import CollegeManagerImage from "../../assets/college-manager_.png";
import CollegeManagerImage from "../../assets/college-manager.webp";
import ArrowUpRightIcon from "../../assets/arrow_up_right_32x.png";
import ArrowRightIcon from "../../assets/arrow_right_32x.png";
import './Projects.css';
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger"; // Import ScrollTrigger
import { useEffect, useRef } from "react";


gsap.registerPlugin(ScrollTrigger); // Register ScrollTrigger

function ProjectCard({ image, title, subtitle, description, isReverse, projectLink }) {
  // Create a ref for the card container
  const cardRef = useRef(null);

  useEffect(() => {
    const card = cardRef.current;

    gsap.set(card, { rotationY: 0, z: 0, });

    // Define a GSAP animation with a 3D translation effect
    const cardAnimation = gsap.to(card, {
      rotationY: 0, // Rotate in the Y-axis
      z: 90,
      duration: 1,
      paused: false,
    });

    // Create a ScrollTrigger to trigger the animation when the card is in the viewport
    ScrollTrigger.create({
      trigger: card,
      start: "top center", // Adjust the starting point as needed
      end: "top center", // Adjust the ending point as needed
      animation: cardAnimation,
      toggleActions: "play none none none", // Play the animation when the card enters the viewport
    });
  }, []);

  return (
    <div id="project" style={{ flexDirection: !isReverse ? 'row' : 'row-reverse' }} >
      <div id="projectimage-container"  ref={cardRef}>
        <img id="projectimage" className={isReverse ? 'right' : 'left'}  LazyLoadImage src={image} alt={title} />
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