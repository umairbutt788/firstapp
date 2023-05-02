import React from "react";

class Signup extends React.Component {
    constructor(){
        super();
        this.state={
            employeeData : []
        }
    }

    handleSubmit= (e) =>{
        e.preventDefault();
        let employeeData = this.state.employeeData;
        let email = this.refs.txtEmail.value;
        let password = this.refs.txtPassword.value;
        let confirm = this.refs.txtPassword.value;

        let newUser = {
            "email" :  email,
            "password" : password,
            "confirm" : confirm,
        }

        employeeData.push(newUser);
        this.setState({
            employeeData : employeeData
        })

        this.refs.myForm.reset();
    }
    render() {
        let employeeData = this.state.employeeData;
        return (
            <>
                <section className="sign-in-form section-padding">
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-8 mx-auto col-12">
                                <h1 className="hero-title text-center mb-5">Sign Up</h1>
                                <div className="social-login d-flex flex-column w-50 m-auto">
                                    <a href="#" className="btn custom-btn social-btn mb-4">
                                        <i className="bi bi-google me-3" />
                                        Continue with Google
                                    </a>
                                    <a href="#" className="btn custom-btn social-btn">
                                        <i className="bi bi-facebook me-3" />
                                        Continue with Facebook
                                    </a>
                                </div>
                                <div className="div-separator w-50 m-auto my-5"><span>or</span></div>
                                <div className="row">
                                    <div className="col-lg-8 col-11 mx-auto">
                                        <form role="form" method="post" ref="myForm">
                                            <div className="form-floating">
                                                <input type="email" name="email" id="email" ref="txtEmail" pattern="[^ @]*@[^ @]*" className="form-control" placeholder="Email address" required />
                                                <label htmlFor="email">Email address</label>
                                            </div>
                                            <div className="form-floating my-4">
                                                <input type="password" name="password" id="password" ref="txtPassword" pattern="[0-9a-zA-Z]{4,10}" className="form-control" placeholder="Password" required />
                                                <label htmlFor="password">Password</label>
                                                <p className="text-center">* shall include 0-9 a-z A-Z in 4 to 10 characters</p>
                                            </div>
                                            <div className="form-floating">
                                                <input type="password" name="confirm_password" id="confirm_password" ref="txtConfirm" pattern="[0-9a-zA-Z]{4,10}" className="form-control" placeholder="Password" required />
                                                <label htmlFor="confirm_password">Password Confirmation</label>
                                            </div>
                                            <button type="submit" className="btn custom-btn form-control mt-4 mb-3" onClick={e => this.handleSubmit(e)}>
                                                Create account
                                            </button>
                                            <p className="text-center">Already have an account? Please <a href="login">Sign In</a></p>
                                        </form>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <table>
                            <tr>
                                <th>Email Address</th>
                                <th>Password</th>
                                <th>Password Confirmation</th>
                            </tr>
                            {
                                employeeData.map( (data, i) =>
                                <tr key={i}>
                                    <td>{data.email}</td>
                                    <td>{data.password}</td>
                                    <td>{data.confirm}</td>
                                </tr>)
                            }
                        </table>
                    </div>
                </section>

            </>
        )
    }
}
export default Signup;