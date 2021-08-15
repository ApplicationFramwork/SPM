import React, {Component} from 'react';
import AdminSideNavBar from "./Admin-SideNavBar";
import {Table} from "react-bootstrap";
import SchoolManagementSystemServices from "../services/SchoolManagementSystemServices";
const imageUrl = "http://localhost:8070/uploads/";
class StudentDetailReports extends Component {
    constructor(props){
        super(props)
        this.state = {
            students: []
        }
    }
    componentDidMount(){
        SchoolManagementSystemServices.getAllStudents().then((res) => {
            this.setState({ students: res.data});
        });
    }
    render() {
        return (
            <div className="background">
                <div className="row">
                    {/*Admin Side Navigation Bar*/}
                    <div className="col-sm-3">
                        <AdminSideNavBar/>
                    </div>
                    <div className="col-sm-9">
                        {/*Notices Management Navigation Bar*/}
                        <nav className="navbar navbar-expand-lg navbar-light bg-light">
                            <div className="container-fluid">
                                <a className="navbar-brand" href="/adminStudentDashboard">Student Management</a>
                                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                                    <span className="navbar-toggler-icon"></span>
                                </button>
                                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                                    <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                                        <li className="nav-item">
                                            <a className="nav-link" href="/adminStudentDashboard">View Students</a>
                                        </li>
                                    </ul>
                                    <form className="d-flex">
                                        <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search"/>
                                        <button className="btn btn-outline-success" type="submit">Search</button>
                                    </form>
                                </div>
                            </div>
                        </nav>
                        <br/>
                        <div className="container">
                            <div className="row">
                                {/*Header*/}
                                <h3>Student Detail Reports</h3>
                            </div>
                        </div>
                        <div className="container p-2"style={{backgroundColor:"orange"}}>
                            <div className="row">
                                <div className="col-md-3">
                                    <button className="btn btn-success"><i className="fas fa-download"></i>&nbsp;
                                        Download</button>
                                </div>
                                <div className="col-md-3" >
                                    <button className="btn dropdown-toggle" type="button" id="dropdownMenuButton1" data-bs-toggle="dropdown" aria-expanded="false" style={{backgroundColor:"white",width:"100%"}}>
                                       Select by Grade
                                    </button>
                                    <ul className="dropdown-menu" aria-labelledby="dropdownMenuButton1">
                                        <li><a className="dropdown-item" href="#">Action</a></li>
                                        <li><a className="dropdown-item" href="#">Another action</a></li>
                                        <li><a className="dropdown-item" href="#">Something else here</a></li>
                                    </ul>
                                </div>
                                <div className="col-md-3">
                                    <button className="btn dropdown-toggle" type="button" id="dropdownMenuButton2" data-bs-toggle="dropdown" aria-expanded="false" style={{backgroundColor:"white",width:"100%"}}>
                                        Select by Class
                                    </button>
                                    <ul className="dropdown-menu" aria-labelledby="dropdownMenuButton2">
                                        <li><a className="dropdown-item" href="#">Action</a></li>
                                        <li><a className="dropdown-item" href="#">Another action</a></li>
                                        <li><a className="dropdown-item" href="#">Something else here</a></li>
                                    </ul>
                                </div>
                                <div className="col-md-3">
                                    <input className="form-control" placeholder="Search by Name or ID"/>
                                </div>

                            </div>
                        </div>
                        <br/>
                        <div className="container">
                            <div className="row">
                                {/*Report Content*/}
                                        <Table responsive className="table" striped bordered hover>
                                            <thead>
                                            <tr>

                                                <th scope="col">Profile Picture</th>
                                                <th scope="col">Name</th>
                                                <th scope="col">Admission Number</th>
                                                <th scope="col"> Class</th>
                                                <th scope="col"> Gender</th>
                                                <th scope="col"> Date of Birth</th>
                                                <th scope="col"> Mobile Number</th>
                                                <th scope="col"> Email</th>
                                                <th scope="col"> Address</th>
                                                <th scope="col"> Guardian Name</th>
                                                <th scope="col"> Guardian Relationship</th>
                                                <th scope="col"> Guardian Mobile Number</th>
                                                <th scope="col"> Guardian Email</th>
                                            </tr>
                                            </thead>
                                            <tbody>
                                            {
                                                this.state.students.map(
                                                    student =>
                                                        <tr key = {student._id}>
                                                            <td><img src={imageUrl+student.image} style={{height:"100px",width:"100px"}}/></td>
                                                            <td> {student.admissionNumber}</td>
                                                            <td> {student.firstName+" "+student.lastName}</td>
                                                            <td> {student.section+" "+student.className}</td>
                                                            <td> {student.gender}</td>
                                                            <td> {student.dateOfBirth}</td>
                                                            <td> {student.mobileNumber}</td>
                                                            <td> {student.email}</td>
                                                            <td> {student.address}</td>
                                                            <td> {student.guardianName}</td>
                                                            <td> {student.guardianRelationship}</td>
                                                            <td> {student.guardianMobileNumber}</td>
                                                            <td> {student.guardianEmail}</td>
                                                            <br/><br/><br/>
                                                        </tr>
                                                )
                                            }
                                            </tbody>
                                        </Table>
                            </div>
                        </div>
                    </div>
                </div>

            </div>
        );
    }
}

export default StudentDetailReports;