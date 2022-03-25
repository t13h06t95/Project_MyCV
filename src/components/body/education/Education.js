import React from 'react';
import avatar from "../../../assets/icon/avatar.jpg"

export default function Education() {
    return (
        <div className="education">
            <div className="education_header">
                <h2><i>MY EDUCATION:</i></h2>
            </div>
            <div className="education_content row">
                <div className="education_social col-lg-3">
                    <div className="education_img">
                        <img width="100%" src={avatar} alt="..." style={{ maxHeight: "350px" }} />
                    </div>
                    <div className="education_icon">
                        <ul className="icon_list row">
                            <li className="icon_facebook"><a href="https://www.facebook.com/profile.php?id=100079543542097"><i className="fa-brands fa-facebook"></i></a></li>
                            <li className="icon_twitter"><a href="https://twitter.com/t13h06t95"><i className="fa-brands fa-twitter"></i></a></li>
                            <li className="icon_github"><a href="https://github.com/t13h06t95"><i className="fa-brands fa-github"></i></a></li>
                            <li className="icon_gmail"><a href="mailto:t13h06t95@gmail.com"><i className="fa-regular fa-envelope"></i></a></li>
                        </ul>
                    </div>
                </div>

                <div className="education_txt col-lg-9">
                    <div className="col-lg-12">
                        <div className=" mt-4">
                            <div className="txt_header">
                                <h2>Completed the front-end developer course at Cybersoft center</h2>
                            </div>
                            <div className="row">
                                <h6>Start: 15-07-2021</h6>
                                <h6>End: 14-03-2022</h6>
                            </div>
                            <div className="txt_content">
                                <h4>Achievements:</h4>
                                <p>Can build the interface and processing functions of a website based on the knowledge learned (HTML5, CSS3, Javascript ES6, React JS,...)</p>
                                <p>I just finished the course, i don't have much experience so i decided to do this project MyCV. This project is a simple project that combines most of the knowledge i have learned (but not all) and also the CV i want to send to the company to show what i can do (and more...).</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
