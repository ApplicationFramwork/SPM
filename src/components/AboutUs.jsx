import React, {Component} from 'react';
import author1 from "../images/author1.jpg";
import author2 from "../images/author2.jpg";
import author3 from "../images/author3.jpg";
import IndexHeader from "./IndexHeader";
class AboutUs extends Component {
    render() {
        return (
            <div className="container-fluid about">
                <IndexHeader/>
                <div className="row">
                    <div className="col-sm-2"></div>
                    <div className="col-sm-10 bodyText">
                        <br/>
                        <h1 className="text headingText">About Us</h1>
                        <small className="smallText" style={{color:"#FFBA01",fontWeight: "bold",fontSize: "20px",fontFamily: "sans-serif"}}>
                            KIDZ School is an online based School Management System that provides educators with
                            the tools and
                            <br/>
                            data needed to handle daily activities. Any size of academy institute can use it
                            — be it school or a college.
                            <br/>
                            By automating your tasks like Teacher Details Management, Student Details Management, Attendance tracking,
                            <br/>
                            Grading, and Reporting, it results in improved efficiency and increased productivity. Both the teacher and
                            <br/>students are benefited from the system.
                            <br/>
                            </small>
                    </div>
                </div>

                <div className="row">
                    <div className="col-sm-2 bodyText"></div>
                    <div className="col-sm-8 bodyText">
                        <br/>
                        <h3 className="text-dark aboutText">Meet Our Team</h3>
                        <hr/>
                        <br/>
                        <div className="row align-items-start">
                            <div className="col">
                                <div className="card" style={{width: "18rem"}}>
                                    <div className="flip-box">
                                        <div className="flip-box-inner">
                                            <div className="flip-box-front">
                                                <img src={author1} className="card-img-top flip"  alt="..."/>
                                            </div>
                                            <div className="flip-box-back">
                                                <h2>Maleesha Wickramarathna</h2>
                                                <p>Software Engineering Undergraduate</p>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="card-body">
                                        <br/><br/><br/><br/>
                                        <a href="https://www.linkedin.com/in/maleesha-suraj-wickramarathna-779077193/" className="btn" style={{backgroundColor: "#FFBA01"}}>Follow Us on Linkedin
                                            &nbsp;<i className="fab fa-linkedin"></i>
                                        </a>
                                    </div>
                                </div>
                            </div>
                            <div className="col">
                                <div className="card" style={{width: "18rem"}}>
                                    <div className="flip-box">
                                        <div className="flip-box-inner">
                                            <div className="flip-box-front">
                                                <img src={author2} className="card-img-top flip"  alt="..."/>
                                            </div>
                                            <div className="flip-box-back">
                                                <h2>Kithmini De Silva</h2>
                                                <p>Software Engineering Undergraduate</p>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="card-body">
                                        <br/><br/><br/><br/>
                                        <a href="https://www.linkedin.com/in/kithmini-de-silva-3084761b8/" className="btn" style={{backgroundColor: "#FFBA01"}}>Follow Us on Linkedin
                                            &nbsp;<i className="fab fa-linkedin"></i>
                                        </a>
                                    </div>
                                </div>
                            </div>
                            <div className="col">
                                <div className="card" style={{width: "18rem"}}>
                                    <div className="flip-box">
                                        <div className="flip-box-inner">
                                            <div className="flip-box-front">
                                                <img src={author3} className="card-img-top flip"  alt="..."/>
                                            </div>
                                            <div className="flip-box-back">
                                                <h2>Vihanga Lekamalage</h2>
                                                <p>Software Engineering Undergraduate</p>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="card-body">
                                        <br/><br/><br/><br/>
                                        <a href="https://www.linkedin.com/in/vihanga-malshan-jontyrulz1998/" className="btn" style={{backgroundColor: "#FFBA01"}}>Follow Us on Linkedin
                                            &nbsp;<i className="fab fa-linkedin"></i>
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <br/>
                    </div>
                </div>
            </div>
        );
    }
}

export default AboutUs;