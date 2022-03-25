import React from 'react';
import avatar from "../../../assets/icon/avatar.jpg";


export default function About() {
    return (
        <div className="about">
            <div className="about_header">
                <h2><i>ABOUT ME: </i></h2>
            </div>
            <div className="about_content row">
                <div className="about_txt col-lg-6">
                    <h4>HELLO, I'M TRINH HOANG TAM</h4>
                    <h4>FRONT-END DEVELOPER (REACT JS)</h4>
                    <p>Cheerful personality, sociable. Have a passion for web programming (especially on front-end) and have just completed a front-end course at Cybersoft center</p>
                    <p>After completing the course, i want to find a place where i can study and develop my career and i'm very happy to see this company is currently recruiting a front-end developer (React Js)</p>
                    <p>I tried researching the company on the website and with the knowledge i just learned and decided to apply to this company.</p>
                </div>
                <div className="about_img col-lg-6">
                    <div className="text-center">
                        <img width="40%" src={avatar} alt="..." />
                    </div>
                </div>
            </div>
        </div>
    )
}
