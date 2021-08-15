import React, {Component} from 'react';
import AdminSideNavBar from "./Admin-SideNavBar";

class AddNotices extends Component {
    render() {
        return (
            <div>
                <AdminSideNavBar/>
                <button type="button" className="btn btn-primary" data-bs-toggle="modal"
                        data-bs-target="#staticBackdropNotice">
                    Add New Notice
                </button>
                <div className="modal fade" id="staticBackdropNotice" data-bs-backdrop="static" data-bs-keyboard="false"
                     tabIndex="-1" aria-labelledby="staticBackdropLabelNotice" aria-hidden="true">
                    <div className="modal-dialog">
                        <div className="modal-content">
                            <div className="modal-header">
                                <h5 className="modal-title" id="staticBackdropLabelNotice">Add New Notice</h5>
                            </div>
                            <div className="modal-body">
                                <form>
                                    <div className="mb-3">
                                        <label className="form-label"><i className="fa fa-user-o"
                                                                         aria-hidden="true"></i>&nbsp;
                                            Notice Info
                                        </label>
                                    </div>
                                    <div className="mb-3">
                                        <div className="input-group mb-3">
                                            <input type="email" placeholder="Enter Title Here"
                                                   className="form-control"/>
                                        </div>
                                    </div>
                                    <div className="mb-3">
                                        <div className="input-group mb-3">
                                            <input type="email" placeholder="Description"
                                                   className="form-control"/>
                                        </div>
                                    </div>
                                </form>
                            </div>
                            <div className="modal-footer">
                                <button type="button" className="btn btn-danger" data-bs-dismiss="modal">
                                    <i className="fa fa-times" aria-hidden="true"></i>&nbsp;
                                    Cancel
                                </button>
                                <button type="button" className="btn btn-primary"><i className="fa fa-floppy-o"
                                                                                     aria-hidden="true"></i>&nbsp;
                                    Save
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default AddNotices;