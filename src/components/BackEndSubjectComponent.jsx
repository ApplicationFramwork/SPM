import React, { Component } from 'react'
import Swal from 'sweetalert2';
import service from '../services/SchoolManagementSystemServices'
import AdminSideNavBar from './Admin-SideNavBar';
import "../../../../FRONTEND/frontend/node_modules/datatables.net-dt/css/jquery.dataTables.css";
import $ from 'jquery'
$.DataTable = require('datatables.net');

export default class BackEndSubjectComponent extends Component {
    constructor(props) {
        super(props)

        this.state = {
            loading: false,
            // form Variables
            subject_ID: '',
            subject_Name: '',
            allocated_Grade: '',
            description: '',

            //get all details variables
            allSubjects: []

        }
        // //add Handlers
        this.changeSUbjectIDHandler = this.changeSUbjectIDHandler.bind(this);
        this.changeSUbjectNameHandler = this.changeSUbjectNameHandler.bind(this);
        this.changeSUbjectAllocatedGrade = this.changeSUbjectAllocatedGrade.bind(this);
        this.changeSUbjectDescriptionHandler = this.changeSUbjectDescriptionHandler.bind(this);
    }
    //add handler
    changeSUbjectIDHandler = (event) => {
        this.setState({ subject_ID: event.target.value });
    }
    changeSUbjectNameHandler = (event) => {
        this.setState({ subject_Name: event.target.value });
    }
    changeSUbjectAllocatedGrade = (event) => {
        this.setState({ allocated_Grade: event.target.value });
    }
    changeSUbjectDescriptionHandler = (event) => {
        this.setState({ description: event.target.value });
    }
    componentDidMount() {
        service.getAllSubjects().then(res => {
            this.setState({ allSubjects: res.data });
        });
    }
    componentDidUpdate() {
        this.$el = $(this.el);
        this.$el.DataTable();
    }
    addSubject= (e) => {
        e.preventDefault();
        const swalWithBootstrapButtons = Swal.mixin({
            customClass: {
                confirmButton: 'btn btn-success ml-5',
                cancelButton: 'btn btn-danger'
            },
            buttonsStyling: false
        })

        swalWithBootstrapButtons.fire({
            title: 'Are you sure?',
            text: "Do you want to Add New Subject?",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonText: 'Yes, Add it!',
            cancelButtonText: 'No, cancel!',
            reverseButtons: true
        }).then((result) => {
            if (result.isConfirmed) {
                if (this.state.subject_ID !== "" && this.state.subject_Name !== '' && this.state.allocated_Grade !== "" && this.state.description !== "") {
                    
                    const refreshPage = () => {
                        window.location.reload();
                    }
                    let Subject = {
                        subject_ID: this.state.subject_ID,
                        subject_Name: this.state.subject_Name,
                        allocated_Grade: this.state.allocated_Grade,
                        description: this.state.description
                    };
                    console.log('Subject => ' + JSON.stringify(Subject));

                    service.addNewSubject(Subject).then(res => {
                        this.props.history.push('/BackendSubject');
                        refreshPage();
                    })

                } else {
                    Swal.fire({
                        icon: 'error',
                        title: 'Oops...',
                        text: 'All Input Fields Should Fill!'
                    })
                }

            }
        })

    }
    delete(e, subjectid) {
        e.preventDefault();
        const swalWithBootstrapButtons = Swal.mixin({
            customClass: {
                confirmButton: 'btn btn-success ml-5',
                cancelButton: 'btn btn-danger'
            },
            buttonsStyling: false
        })
        swalWithBootstrapButtons.fire({
            title: 'Are you sure?',
            text: "Do you want to Delete This Data?",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonText: 'Yes, Delete it!',
            cancelButtonText: 'No, cancel!',
            reverseButtons: true
        }).then((result) => {
            if (result.isConfirmed) {
                service.Deleteteacher(subjectid).then(res => {
                    this.props.history.push('/BackendSubject');
                    window.location.reload();
                });


            }
        })
    }
    render() {
        return (
            <div>
                <AdminSideNavBar />
                <div className="container-fluid">
                    <div className="row glass bg-info text-center mt-5">
                        <h1>SUBJECTS'S INFORMATION</h1>
                    </div>
                    <div className="row mt-5 d-flex justify-content-center">
                        <div className="col-md-8">

                        </div>
                        <div className="col-md-2">
                            <button type="button" class="btn btn-success btn-block" data-toggle="modal" data-target="#exampleModalCenter">
                                ADD NEW SUBJECT
                            </button>
                        </div>
                        <div className="col-md-2">
                            <button type="button" class="btn  btn-danger" disabled>
                                Genarate Report
                            </button>
                        </div>
                    </div>
                </div>
                <div className="container glass2 mt-5 mb-5">
                    <table
                        className="display"
                        ref={(el) => (this.el = el)}
                        style={{ boxShadow: "8px 8px  #dce3e0", marginBottom: "20px", marginTop: "20px" }}
                    >
                        <thead>
                            <tr>
                                <th>SUBJECT ID</th>
                                <th>SUBJECT NAME</th>
                                <th>ALLOCATED GRADE</th>
                                <th>DESCRIPTION</th>
                                <th>ACTION</th>
                            </tr>
                        </thead>
                        <tbody>

                            {
                                this.state.allSubjects.map(
                                    allSubjects =>
                                        <tr>

                                            <th>{allSubjects.subject_ID}</th>
                                            <th>{allSubjects.subject_Name}</th>
                                            <th>{allSubjects.allocated_Grade}</th>
                                            <th>{allSubjects.description}</th>
                                            <th>
                                                <div className="row">
                                                    <div className="col-12">
                                                        <button className="btn btn-danger btn-block fa fa-trash" onClick={e => this.delete(e, allSubjects._id)}></button>
                                                    </div>
                                                </div>
                                            </th>

                                        </tr>

                                )
                            }
                        </tbody>
                        <tfoot>
                            <tr>
                                <th>SUBJECT ID</th>
                                <th>SUBJECT NAME</th>
                                <th>ALLOCATED GRADE</th>
                                <th>DESCRIPTION</th>
                                <th>ACTION</th>
                            </tr>
                        </tfoot>
                    </table>
                </div>
                {/* form modal */}
                <div class="modal fade" id="exampleModalCenter" tabindex="-1" role="dialog" aria-labelledby="exampleModalCenterTitle" aria-hidden="true">
                    <div class="modal-dialog modal-dialog-centered modal-dialog-scrollable modal-xl" role="document">
                        <div class="modal-content">
                            <div class="modal-header">
                                <h1 class="modal-title " id="exampleModalLongTitle">ADD SUBJECT FORM</h1>
                                <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                                    <span aria-hidden="true">&times;</span>
                                </button>
                            </div>
                            <div class="modal-body">
                                <div className="glass bg-info mb-2 ml-3 mr-3">
                                    <form className="form-container">
                                        <div className="row d-flex justify-content-center">
                                            <div className="col-md-4 ml-2 mr-2 mt-3">
                                                <div className="form-group">
                                                    <h5>SUBJECT ID</h5>
                                                    <input placeholder="S###" name="subject_ID" className="form-control"
                                                        value={this.state.subject_ID} onChange={this.changeSUbjectIDHandler} required maxlength="4" />
                                                </div>
                                            </div>
                                            <div className="col-md-4 ml-2 mr-2 mt-3">
                                                <div className="form-group">
                                                    <h5>Allocated Grade</h5>
                                                    <div className="input-group mb-3">
                                                        <select className="custom-select" name="point" type="allocated_Grade" placeholder={"Allocated Grade"}
                                                            onChange={this.changeSUbjectAllocatedGrade}>
                                                            <option selected>Choose...</option>
                                                            <option value="Grade-01">Grade-01</option>
                                                            <option value="Grade-02">Grade-02</option>
                                                            <option value="Grade-03">Grade-03</option>
                                                            <option value="Grade-04">Grade-04</option>
                                                            <option value="Grade-05">Grade-05</option>
                                                            <option value="Grade-06">Grade-06</option>
                                                            <option value="Grade-07">Grade-07</option>
                                                            <option value="Grade-08">Grade-08</option>
                                                            <option value="Grade-09">Grade-09</option>
                                                            <option value="Grade-10">Grade-10</option>
                                                            <option value="Grade-11">Grade-11</option>
                                                            <option value="Grade-12">Grade-12</option>
                                                            <option value="Grade-13">Grade-13</option>
                                                        </select>
                                                        {console.log(this.state.point)}
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="row d-flex justify-content-center">
                                            <div className="col-md-8 ml-2 mr-2 mt-3">
                                                <div className="form-group">
                                                    <h5>Subject Name</h5>
                                                    <input placeholder="Subject name" name="subject_ID" className="form-control"
                                                        value={this.state.subject_Name} onChange={this.changeSUbjectNameHandler} required />
                                                </div>
                                            </div>
                                        </div>

                                        <div className="row d-flex justify-content-center">
                                            <div className="col-md-7 ml-2 mr-2 mt-3">
                                                <div className="form-group">
                                                    <h5>Description</h5>
                                                    <textarea placeholder="Description" class="form-control" name="description"
                                                        rows="3" value={this.state.description} onChange={this.changeSUbjectDescriptionHandler} />
                                                </div>
                                            </div>
                                        </div>
                                    </form>
                                </div>
                            </div>
                            <div class="modal-footer">
                                <button type="button" class="btn btn-success" onClick={this.addSubject}>Add Details</button>
                                <button type="button" class="btn btn-danger" data-dismiss="modal">Close</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}