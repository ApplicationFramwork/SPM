import React, {Component} from 'react';

class IndexHeader extends Component {
    render() {
        return (
            <div className="container-fluid">
                <div className="row indexHeader pt-3">
                    <div className="col-sm-6 dash-head  mt-2 mb-2  text-light">
                        <center>
                            <h1 className="topicRowHeader">KIDZ SCHOOL</h1>
                            <small className="ULlist" href={"/"}><a className="text-light" >Home</a></small>
                            <small className="ULlist" href={"/about"}><a className="text-light" >About us</a></small>
                            <small className="ULlist"><a className="text-light" >Contact us</a></small>
                        </center>
                    </div>
                </div>
            </div>
        );
    }
}

export default IndexHeader;