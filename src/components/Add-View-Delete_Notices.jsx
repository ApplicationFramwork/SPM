import React, {Component} from 'react';
import AdminSideNavBar from "./Admin-SideNavBar";
import axios from "axios";
import SchoolManagementSystemServices from "../services/SchoolManagementSystemServices";
const imageUrl = "http://localhost:8070/uploads/";
class AddViewDeleteNotices extends Component {
    constructor(props){
        super(props)
        this.state = {
            notices: [],
            image: '',
            title: '',
            description: ''
        }
        this.changeTitleHandler = this.changeTitleHandler.bind(this);
        this.changeDescriptionHandler = this.changeDescriptionHandler.bind(this);

    }
    addNotice = (e) => {
        e.preventDefault();
        const formData = new FormData();
        formData.append('image', this.state.image);
        formData.append('title', this.state.title);
        formData.append('description', this.state.description);
        const config = {
            headers: {
                'content-type': 'multipart/form-data'
            }
        };
        const refreshPage = () => {
            window.location.reload();
        }
        axios.post("http://localhost:8070/notices/addNotices", formData, config).then(res => {
            this.props.history.push('/notices');
            refreshPage();
        })
    }
    delete(id){
       SchoolManagementSystemServices.deleteNotice(id).then(res=>{
            this.setState({notices: this.state.notices.filter(notice => notice._id !==id)});
        })
    }
    componentDidMount(){
        SchoolManagementSystemServices.getAllNotices().then((res) => {
            this.setState({ notices: res.data});
        });
    }
    changeImageHandler = (notices)=> {
        this.setState({image: notices.target.files[0]});
    }
    changeTitleHandler = (notices)=> {
        this.setState({title: notices.target.value});
    }
    changeDescriptionHandler = (notices)=> {
        this.setState({description: notices.target.value});
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
                                <a className="navbar-brand" href="#">Notices Management</a>
                                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                                    <span className="navbar-toggler-icon"></span>
                                </button>
                                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                                    <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                                        <li className="nav-item">
                                            <a className="nav-link" href="#" data-bs-toggle="modal" data-bs-target="#staticBackdropNotice">Add Notice</a>
                                        </li>
                                        <li className="nav-item">
                                            <a className="nav-link" href="#">View Notices</a>
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
                                <h3>All Notices</h3>
                            </div>
                        </div>
                        <div className="container" style={{overflowY: "scroll", height:"500px"}}>
                            <div className="row">
                                {
                                    this.state.notices.map(
                                        notices =>
                                            <div className="col-md-4">
                                                <div className="card mt-3 sellercard p-2" style={{height:"95%"}}>
                                                    <div className="product text-center mt-3">
                                                        <div className="mt-3 info">
                                                            <img src={imageUrl+notices.image} style={{height:"200px",width:"100%"}}/>
                                                        </div>
                                                        <div className="mt-3 info">
                                                            <h5>{notices.title}</h5>
                                                        </div>
                                                        <div className="mt-3 info">
                                                            <span className="text1 d-block mb-3">{notices.description}</span>
                                                        </div>
                                                    </div>
                                                    <div className="row mt-8">
                                                        <div className="col-md-6">
                                                            <div className="p-3 text-center text-white mt-2 cursor">
                                                                <button className="btn btn-warning btn-block">
                                                                    <i className="fas fa-edit"></i>&nbsp;
                                                                    View
                                                                </button>
                                                                <br/>
                                                            </div>
                                                        </div>
                                                        <div className="col-md-6">
                                                            <div className="p-3 text-center text-white mt-2 cursor">
                                                                <button className="btn btn-danger btn-block" onClick={ () => this.delete(notices._id)}>
                                                                    <i className="fas fa-edit"></i>&nbsp;
                                                                    Delete
                                                                </button>
                                                                <br/>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                    )
                                }
                             <br/>
                            </div>
                        </div>
                        <div className="row">
                            <br/><br/><br/><br/><br/>
                        </div>

                        <div className="container">
                            <div className="row">
                                {/*Add New Notice Interface Pop Up*/}
                                <div className="modal fade" id="staticBackdropNotice" data-bs-backdrop="static" data-bs-keyboard="false" tabIndex="-1" aria-labelledby="staticBackdropLabelNotice" aria-hidden="true">
                                    <div className="modal-dialog">
                                        <div className="modal-content">
                                            <div className="modal-header">
                                                <h5 className="modal-title" id="staticBackdropLabelNotice">Add New Notice</h5>
                                            </div>
                                            <div className="modal-body">
                                            <form>
                                                <center>
                                                    <div className="mb-3">
                                                        <label>Choose Media</label>
                                                        <input className="form-control bg-warning mt-2 mb-3" type="file" name="image" onChange={this.changeImageHandler} />
                                                    </div>
                                                </center>
                                                <div className="mb-3">
                                                    <label className="form-label"><i className="fa fa-user-o" aria-hidden="true"></i>&nbsp;
                                                        Notice Info
                                                    </label>
                                                </div>
                                                <div className="mb-3">
                                                    <div className="input-group mb-3">
                                                        <input type="text" name="title" id="title" value={this.state.title} onChange={this.changeTitleHandler} placeholder="Enter Title Here" className="form-control"/>
                                                    </div>
                                                </div>
                                                <div className="mb-3">
                                                    <div className="input-group mb-3">
                                                        <textarea type="text" name="description" id="description" value={this.state.description} onChange={this.changeDescriptionHandler} placeholder="Description" className="form-control" />
                                                        {/*<input type="text" name="description" id="description" value={this.state.description} onChange={this.changeDescriptionHandler} placeholder="Description" className="form-control"/>*/}
                                                    </div>
                                                </div>
                                            </form>
                                        </div>
                                        <div className="modal-footer">
                                            <button type="button" className="btn btn-danger" data-bs-dismiss="modal">
                                                <i className="fa fa-times" aria-hidden="true"></i>&nbsp;
                                                Cancel
                                            </button>
                                            <button type="button" onClick={this.addNotice} className="btn btn-primary"><i className="fa fa-floppy-o" aria-hidden="true"></i>&nbsp;
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

export default AddViewDeleteNotices;