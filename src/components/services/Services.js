import { useEffect, useState } from 'react';
import './Services.css';


function Services() {

    let [currentIndex, setCurrentIndex] = useState(0);
    let [isMobileLayout, setMobileLayout] = useState(true);
    let services = [
        'mobileDevelopment',
        '<>',
        'webDevelopment',
        '<>',
        'desktopDevelopment',
        '<>',
        'uiDesign',
        ''
    ];

    useEffect(() => {

        let checkSize = () => {
            setMobileLayout(window.innerWidth < 500);
        }
        window.addEventListener("resize", checkSize);
        checkSize();

        return () => {
            window.removeEventListener("resize", checkSize);
        }
    }, [])

    useEffect(() => {
        let interval = setInterval(() => {
            if (isMobileLayout) {
                setCurrentIndex((prevIndex) => (prevIndex + 2) % services.length);
            }
        }, 1000);
        return () => {
            clearInterval(interval);
        }
    }, [isMobileLayout, services.length])


    return (
        isMobileLayout ?
            <div id="servicessection"  className="section" style={{fontSize: '16px',  padding: '3vh 0vw'}}>
                <span >{services[currentIndex]}</span>
            </div> : <div id="servicessection"  className="section">
                <span>mobileDevelopment</span>
                <span>&lt;&gt;</span>
                <span>webDevelopment</span>
                <span>&lt;&gt;</span>
                <span>desktopDevelopment</span>
                <span>&lt;&gt;</span>
                <span>uiDesign</span>
            </div>
    );
}

export default Services;
