import React from "react";
import logoHtml from "../../../assets/icon/html.png";
import logoCss from "../../../assets/icon/css.png";
import logoJs from "../../../assets/icon/js.png";
import logoBs4 from "../../../assets/icon/bs4.png";
import logoSass from "../../../assets/icon/sass.png";
import logoReactjs from "../../../assets/icon/reactjs.png";


export default function Specialize() {
    return (
        <div className="specialize">
            <div className="specialize_header">
                <h2><i>SPECIALIZE IN...</i></h2>
            </div>
            <div className="specialize_content">
                <div className="row col-lg-12">
                    <div className="programming col-lg-3 col-md-5">
                        <div className="programming_img">
                            <img width="50%" src={logoHtml} alt="..." />
                        </div>
                        <div className="programming_txt">
                            <h4>HTML</h4>
                        </div>
                    </div>
                    <div className="programming col-lg-3 col-md-5">
                        <div className="programming_img">
                            <img width="50%" src={logoCss} alt="..." />
                        </div>
                        <div className="programming_txt">
                            <h4>CSS</h4>
                        </div>
                    </div>
                    <div className="programming col-lg-3 col-md-5">
                        <div className="programming_img">
                            <img width="50%" src={logoJs} alt="..." />
                        </div>
                        <div className="programming_txt">
                            <h4>JS</h4>
                        </div>
                    </div>
                </div>

                <div className="row col-lg-12">
                    <div className="programming col-lg-3 col-md-5">
                        <div className="programming_img">
                            <img width="50%" src={logoBs4} alt="..." />
                        </div>
                        <div className="programming_txt">
                            <h4>Bootstrap 4</h4>
                        </div>
                    </div>
                    <div className="programming col-lg-3 col-md-5">
                        <div className="programming_img">
                            <img width="50%" src={logoSass} alt="..." />
                        </div>
                        <div className="programming_txt">
                            <h4>SASS</h4>
                        </div>
                    </div>
                    <div className="programming col-lg-3 col-md-5">
                        <div className="programming_img">
                            <img width="50%" src={logoReactjs} alt="..." />
                        </div>
                        <div className="programming_txt">
                            <h4>React Js</h4>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
