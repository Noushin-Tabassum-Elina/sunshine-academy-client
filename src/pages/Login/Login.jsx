import React, { useContext } from 'react';
import { Helmet } from 'react-helmet-async';
import { AuthContext } from '../../providers/AuthProvider';
import Swal from 'sweetalert2';
import { Link, useLocation, useNavigate } from 'react-router-dom';

const Login = () => {
  const { signIn } = useContext(AuthContext);
  const navigate = useNavigate();
  const location = useLocation();
  const from = location.state?.from?.pathname || "/";

  const handleLogin = event => {
    event.preventDefault();
    const form = event.target;
    const email = form.email.value;
    const password = form.password.value;
    console.log(email, password);
    signIn(email, password)
      .then(result => {
        const user = result.user;
        console.log(user);
        Swal.fire({
          title: 'User Login Successful.',
          showClass: {
            popup: 'animate__animated animate__fadeInDown'
          },
          hideClass: {
            popup: 'animate__animated animate__fadeOutUp'
          }
        });
        navigate(from, { replace: true });
      });
  };

  return (
    <>
      <Helmet>
        <title>Sunshine Academy | Login</title>
      </Helmet>
      <div
        className="hero min-h-screen bg-orange-200 pt-10"
        style={{
          backgroundImage: "url('https://i.ibb.co/7N7f9fJ/boys-3350811-1280.webp')",
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      >
        <div className="hero-content flex-col md:flex-row-reverse mt-10">
          <div className="card shadow-2xl bg-transparent bg-opacity-5">
            <h3 className='text-2xl font-extrabold p-2 mt-6 text-pink-800'><i>Login to SunShine Academy</i></h3>
            <form onSubmit={handleLogin} className="card-body">
              <div className="form-control ">
                <label className="label">
                  <span className="label-text text-pink-900">Email</span>
                </label>
                <input type="email" name="email" placeholder="email" className="input input-bordered" />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text text-pink-900">Password</span>
                </label>
                <input type="password" name="password" placeholder="password" className="input input-bordered" />
                <label className="label">
                  <a href="#" className="label-text-alt link link-hover text-pink-900">Forgot password?</a>
                </label>
              </div>
    
              <div className="form-control mt-6">
                <input disabled={false} className="btn text-white hover:bg-pink-500 bg-pink-800" type="submit" value="Login" />
              </div>
            </form>
            <p className='p-4 text-center text-pink-800'>
              <small>New Here? <Link to="/signup">Create an account</Link></small>
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Login;
