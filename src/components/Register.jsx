import React, { useState, useContext } from 'react';
import { useNavigate } from 'react-router';
import { LoginContext } from "../context/login";
import "../styles/Register.css";

const Register = () => {
  const [newUsername, setNewUsername] = useState('');
  const [newPassword, setNewPassword] = useState('');
  const { login } = useContext(LoginContext);
  const navigateTo = useNavigate();

  const handleRegister = () => {
    if (newUsername && newPassword) {
      localStorage.setItem(newUsername, newPassword);
      login(newUsername, newPassword); 
      navigateTo('/'); 
    } else {
      alert('Both fields are mandatory!');
    }
  };

  return (
    <section className="vh-100 bg-image">
      <div className="mask d-flex align-items-center h-100 gradient-custom-3">
        <div className="container h-100">
          <div className="row d-flex justify-content-center align-items-center h-100">
            <div className="col-12 col-md-9 col-lg-7 col-xl-6">
              <div className="card createAccount">
                <div className="card-body p-5">
                  <h2 className="text-uppercase text-center mb-5">Create an account</h2>
                  <form className="registrationForm">
                    <div data-mdb-input-init className="form-outline mb-4">
                      <input type="text" id="form3Example1cg" className="form-control form-control-lg" />
                      <label className="form-label" for="form3Example1cg">Your Name</label>
                    </div>
                    <div data-mdb-input-init className="form-outline mb-4">
                      <input type="password" id="form3Example4cg" className="form-control form-control-lg" />
                      <label className="form-label" for="form3Example4cg">Password</label>
                    </div>
                    <div data-mdb-input-init className="form-outline mb-4">
                      <input type="password" id="form3Example4cdg" className="form-control form-control-lg" />
                      <label className="form-label" for="form3Example4cdg">Repeat your password</label>
                    </div>
                    <div className="form-check d-flex justify-content-center mb-5">
                      <input className="form-check-input me-2" type="checkbox" value="" id="form2Example3cg" />
                      <label className="form-check-label" for="form2Example3g">
                        I agree all statements in <a href="#!" className="text-body"><u>Terms of service</u></a>
                      </label>
                    </div>
                    <div className="d-flex justify-content-center">
                      <button  type="button" data-mdb-button-init
                        data-mdb-ripple-init className="btn btn-success btn-block btn-lg text-body">Register</button>
                    </div>
                    <p className="text-center text-muted mt-5 mb-0">Have already an account? <a href="#!"
                        className="fw-bold text-body"><u>Login here</u></a></p>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
    // <div>
    //   <h1>Register</h1>
    //   <input
    //     type="text"
    //     placeholder="New Username"
    //     value={newUsername}
    //     onChange={(e) => setNewUsername(e.target.value)}
    //   />
    //   <input
    //     type="password"
    //     placeholder="New Password"
    //     value={newPassword}
    //     onChange={(e) => setNewPassword(e.target.value)}
    //   />
    //   <button onClick={handleRegister}>Register</button>
    // </div>
  );
};

export default Register;
