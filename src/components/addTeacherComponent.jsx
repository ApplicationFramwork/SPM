import React, { Component } from 'react'
import sevices from '../services/SchoolManagementSystemServices';
import axios from 'axios';
import Select from 'react-select';

export default class addTeacherComponent extends Component {
    constructor(props) {
        super(props)

        this.state = {
            teacher_ID: '',
            teacher_Name: '',
            email: '',
            NIC: '',
            profile_Picture: '',
            allocated_Grade: '',
            description: '',
            allSubjects: [],
            options: [],
            selecteSubjects: [],


        }
        this.changeTeacherIDHandler = this.changeTeacherIDHandler.bind(this);
        this.changeTeacherNameHandler = this.changeTeacherNameHandler.bind(this);
        this.changeTeacherEmailHandler = this.changeTeacherEmailHandler.bind(this);
        this.changeTeacherNICHandler = this.changeTeacherNICHandler.bind(this);
        this.changeTeacherAllocatedGrade = this.changeTeacherAllocatedGrade.bind(this);
        this.changeTeacherDescriptionHandler = this.changeTeacherDescriptionHandler.bind(this);
        // this.changeTeacherSubjectsHandler = this.changeTeacherSubjectsHandler.bind(this);
        this.changeTeacherProfilePictureHandler = this.changeTeacherProfilePictureHandler.bind(this);
    }
    changeTeacherIDHandler = (event) => {
        this.setState({ teacher_ID: event.target.value });
    }
    changeTeacherNameHandler = (event) => {
        this.setState({ teacher_Name: event.target.value });
    }
    changeTeacherEmailHandler = (event) => {
        this.setState({ email: event.target.value });
    }
    changeTeacherNICHandler = (event) => {
        this.setState({ NIC: event.target.value });
    }
    changeTeacherAllocatedGrade = (event) => {
        this.setState({ allocated_Grade: event.target.value });
    }
    changeTeacherDescriptionHandler = (event) => {
        this.setState({ description: event.target.value });
    }
    changeTeacherProfilePictureHandler = (event) => {
        this.setState({ profile_Picture: event.target.files[0] });
    }

    // changeTeacherSubjectsHandler = (e) => {
    //     this.setState({ selecteSubjects: e ? e.map(item => item.value) : [] });
    // }
    // componentDidMount() {
    //     sevices.getAllSubjects().then(res => {
    //         this.setState({ allSubjects: res.data }, () => {
    //             let data = [];
    //             this.state.allSubjects.map((item) => {
    //                 let allSubject = {
    //                     value: item._id,
    //                     label: item.allocated_Grade + " " + item.subject_Name
    //                 }
    //                 data.push(allSubject)
    //             });
    //             this.setState({ options: data });
    //         });
    //     });
    // }

    addTeacher = (e) => {
        e.preventDefault();
        const formData = new FormData();
        formData.append('teacher_ID', this.state.teacher_ID);
        formData.append('teacher_Name', this.state.teacher_Name);
        formData.append('email', this.state.email);
        formData.append('NIC', this.state.NIC);
        formData.append('profile_Picture', this.state.profile_Picture);
        formData.append('allocated_Grade', this.state.allocated_Grade);
        formData.append('description', this.state.description);

        const config = {
            headers: {
                'content-type': 'multipart/form-data'
            }
        };

        axios.post("http://localhost:8070/Teacher/add", formData, config)
        console.log(this.state.subject)

    }
    render() {
        return (
            <div className="container-fluid">
                <div className="row text-center">
                    <div className="col-12 mt-5">
                        <h1>Add New Teacher</h1>
                    </div>
                </div>
                <div className="container-fluid mt-2">
                    <form className="form-container">
                        <div className="row d-flex justify-content-center">
                            <div className="col-md-3 ml-2 mr-2 mt-3">
                                <div className="form-group">
                                    <h5>Teacher's ID</h5>
                                    <input placeholder="T###" name="teacher_ID" className="form-control"
                                        value={this.state.teacher_ID} onChange={this.changeTeacherIDHandler} required maxlength="4" />
                                </div>
                            </div>
                            <div className="col-md-2 ml-2 mr-2 mt-3">
                                <div className="form-group">
                                    <h5>Allocated Grade</h5>
                                    <div className="input-group mb-3">
                                        <select className="custom-select" name="point" type="allocated_Grade" placeholder={"Allocated Grade"}
                                            onChange={this.changeTeacherAllocatedGrade}>
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
                            <div className="col-md-3 ml-2 mr-2 mt-3">
                                <div className="form-group">
                                    <h5>Profile Picture</h5>
                                    <input className="form-control bg-primary mt-2 mb-3" type="file" name="profile_Picture"
                                        onChange={this.changeTeacherProfilePictureHandler} /> {console.log(this.state.profile_Picture)}
                                </div>
                            </div>
                        </div>
                        <div className="row d-flex justify-content-center">
                            <div className="col-md-8 ml-2 mr-2 mt-3">
                                <div className="form-group">
                                    <h5>Teacher's Name</h5>
                                    <input placeholder="Teacher's name" name="teacher_Name" className="form-control"
                                        value={this.state.teacher_Name} onChange={this.changeTeacherNameHandler} required />
                                </div>
                            </div>
                        </div>
                        <div className="row d-flex justify-content-center">
                            <div className="col-md-3 ml-2 mr-2 mt-3">
                                <div className="form-group">
                                    <h5>Teacher's NIC</h5>
                                    <input placeholder="Teacher's NIC" name="NIC" className="form-control"
                                        value={this.state.NIC} onChange={this.changeTeacherNICHandler} required min="10" max="12" />
                                </div>
                            </div>
                            <div className="col-md-4 ml-2 mr-2 mt-3">
                                <div className="form-group">
                                    <h5>Teacher's Email</h5>
                                    <input placeholder="Teacher's Email" type="email" name="email" className="form-control"
                                        value={this.state.email} onChange={this.changeTeacherEmailHandler} required />
                                </div>
                            </div>
                            {/* <div className="col-md-3 ml-2 mr-2 mt-4">
                                <div className="form-group names">
                                    <h5>Allocated Subjects</h5>
                                    <Select
                                        options={this.state.options}
                                        onChange={this.changeTeacherSubjectsHandler}
                                        className="basic-multi-select"
                                        isMulti
                                    />
                                </div>
                            </div> */}
                        </div>

                        <div className="row d-flex justify-content-center">
                            <div className="col-md-7 ml-2 mr-2 mt-3">
                                <div className="form-group">
                                    <h5>Description</h5>
                                    <textarea placeholder="Reserch Description" class="form-control" name="description"
                                        rows="3" value={this.state.description} onChange={this.changeTeacherDescriptionHandler} />
                                </div>
                            </div>
                        </div>


                        <div className="row d-flex justify-content-center">
                            <div className="col-md-3 mt-3 mb-5">
                                <button className="btn btn-success btn-block" onClick={this.addTeacher}>Add Details</button>
                            </div>

                            <div className="col-md-3 mt-3 mb-5">
                                <button className="btn btn-danger btn-block" onClick={this.cancle}>cancle</button>
                            </div>
                        </div>


                    </form>
                </div>
            </div>

        )
    }
}
