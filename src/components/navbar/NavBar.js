import { useEffect, useState } from 'react';
import './NavBar.css';
import gsap from 'gsap';


function NavBar() {

    const scrollToElem= ({ elementId }) => {
        const element = document.getElementById(elementId);
        if (element !== null) {
            console.log(element.offsetTop);
            window.scrollTo({
                top:  elementId == 'root' ? 0 : element.offsetTop ,
                left: 0, behavior: "smooth"
            },);
            setMenuVisible(false);
        }
    };

    const closeMenuIfWideScreen = () => {
        if (window.innerWidth > 600) {
            setMenuVisible(false);
        }
    };
    
    useEffect(() => {
        window.addEventListener("resize", closeMenuIfWideScreen);
        let element = document.getElementById("navbarsection");
        gsap.to(element,{pin : true,zIndex : 99999, x : 0, y: 0});
        return () => {
            window.removeEventListener("resize", closeMenuIfWideScreen);
        }
    }, [])



    const [menuVisible, setMenuVisible] = useState(false);
    function toggleMenu() {
        console.log(menuVisible);
        setMenuVisible(!menuVisible);
    }
    return (
        <div id='navbarsection'>
            <div id="menuicon" ><img width="32" height="32" onClick={toggleMenu} id="menuiconimage" src={menuVisible ? "https://img.icons8.com/ios/50/delete-sign--v1.png" : "https://img.icons8.com/ios/32/menu--v1.png "} alt="menu--v1" /></div>
            <div className={`navbar ${menuVisible ? 'menuopen' : ''}`}>
                <a onClick={() => scrollToElem({ elementId: "root" })}>home</a>
                <a onClick={() => scrollToElem({ elementId: "aboutsection" })} >about</a>
                <a onClick={() => scrollToElem({ elementId: "projectssection" })}>projects</a>
                <a onClick={() => scrollToElem({ elementId: "workexperiencesection" })}>workExperience</a>
                <a onClick={() => scrollToElem({ elementId: "skillssection" })}>skills</a>
                <a onClick={() => scrollToElem({ elementId: "contactsection" })}>contact</a>
            </div>
        </div>
    );
}

export default NavBar;
