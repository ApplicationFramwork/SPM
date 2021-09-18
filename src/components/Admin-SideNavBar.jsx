import React, {Component} from 'react';

class AdminSideNavBar extends Component {
    constructor(props) {
        super(props)
        this.state = {

        }
    }
    signout = (e) =>{
        e.preventDefault();
        //localStorage.removeItem("token");
        //localStorage.clear();
        console.log('helloo');
        this.props.history.push('/');
        localStorage.clear();
    }


    render() {
        return (
            <div className="row">
                <div className="col-sm-12 nav_body bg-light">
                    <div className="row">
                        <h1 className="topicRow">KIDZ SCHOOL</h1>
                    </div>

                    <div className="row">
                        <a><p className="NavItem"><i className="fas fa-tachometer-alt m-2"></i> Dashboard</p></a>
                    </div>

                    <div className="row">
                        <a><p className="NavItem"><i className="fas fa-cogs m-2"></i>Management</p></a>
                    </div>

                    <div className="row">
                        <a href={"/BackendTeacher"}><p className="NavItem"><i className="fas fa-chalkboard-teacher m-2"></i>Teacher</p></a>
                    </div>

                    <div className="row">
                        <small className="text-muted NavItem2"> More Infor</small>
                    </div>

                    <div className="row">
                        <a href={"/adminStudentDashboard"}><p className="NavItem"><i className="fas fa-user-graduate m-2"></i>Student</p></a>
                    </div>

                    <div className="row">
                        <a><p className="NavItem"><i className="fas fa-school m-2"></i>Class</p></a>
                    </div>

                    <div className="row">
                        <a href={"/MarkAttendance"}><p className="NavItem"><i className="fas fa-marker m-2"></i> Attendance
                        </p></a>
                    </div>

                    <div className="row">
                        <a href={"/BackendSubject"}><p className="NavItem"><i className="fas fa-book m-2"></i>Subject</p></a>
                    </div>

                    <div className="row">
                        <a href={"/AddMarks"}><p className="NavItem"><i className="fas fa-chart-line m-2"></i>Marks</p>
                        </a>
                    </div>

                    <div className="row">
                        <a href={"/notices"}><p className="NavItem"><i className="fas fa-tasks m-2"></i>Notices</p></a>
                    </div>
                    <br/>

                    <br/>
                    <br/>
                    <br/>
                    <br/>
                    <br/>
                    <br/>

                </div>
            </div>
        );
    }
}

export default AdminSideNavBar;