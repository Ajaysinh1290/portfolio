import { useEffect, useState } from "react";
import SectionHeading from "../custom_components/SectionHeading";
import "./WorkExperience.css";

function WorkExperienceCard({
    companyName,
    duration,
    role,
    description,
    isFirst,
    isMobileLayout
}) {
    console.log(isMobileLayout);
    return (

        <div id="experience">
            {!isMobileLayout &&
                <div id="leftsection">
                    <div id="companyname">{companyName}</div>
                    <div id="duration">{duration}</div>
                </div>}
            <div id="expdividersection">
                <div id={isFirst ? "expdividercircle" : null}></div>
                <div id="expdividerline"></div>
                <div id="expdividercircle"></div>
            </div>
            <div id="rightsection">
                {isMobileLayout &&
                    <div id="leftsection">
                        <div id="companyname">{companyName}</div>
                        <div id="duration">{duration}</div>
                    </div>}
                <div id="role">{role}</div>
                <p id="description">{description}</p>
            </div>
        </div>
    );
}
function WorkExperience() {
    let [isMobileLayout, setMobileLayout] = useState(false);
    useEffect(() => {
        let checkSize = () => {
            setMobileLayout(window.innerWidth < 750);
        }
        window.addEventListener("resize", checkSize);
        checkSize();

        return () => {
            window.removeEventListener("resize", checkSize);;
        }
    }, [])

    return (
        <div id="workexperiencesection">
            <SectionHeading title={"Work Experience"} />
            <div id="experiences">
                <WorkExperienceCard
                    companyName={"IBM"}
                    duration={"July 2022 - July 2023"}
                    role={"Software Engineer Intern"}
                    isFirst={true}
                    isMobileLayout={isMobileLayout}
                    description={
                        <span>
                            Remediated vulnerabilities from 60+ micro-services built on various
                            tech stacks and ensured compliance with security standards and
                            reduced risk.
                            <br /> <br />
                            Collaborated with development teams to make necessary changes and
                            improvements.
                            <br /> <br />
                            Conducted Quality assurance (QA) testing on micro‑services to
                            identify and address issues before release.
                        </span>
                    }
                />
                <WorkExperienceCard
                    companyName={"Brainy-Beam Technologies"}
                    duration={"May 2022 - June 2023"}
                    role={"Android Developer Intern"}
                    isMobileLayout={isMobileLayout}
                    description={
                        <span>
                            Developed skills in UI design using XML and Android Studio
                            <br /> <br />
                            created visually appealing and intuitive mobile interfaces
                        </span>
                    }
                />
                <WorkExperienceCard
                    companyName={"Inﬁkey Technologies"}
                    duration={"Jan 2022 - May 2022"}
                    role={"Junior Flutter Developer"}
                    isMobileLayout={isMobileLayout}
                    description={
                        <span>
                            Developed multiple Flutter apps, including Lovocab and Bhavsar
                            Tourism, from building, testing, and releasing to the Google Play
                            Store
                            <br /> <br />
                            Worked on more than 10 Flutter apps, integrating APIs and payment
                            gateways to provide enhanced functionality and improved user
                            experience
                        </span>
                    }
                />
                <WorkExperienceCard
                    companyName={"Inﬁkey Technologies"}
                    duration={"Dec 2020 - May 2021"}
                    role={"Flutter Developer Intern"}
                    isMobileLayout={isMobileLayout}
                    description={
                        <span>
                            Developed skills in creating visually appealing and functional user interfaces
                            <br /> <br />
                            Gained experience in building RESTful APIs and Integrated Firebase into mobile applications
                        </span>
                    }
                />
            </div>
        </div>
    );
}

export default WorkExperience;
