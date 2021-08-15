import React, {Component} from 'react';
import AdminSideNavBar from "./Admin-SideNavBar";
import SchoolManagementSystemServices from "../services/SchoolManagementSystemServices";
import axios from "axios";
const imageUrl = "http://localhost:8070/uploads/";
class AdminStudentDashboard extends Component {
    constructor(props){
        super(props)
        this.state = {
            students: [],
            image: '',
            admissionNumber: '',
            firstName: '',
            lastName: '',
            section: '',
            className: '',
            gender: '',
            dateOfBirth: '',
            mobileNumber: '',
            email: '',
            address: '',
            guardianName: '',
            guardianRelationship: '',
            guardianMobileNumber: '',
            guardianEmail: ''
        }
        this.changeImageHandler = this.changeImageHandler.bind(this);
        this.changeAdmissionNumberHandler = this.changeAdmissionNumberHandler.bind(this);
        this.changeFirstNameHandler = this.changeFirstNameHandler.bind(this);
        this.changeLastNameHandler = this.changeLastNameHandler.bind(this);
        this.changeSectionHandler = this.changeSectionHandler.bind(this);
        this.changeClassNameHandler = this.changeClassNameHandler.bind(this);
        this.changeGenderHandler = this.changeGenderHandler.bind(this);
        this.changeDateOfBirthHandler = this.changeDateOfBirthHandler.bind(this);
        this.changeMobileNumberHandler = this.changeMobileNumberHandler.bind(this);
        this.changeEmailHandler = this.changeEmailHandler.bind(this);
        this.changeAddressHandler = this.changeAddressHandler.bind(this);
        this.changeGuardianNameHandler = this.changeGuardianNameHandler.bind(this);
        this.changeGuardianRelationshipHandler = this.changeGuardianRelationshipHandler.bind(this);
        this.changeGuardianMobileNumberHandler = this.changeGuardianMobileNumberHandler.bind(this);
        this.changeGuardianEmailHandler = this.changeGuardianEmailHandler.bind(this);
    }
    addStudent = (e) => {
        e.preventDefault();
        const formData = new FormData();
        formData.append('image', this.state.image);
        formData.append('admissionNumber', this.state.admissionNumber);
        formData.append('firstName', this.state.firstName);
        formData.append('lastName', this.state.lastName);
        formData.append('section', this.state.section);
        formData.append('className', this.state.className);
        formData.append('gender', this.state.gender);
        formData.append('dateOfBirth', this.state.dateOfBirth);
        formData.append('mobileNumber', this.state.mobileNumber);
        formData.append('email', this.state.email);
        formData.append('address', this.state.address);
        formData.append('guardianName', this.state.guardianName);
        formData.append('guardianRelationship', this.state.guardianRelationship);
        formData.append('guardianMobileNumber', this.state.guardianMobileNumber);
        formData.append('guardianEmail', this.state.guardianEmail);
        const config = {
            headers: {
                'content-type': 'multipart/form-data'
            }
        };
        const refreshPage = () => {
            window.location.reload();
        }
        axios.post("http://localhost:8070/students/addStudents", formData, config).then(res => {
            this.props.history.push('/adminStudentDashboard');
            refreshPage();
        })
        //console.log(this.state.subject)
    }
    deleteStudent(id){
        SchoolManagementSystemServices.deleteStudent(id).then(res=>{
            this.setState({students: this.state.students.filter(student => student._id !==id)});
        })
    }
    changeImageHandler = (students)=> {
        this.setState({image: students.target.files[0]});
    }
    changeAdmissionNumberHandler = (students)=> {
        this.setState({admissionNumber: students.target.value});
    }
    changeFirstNameHandler = (students)=> {
        this.setState({firstName: students.target.value});
    }
    changeLastNameHandler = (students)=> {
        this.setState({lastName: students.target.value});
    }
    changeSectionHandler = (students)=> {
        this.setState({section: students.target.value});
    }
    changeClassNameHandler = (students)=> {
        this.setState({className: students.target.value});
    }
    changeGenderHandler = (students)=> {
        this.setState({gender: students.target.value});
    }
    changeDateOfBirthHandler = (students)=> {
        this.setState({dateOfBirth: students.target.value});
    }
    changeMobileNumberHandler = (students)=> {
        this.setState({mobileNumber: students.target.value});
    }
    changeEmailHandler = (students)=> {
        this.setState({email: students.target.value});
    }
    changeAddressHandler = (students)=> {
        this.setState({address: students.target.value});
    }
    changeGuardianNameHandler = (students)=> {
        this.setState({guardianName: students.target.value});
    }
    changeGuardianRelationshipHandler = (students)=> {
        this.setState({guardianRelationship: students.target.value});
    }
    changeGuardianMobileNumberHandler = (students)=> {
        this.setState({guardianMobileNumber: students.target.value});
    }
    changeGuardianEmailHandler = (students)=> {
        this.setState({guardianEmail: students.target.value});
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
                    <div className="col-sm-3">
                        <AdminSideNavBar/>
                    </div>
                    <div className="col-sm-9">
                        <nav className="navbar navbar-expand-lg navbar-light bg-light">
                            <div className="container-fluid">
                                <a className="navbar-brand" href="#">Student Management</a>
                                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                                    <span className="navbar-toggler-icon"></span>
                                </button>
                                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                                    <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                                        <li className="nav-item">
                                            <a className="nav-link" href="#" data-bs-toggle="modal" data-bs-target="#staticBackdrop">Add Student</a>
                                        </li>
                                        <li className="nav-item">
                                            <a className="nav-link" href="/studentReport">Generate Reports</a>
                                        </li>
                                    </ul>
                                    <form className="d-flex">
                                        <input className="form-control me-2" type="search" placeholder="Filter by Class" aria-label="Search"/>
                                            <button className="btn btn-outline-success" type="submit">Search</button>
                                    </form>

                                </div>
                            </div>
                        </nav>
                        <br/>
                        <div className="container">
                            <div className="row">
                                {/*Header*/}
                                <h3>All Students</h3>
                            </div>
                        </div>
                        <div className="container" style={{overflowY: "scroll", height:"500px"}}>
                            <div className="row">
                                {/*Display Student Details*/}
                                        {
                                            this.state.students.map(
                                                students =>
                                                    <div className="col-md-4">
                                                        <div className="card mt-3 sellercard">
                                                            <div className="product text-center mt-3">
                                                                <div className="row">
                                                                    <div className="col-sm-4">
                                                                        <img src={imageUrl+students.image} style={{borderRadius:"50%",height:"150px",width:"150px"}}/>
                                                                    </div>
                                                                    <div className="col-sm-8">
                                                                        <h6 style={{fontWeight:"bold"}}>{students.firstName+" "+students.lastName}</h6>
                                                                        <div className="mt-3 info">
                                                                            <h6 style={{opacity:"0.8"}}>{students.admissionNumber}</h6>
                                                                        </div>
                                                                        <div className="cost mt-3 text-dark">
                                                                            <span style={{opacity:"0.8"}} className="text1 d-block mb-3">
                                                                                <i className="fas fa-phone p-2"></i>
                                                                                {"+94-"+students.mobileNumber}
                                                                            </span>
                                                                        </div>
                                                                        <div className="mt-3 info">
                                                                            <span style={{fontWeight:"bold"}} className="text1 d-block mb-3">{students.section + " "+students.className} </span>
                                                                        </div>
                                                                    </div>
                                                                    <div className="row">
                                                                                    <span style={{opacity:"0.8"}} className="text1 d-block mb-3">
                                                                                        <i className="far fa-envelope p-2"></i>
                                                                                        {students.email}
                                                                                    </span>
                                                                        <div className="col-md-6">
                                                                            <div className="p-3 text-center text-white mt-2 cursor">
                                                                                <button className="btn btn-warning btn-block">
                                                                                    <i className="fas fa-search"></i>&nbsp;
                                                                                    View
                                                                                </button>
                                                                            </div>
                                                                        </div>
                                                                        <div className="col-md-6">
                                                                            <div className="p-3 text-center text-white mt-2 cursor">
                                                                                <button className="btn btn-danger btn-block" onClick={ () => this.deleteStudent(students._id)}>
                                                                                    <i className="fas fa-trash-alt"></i>&nbsp;
                                                                                    Delete
                                                                                </button>
                                                                            </div>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                            )
                                        }
                            </div>
                        </div>
                        <div className="row">
                            <br/><br/><br/><br/><br/>
                        </div>
                        {/*Add Student Interface*/}
                        <div className="container">
                            <div className="row">
                                <div className="modal fade" id="staticBackdrop" data-bs-backdrop="static" data-bs-keyboard="false" tabIndex="-1" aria-labelledby="staticBackdropLabel" aria-hidden="true">
                                    <div className="modal-dialog">
                                        <div className="modal-content">
                                            <div className="modal-header">
                                                <h5 className="modal-title" id="staticBackdropLabel">Add New Student</h5>
                                            </div>
                                            <div className="modal-body">
                                                <form>
                                                    <center>
                                                        <div className="mb-3">
                                                            <label>Upload a photo</label>
                                                            <input className="form-control bg-warning mt-2 mb-3" type="file" name="image" onChange={this.changeImageHandler} />
                                                        </div>
                                                    </center>
                                                    <div className="mb-3">
                                                        <label className="form-label">
                                                            <i className="fa fa-user-o" aria-hidden="true"></i>&nbsp;
                                                            Student Info
                                                        </label>
                                                    </div>
                                                    <div className="mb-3">
                                                        <div className="input-group mb-3">
                                                            <span className="input-group-text" id="basic-addon1">
                                                                <i className="fa fa-lock" aria-hidden="true"></i></span>
                                                                    <input type="text" name="admissionNumber" id="admissionNumber" value={this.state.admissionNumber} onChange={this.changeAdmissionNumberHandler} placeholder="Admission Number" className="form-control"/>
                                                        </div>
                                                    </div>
                                                    <div className="row mt-2">
                                                        <div className="col-sm-6">
                                                            <input type="text" name="firstName" id="firstName" value={this.state.firstName} onChange={this.changeFirstNameHandler} placeholder="Firstname" className="form-control"/>
                                                        </div>
                                                        <div className="col-sm-6">
                                                            <input type="text" name="lastName" id="lastName" value={this.state.lastName} onChange={this.changeLastNameHandler} placeholder="Lastname" className="form-control"/>
                                                        </div>
                                                    </div>
                                                    <div className="row mt-2">
                                                        <div className="col-sm-6">
                                                            <input type="text" name="section" id="section" value={this.state.section} onChange={this.changeSectionHandler} placeholder="Section" className="form-control"/>
                                                        </div>
                                                        <div className="col-sm-6">
                                                            <input type="text" name="className" id="className" value={this.state.className} onChange={this.changeClassNameHandler} placeholder="Class" className="form-control"/>
                                                        </div>
                                                    </div>
                                                    <div className="row mt-2">
                                                        <div className="col-sm-6">
                                                            <div className="input-group mb-3">
                                                                <select className="custom-select-form-control" name="gender" id="gender" value={this.state.gender} onChange={this.changeGenderHandler} placeholder="Gender" style={{height: "38px", width: "100%"}}>
                                                                    <option selected>Gender</option>
                                                                    <option value="Male">Male</option>
                                                                    <option value="Female">Female</option>
                                                                </select>
                                                            </div>
                                                        </div>
                                                        <div className="col-sm-6">
                                                            <input type="date" name="dateOfBirth" id="dateOfBirth" value={this.state.dateOfBirth} onChange={this.changeDateOfBirthHandler} placeholder="Date of Birth" className="form-control"/>
                                                        </div>
                                                    </div>
                                                    <br/>
                                                    <div className="mb-3">
                                                        <label className="form-label">
                                                            Contact Info
                                                        </label>
                                                    </div>
                                                    <div className="row mt-2">
                                                        <div className="col-sm-6">
                                                            <div className="input-group mb-3">
                                                                <span className="input-group-text" id="basic-addon1">
                                                                    <i className="fa fa-phone" aria-hidden="true"></i>
                                                                </span>
                                                                <input type="text" name="mobileNumber" id="mobileNumber" value={this.state.mobileNumber} onChange={this.changeMobileNumberHandler} placeholder="Mobile Number" className="form-control"/>
                                                            </div>
                                                        </div>
                                                        <div className="col-sm-6">
                                                            <div className="input-group mb-3">
                                                                <span className="input-group-text" id="basic-addon1">
                                                                    @
                                                                </span>
                                                                <input type="email" name="email" id="email" value={this.state.email} onChange={this.changeEmailHandler} placeholder="Email" className="form-control"/>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div className="mb-3">
                                                        <div className="input-group mb-3">
                                                            <span className="input-group-text" id="basic-addon1">
                                                                <i className="fa fa-envelope-o" aria-hidden="true"></i>
                                                            </span>
                                                            <input type="text" name="address" id="address" value={this.state.address} onChange={this.changeAddressHandler} placeholder="Address" className="form-control"/>
                                                        </div>
                                                    </div>
                                                    <br/>
                                                    <div className="mb-3">
                                                        <label className="form-label">Parent/Guardian</label>
                                                    </div>
                                                    <div className="row mt-2">
                                                        <div className="col-sm-6">
                                                            <input type="text" name="guardianName" id="guardianName" value={this.state.guardianName} onChange={this.changeGuardianNameHandler} placeholder="Guardian Name" className="form-control"/>
                                                        </div>
                                                        <div className="col-sm-6">
                                                            <input type="text" name="guardianRelationship" id="guardianRelationship" value={this.state.guardianRelationship} onChange={this.changeGuardianRelationshipHandler} placeholder="Guardian Relationship"
                                                                   className="form-control"/>
                                                        </div>
                                                    </div>
                                                    <div className="row mt-2">
                                                        <div className="col-sm-6">
                                                            <div className="input-group mb-3">
                                                                <span className="input-group-text" id="basic-addon1">
                                                                    <i className="fa fa-phone" aria-hidden="true"></i>
                                                                </span>
                                                                    <input type="text" name="guardianMobileNumber" id="guardianMobileNumber" value={this.state.guardianMobileNumber} onChange={this.changeGuardianMobileNumberHandler} placeholder="Mobile Number" className="form-control"/>
                                                            </div>
                                                        </div>
                                                        <div className="col-sm-6">
                                                            <div className="input-group mb-3">
                                                                <span className="input-group-text" id="basic-addon1">@</span>
                                                                <input type="email" name="guardianEmail" id="guardianEmail" value={this.state.guardianEmail} onChange={this.changeGuardianEmailHandler} placeholder="Guardian Email" className="form-control"/>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </form>
                                            </div>
                                            <div className="modal-footer">
                                                <button type="button" className="btn btn-danger" data-bs-dismiss="modal">
                                                    <i className="fa fa-times" aria-hidden="true"></i>&nbsp;
                                                    Cancel
                                                </button>
                                                <button type="button" className="btn btn-primary" onClick={this.addStudent}><i className="fa fa-floppy-o" aria-hidden="true"></i>&nbsp;
                                                    Save
                                                </button>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default AdminStudentDashboard;