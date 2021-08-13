import React, { Component } from 'react'
import image from '../Images/spiderman.png'

export default class teacherDashboardComponent extends Component {

    render() {
        return (

            // navbar
            <div>
                <input type="checkbox" id="check"></input>
                <header>
                    <label for="check">
                        <i class="fas fa-bars" id="sidebar_btn"></i>
                    </label>
                    <div class="left_area">
                        <h3><span>KIDZ SCHOOL</span></h3>
                    </div>
                    <div class="right_area">
                        <a href="/" class="logout_btn">Log Out</a>
                    </div>
                </header>

                <div class="mobile_nav">
                    <div class="nav_bar">
                        <i class="fa fa-bars nav_btn"></i>
                    </div>
                    <div class="mobile_nav_items">
                        <a href="/teacherDashboard"><i class="fas fa-desktop"></i><span>Dashboard</span></a>
                        <a href="/"><i class="fas fa-user-graduate"></i><span>Students</span></a>
                        <a href="/allocatedSub"><i class="fa fa-book"></i><span>Subjects</span></a>
                        <a href="/"><i class="fa fa-address-book"></i><span>Attendance</span></a>
                        <a href="/"><i class="fas fa-tasks"></i><span>Notice</span></a>
                    </div>
                </div>

                <div class="sidebar">
                    <a className="active" href="/teacherDashboard"><i class="fas fa-desktop mt-4 mb-4"></i><span>Dashboard</span></a>
                    <a href="/"><i class="fas fa-user-graduate mt-4 mb-4"></i><span>Student</span></a>
                    <a href="/allocatedSub"><i class="fa fa-book mt-4 mb-4"></i><span>Subjects</span></a>
                    <a href="/"><i class="fa fa-address-book mt-4 mb-4"></i><span>Attendance</span></a>
                    <a href="/"><i class="fas fa-tasks mt-4 mb-4"></i><span>Notice</span></a>
                </div>
                {/* end navbar */}
                <div class="content mt-4" >
                    <div className="container-fluid mt-5">
                        <div className="glass">
                            <div className="row text-center">
                                <div className="col-12 mt-2">
                                    <h1>TEACHER DASHBOARD</h1>
                                    <div className="row ">
                                        <div className="col-md-4"></div>
                                        <div className="col-md-4 d-flex justify-content-center mb-3">
                                            <div className="breake">
                                            </div>
                                        </div>
                                        <div className="col-md-4"></div>
                                    </div>
                                </div>
                            </div>
                            <div className="container">
                                <div className="glass2 bg-info mb-2 ml-3 mr-3">
                                    <div className="row ">
                                        <div className="col-12 mt-2 ml-2">
                                            <h3>DETAILS</h3>
                                            <div className="row ">
                                                <div className="col-md-2 mb-2">
                                                    <div className="breake">
                                                    </div>
                                                </div>
                                                <div className="col-md-10"></div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="row ml-3 mr-3 mb-3">
                                        <div className="col-md-2 d-flex justify-content-center align-items-center border border-light bg-light rounded">
                                            <img src={image} alt="" srcset="" style={{ width: "100%", height: "90%" }} />
                                        </div>
                                        <div className="col-md-10">
                                            <div className="row">
                                                <div className="col-md-3">
                                                    <label className="font-weight-bold" htmlFor="">TEACHER ID:-</label>
                                                    <input disabled placeholder="Name" style={{}} />
                                                </div>

                                                <div className="col-md-9">
                                                    <label className="font-weight-bold" htmlFor="">TEACHER NAME:-</label>
                                                    <input disabled placeholder="Name" style={{}} />
                                                </div>
                                            </div>
                                            <div className="row mt-3">
                                                <div className="col-md-7">
                                                    <label className="font-weight-bold" htmlFor="">EMAIL:-</label>
                                                    <input disabled placeholder="Name" style={{}} />
                                                </div>

                                                <div className="col-md-5">
                                                    <label className="font-weight-bold" htmlFor="">NIC:-</label>
                                                    <input disabled placeholder="Name" style={{}} />
                                                </div>
                                            </div>

                                            <div className="row mt-3">
                                                <div className="col-md-4">
                                                    <label className="font-weight-bold" htmlFor="">ALLOCATED GRAGE:-</label>
                                                    <input disabled placeholder="Name" style={{}} />
                                                </div>

                                                <div className="col-md-8">
                                                    <label className="font-weight-bold" htmlFor="">ALLOCATED SUBJECTS:-</label>
                                                    <input disabled placeholder="Name" style={{}} />
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="container mb-3">
                                <div className="row ">
                                    <div className="col-12 mt-3 ml-2">
                                        <h3>ALLOCATED STUDENTS</h3>
                                        <div className="row ">
                                            <div className="col-md-2 mb-2">
                                                <div className="breake">
                                                </div>
                                            </div>
                                            <div className="col-md-10"></div>
                                        </div>
                                    </div>
                                </div>

                            </div>
                        </div>

                    </div>


                </div>
            </div>




        )
    }
}
