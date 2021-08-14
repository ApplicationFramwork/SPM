import React, {Component} from 'react';
import img1 from "../images/img_s1.png"
import img2 from "../images/img_s2.png"
import img3 from "../images/img_s3.png"

class Login extends Component {
    render() {
        return (
            <div className="login-body">
                <div className="row">
                    <div className="col-sm-4">
                        <center>
                            <h3 className="WelcomeText">Welcome Back</h3>
                            <h6 className="bodyText">This School Management Software has been designed to streamline school management and administrative functions through Information and Communication Technology .</h6>
                            <div id="carouselExampleControls" style={{width:"60%"}} className="carousel slide" data-ride="carousel">
                                <ol className="carousel-indicators">
                                    <li data-target="#carouselExampleIndicators" data-slide-to="0"
                                        className="active text-dark"></li>
                                    <li data-target="#carouselExampleIndicators" data-slide-to="1"></li>
                                    <li data-target="#carouselExampleIndicators" data-slide-to="2"></li>
                                </ol>
                                <div className="carousel-inner">
                                    <div className="carousel-item active">
                                        <img className="d-block w-100" src={img1} alt="First slide" />
                                    </div>
                                    <div className="carousel-item">
                                        <img className="d-block w-100" src={img2} alt="Second slide" />
                                    </div>
                                    <div className="carousel-item">
                                        <img className="d-block w-100" src={img3} alt="Third slide" />
                                    </div>
                                </div>
                                <a className="carousel-control-prev" href="#carouselExampleControls" role="button"
                                   data-slide="prev">
                                    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                                    <span className="sr-only">Previous</span>
                                </a>
                                <a className="carousel-control-next" href="#carouselExampleControls" role="button"
                                   data-slide="next">
                                    <span className="carousel-control-next-icon" aria-hidden="true"></span>
                                    <span className="sr-only">Next</span>
                                </a>
                            </div>
                        </center>
                    </div>
                    <div className="col-sm-7 signinText">
                        <h1 className="">Sign in</h1>
                        <center>
                            <form action="#">
                                <input type="text" placeholder="User Name" className="form-control loginInputs mt-2"/> <br/>
                                <input type="password" placeholder="Password" className="form-control loginInputs mt-2"/> <br/>
                                <a href="#"> <small className="text-secondary">Forgot your password ? </small> </a> <br/>
                                <button type="button" className=" mt-2 btn-lg btn-signin">SIGN IN</button>
                            </form>
                        </center>

                    </div>
                </div>
            </div>
        );
    }
}

export default Login;