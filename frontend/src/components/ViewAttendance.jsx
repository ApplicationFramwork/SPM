import React, {Component} from 'react';
import Adm from "./Admin-SideNavBar";
import AdminHeader from "./AdminHeader";
import SchoolManagementSystemServices from "../services/SchoolManagementSystemServices";

class ViewAttendance extends Component {
    constructor(props) {
        super(props);
        this.state = {
            Students:[]

        }
        this.changeClassnameHander = this.changeClassnameHander.bind(this);
    }
    changeClassnameHander = (event) =>{
        this.setState({cName : event.target.value});
    }
    ViewDetails(e,admissionNumber){
        e.preventDefault();
        this.setState({
                stID : admissionNumber
            }
        )
    }

    VIewStudents = (e) =>{
        e.preventDefault();
        if(this.state.cName != ""){
            SchoolManagementSystemServices.ViewAttendance(this.state.cName).then((res) => {
                this.setState({ Students: res.data});
            });
        }else{
            alert("Class Name is empty!")
        }
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
                        <h3><b>View Attendance</b></h3>
                    </div>

                    <div className="row m-2 searchRow">
                        <div className="col-sm-5">
                            <input type="text" className="form-control" onChange={this.changeClassnameHander} value={this.state.cName} placeholder="Search By Class ID" aria-label="Username"
                                   aria-describedby="basic-addon1"/>
                        </div>
                        <div className="col-sm-3">
                            <button className="MarkAttendanceSearch" onClick={this.VIewStudents}>Search</button>
                        </div>
                        <div className="col-sm-3 ">
                            <div className="dropdown dropdownBtn">
                                <button className="btn btn-secondary dropdown-toggle" type="button"
                                        id="dropdownMenuButton1" data-bs-toggle="dropdown" aria-expanded="false">
                                    Select Attendance Options
                                </button>
                                <ul className="dropdown-menu" aria-labelledby="dropdownMenuButton1">
                                    <li><a className="dropdown-item" href="/ViewAttendance">View Attendance</a></li>
                                    <li><a className="dropdown-item" href="#">Generate Reports</a></li>
                                </ul>
                            </div>
                        </div>
                    </div>

                    <div className="row">
                        <div className="col-sm-6">
                            <h6>Students List</h6>
                        </div>
                    </div>

                    <div>
                        {
                            this.state.Students.map(
                                student =>
                                    <div  className="col-sm-6 m-2 card" onClick={e => this.ViewDetails(e,student.StudentId)}
                                          data-bs-toggle="modal" data-bs-target="#exampleModal" key = {student.admissionNumber }>
                                        <div className="row">
                                            <div className="col-sm-9">
                                                <p className={"m-2"}>Student Admission Number : {student.StudentId}</p>
                                                <p className={"m-2"}>Date : {student.date}</p>
                                                <p className={"m-2"}>Status  : {student.status}</p>
                                            </div>
                                            <div className="col-sm-3 mt-4">
                                                <i className="removeIcon fas fa-minus-circle"></i>
                                            </div>
                                        </div>
                                    </div>
                            )
                        }
                    </div>
                    <div className="modal fade" id="exampleModal" tabIndex="-1" aria-labelledby="exampleModalLabel"
                         aria-hidden="true">
                        <div className="modal-dialog">
                            <div className="modal-content">
                                <div className="modal-header">
                                    <h5 className="modal-title" id="exampleModalLabel">Edit Attendance</h5>
                                    <button type="button" className="btn-close" data-bs-dismiss="modal"
                                            aria-label="Close"></button>
                                </div>
                                <div className="modal-body">
                                    <input type="text" className="form-control m-2" placeholder="Student ID "
                                           aria-label="Student ID" aria-describedby="basic-addon1"
                                           value={this.state.stID}/>
                                    <div className="input-group mb-3">
                                        <select className="custom-select" name="point" type="allocated_Grade"
                                                placeholder={"Allocated Grade"}
                                                onChange={this.changeStatus}>
                                            <option selected>Choose...</option>
                                            <option value="Present">Present</option>
                                            <option value="Absent">Absent</option>
                                        </select>
                                    </div>

                                </div>
                                <div className="modal-footer">
                                    <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Close
                                    </button>
                                    <button type="button" className="btn btn-primary" onClick={this.saveChanges}>Save
                                        changes
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default ViewAttendance;