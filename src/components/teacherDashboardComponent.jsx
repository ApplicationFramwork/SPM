import React, { Component } from 'react'

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
                        <a href="/teacherDashboard"><i class="fas fa-desktop active"></i><span>Dashboard</span></a>
                        <a href="/"><i class="fa fa-graduation-cap"></i><span>Students</span></a>
                        <a href="/allocatedSub"><i class="fa fa-book"></i><span>Subjects</span></a>
                        <a href="/"><i class="fa fa-address-book"></i><span>Attendance</span></a>
                        <a href="/"><i class="fa fa-flag-o"></i><span>Notice</span></a>
                    </div>
                </div>

                <div class="sidebar">
                    <a className="active" href="/teacherDashboard"><i class="fas fa-desktop mt-4 mb-4"></i><span>Dashboard</span></a>
                    <a href="/"><i class="fa fa-graduation-cap mt-4 mb-4"></i><span>Student</span></a>
                    <a href="/allocatedSub"><i class="fa fa-book mt-4 mb-4"></i><span>Subjects</span></a>
                    <a href="/"><i class="fa fa-address-book mt-4 mb-4"></i><span>Attendance</span></a>
                    <a href="/"><i class="fa fa-flag-o mt-4 mb-4"></i><span>Notice</span></a>
                </div>
                {/* end navbar */}
                <div class="content mt-4" >
                    <div className="container-fluid mt-5">
                        <div className="glass d-flex justify-content-center">
                            <div className="row">
                                <div className="col-12 mt-5">
                                    <h1>TEACHER DASHBOARD</h1>
                                    <div className="row ">
                                        <div className="col-md-4"></div>
                                        <div className="col-md-4 d-flex justify-content-center mb-5">
                                            <div className="breake">
                                            </div>
                                        </div>
                                        <div className="col-md-4"></div>
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
