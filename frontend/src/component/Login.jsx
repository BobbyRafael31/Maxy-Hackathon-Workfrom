import React, {useState, useEffect} from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { LoginUser, reset} from '../features/AuthSlice';


import UserNavBar from '../component/UserNavBar.jsx';
import './Login.css';

export const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { user, isError, isSuccess, isLoading, message } = useSelector(
    (state) => state.auth
  );

  useEffect(() => {
    if (user || isSuccess) {
      navigate("/dashboard");
    }
    dispatch(reset());
  }, [user, isSuccess, dispatch, navigate]);

  const Auth = (e) => {
    e.preventDefault();
    dispatch(LoginUser({ email, password }));
  };
  return (
    <div>
      <UserNavBar />
      <section className="hero has-background-black is-fullheight is-fullwidth">
        <div className="hero-body">
          <div className="container">
          <div className="has-text-centered">
                <h1 className="title is-1 has-text-weight-bold has-text-white">Welcome Back!</h1>
                <h2 className="subtitle is-4 has-text-white">Login to your account</h2>
            </div>
            <div className="columns is-centered">
              <div className="columns is-4">
                <form onSubmit={Auth} className='box login-form has-background-black'>
                  { isError && <p className='has-text-centered has-text-white'>{message}</p>}
                  <div className='field'> 
                    <label className='label has-text-white has-text-weight-light'>Enter Your Email</label>
                    <div className='control'>
                      <input type="text" className='input' value={email} onChange={(e)=>setEmail(e.target.value)} placeholder='Email' />
                    </div>
                  </div>

                  <div className='field '>
                    <label className='label has-text-white has-text-weight-light'>Enter Your Password</label>
                    <div className='control'>
                      <input type="password" className='input' value={password} onChange={(e)=>setPassword(e.target.value)} placseholder='*****' />
                    </div>
                  </div>

                  <div className='field bottom'>
                    <button type="submit" className='button is-primary is-fullwidth is-rounded has-text-black has-text-weight-bold' style={{ backgroundColor: '#d2fa9a' }}>
                      {isLoading ? "Loading.." : "Login"}
                    </button>
                  </div>
                </form>
              </div>
            </div>
            <div className="has-text-centered">
                <p className="is-3 has-text-weight-light has-text-white ">Don't have an account? <a href=':#' style={{ color: '#d2fa9a' }}> Register Now!</a></p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}