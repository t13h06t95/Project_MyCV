import React from 'react'

export default function Skill() {
    return (
        <div className="skill mt-5">
            <div className="skill_header">
                <h2><i>MY SKILLS:</i></h2>
            </div>

            <div className="skill_content row">
                <div className="col-lg-6">
                    <div className="skill_progress col-lg-12">
                        <h4>HTML5: </h4>
                        <div className="progress">
                            <div className="progress-bar" style={{maxWidth:"70%"}}></div>
                        </div>
                    </div>
                    <div className="skill_progress col-lg-12">
                        <h4>CSS3: </h4>
                        <div className="progress text-right">
                            <div className="progress-bar counter" style={{maxWidth:"70%"}}></div>
                        </div>
                    </div>
                    <div className="skill_progress col-lg-12">
                        <h4>JS (ES5/ES6): </h4>
                        <div className="progress">
                            <div className="progress-bar" style={{maxWidth:"60%"}}></div>
                        </div>
                    </div>
                </div>
                <div className="col-lg-6">
                    <div className="skill_progress col-lg-12">
                        <h4>BOOTSTRAP4: </h4>
                        <div className="progress">
                            <div className="progress-bar" style={{maxWidth:"70%"}}></div>
                        </div>
                    </div>
                    <div className="skill_progress col-lg-12">
                        <h4>SASS: </h4>
                        <div className="progress">
                            <div className="progress-bar" style={{maxWidth:"50%"}}></div>
                        </div>
                    </div>
                    <div className="skill_progress col-lg-12">
                        <h4>REACT JS: </h4>
                        <div className="progress">
                            <div className="progress-bar" style={{maxWidth:"60%"}}></div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
