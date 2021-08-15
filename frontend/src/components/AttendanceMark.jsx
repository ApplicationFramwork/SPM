import React, {Component} from 'react';
import Adm from "./Admin-SideNavBar";
import AdminHeader from "./AdminHeader";
import SchoolManagementSystemServices from "../services/SchoolManagementSystemServices";

class AttendanceMark extends Component {
    constructor(props) {
        super(props);
        this.state = {
            Students:[],
            stId :''

        }
    }
    componentDidMount(){
        SchoolManagementSystemServices.GetAllStudentsForAttendanceMark('2-B').then((res) => {
            this.setState({ Students: res.data});
        });
    }

    ViewDetails(e,admissionNumber){
        e.preventDefault();
        this.setState({
            stID : admissionNumber
        }
        )
    }

    render() {
        return (
            <div className="row bg-light">
                <div className="col-sm-3">
                    <Adm />
                </div>
                <div className="col-sm-9">
                    <AdminHeader />

                    <div className="row">
                        <h3><b>Mark Attendance</b></h3>
                    </div>

                    <div className="row m-2 searchRow">
                        <div className="col-sm-6">
                            <input type="text" className="form-control" placeholder="Search By Class ID" aria-label="Username"
                                   aria-describedby="basic-addon1"/>
                        </div>
                        <div className="col-sm-4">
                            <button className="MarkAttendanceSearch">Search</button>
                        </div>
                    </div>

                    <div className="row">
                        <div className="col-sm-6">
                            <h6>Students List</h6>
                        </div>
                        <div className="col-sm-6 dateRow">
                            <input type="date" className="dateTime"/>
                        </div>
                    </div>

                    <div>
                        {
                            this.state.Students.map(
                                student =>
                                    <div  className="col-sm-6  m-2 card" onClick={e => this.ViewDetails(e,student.admissionNumber)} data-bs-toggle="modal" data-bs-target="#exampleModal" key = {student.admissionNumber }>
                                        <p className={"m-2"}>{student.admissionNumber}</p>
                                        <p className={"m-2"}>{student.firstName + " " + student.lastName}</p>

                                    </div>
                            )
                        }
                    </div>

                    <div class="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                        <div class="modal-dialog">
                            <div class="modal-content">
                                <div class="modal-header">
                                    <h5 class="modal-title" id="exampleModalLabel">Mark Attendance</h5>
                                    <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                                </div>
                                <div class="modal-body">
                                    <input type="text" className="form-control m-2" placeholder="Student ID "
                                           aria-label="Student ID" aria-describedby="basic-addon1" value={this.state.stID}/>
                                    <input type="text" className="form-control m-2" placeholder="Student ID "
                                           aria-label="Student ID" aria-describedby="basic-addon1"/>

                                </div>
                                <div class="modal-footer">
                                    <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                                    <button type="button" class="btn btn-primary">Save changes</button>
                                </div>
                            </div>
                        </div>
                    </div>

                </div>
                {/*    End Second column*/}

            </div>

        );
    }
}

export default AttendanceMark;