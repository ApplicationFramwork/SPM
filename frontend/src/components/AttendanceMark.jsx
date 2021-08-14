import React, {Component} from 'react';
import Adm from "./Admin-SideNavBar";
import AdminHeader from "./AdminHeader";

class AttendanceMark extends Component {
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

                </div>
                {/*    End Second column*/}
            </div>
        );
    }
}

export default AttendanceMark;