import React, {Component} from 'react';

class Index extends Component {
    render() {
        return (
            <div className={"indexBody"}>
                <div className={"row"}>
                    <div className="col-sm-5 m-5">
                        <h1 className={"topic"}>Kidz School Management System</h1>
                        <a href={"/login"}>
                            <div className=" m-3 col-sm-3 getStartBtn">
                                <h6>Get Started</h6>
                            </div>
                        </a>
                    </div>
                </div>
                {/*<div className="row map">*/}
                {/*    <iframe  src="https://maps.wrld3d.com/embed/?mapscene=bc7d3f6"></iframe>*/}
                {/*</div>*/}
            </div>
        );
    }
}

export default Index;