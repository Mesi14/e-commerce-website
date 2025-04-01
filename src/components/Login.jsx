import '../styles/Login.css'
import { useContext, useState } from "react";
import { LoginContext } from "../context/login";
import { useNavigate } from "react-router";

const Login = () => {
  const {setAuthenticationStatus} = useContext(LoginContext)
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const navigateTo = useNavigate();

  const handleLogin = (e) => {
    e.preventDefault();
    
    if (username === 'mesi' && password === 'mesi') {
      setAuthenticationStatus(true); 
      navigateTo('/');
    } else {
        console.error('Invalid username or password');
    }
};

return (
  <div className="login">
    <h1>Login</h1>
    <form className="loginform" onSubmit={handleLogin}>
      <div data-mdb-input-init className="form-outline mb-4">
        <input type="text" id="username" className="form-control" onChange={(e) => setUsername(e.target.value)} />
        <label className="form-label" htmlFor="username">Username</label>
      </div>
      <div data-mdb-input-init className="form-outline mb-4">
        <input type="password" id="pass" className="form-control" onChange={(e) => setPassword(e.target.value)} />
        <label className="form-label" htmlFor="pass">Password</label>
      </div>
      <div className="row mb-4">
        <div className="col d-flex justify-content-center">
          <div className="form-check">
            <input className="form-check-input" type="checkbox" value="" id="form2Example31" defaultChecked />
            <label className="form-check-label" htmlFor="form2Example31"> Remember me </label>
          </div>
        </div>
        <div className="col">
          <a href="#!">Forgot password?</a>
        </div>
      </div>
      <button  type="submit" data-mdb-button-init data-mdb-ripple-init className="btn btn-primary btn-block loginBtn mb-4">Sign in</button>
      <div className="text-center">
        <p>Not a member? <a href="#!">Register</a></p>
        <p>or sign up with:</p>
        <button  type="button" data-mdb-button-init data-mdb-ripple-init className="btn btn-link btn-floating mx-1">
          <i className="bi bi-facebook"></i>
        </button>

        <button  type="button" data-mdb-button-init data-mdb-ripple-init className="btn btn-link btn-floating mx-1">
          <i className="bi bi-google"></i>
        </button>

        <button  type="button" data-mdb-button-init data-mdb-ripple-init className="btn btn-link btn-floating mx-1">
          <i className="bi bi-twitter"></i>
        </button>

        <button  type="button" data-mdb-button-init data-mdb-ripple-init className="btn btn-link btn-floating mx-1">
          <i className="bi bi-github"></i>
        </button>
      </div>
    </form>
  </div>
);
}

export default Login;
