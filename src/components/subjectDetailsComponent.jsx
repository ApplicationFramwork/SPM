import React, { Component } from 'react'

export default class subjectDetailsComponent extends Component {
    render() {
        return (
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
                    <a href="/teacherDashboard"><i class="fas fa-desktop mt-4 mb-4"></i><span>Dashboard</span></a>
                    <a href="/"><i class="fas fa-user-graduate mt-4 mb-4"></i><span>Student</span></a>
                    <a href="/allocatedSub"><i class="fa fa-book mt-4 mb-4"></i><span>Subjects</span></a>
                    <a href="/"><i class="fa fa-address-book mt-4 mb-4"></i><span>Attendance</span></a>
                    <a href="/"><i class="fas fa-tasks mt-4 mb-4"></i><span>Notice</span></a>
                </div>
            </div>
        )
    }
}
