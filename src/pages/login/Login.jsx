import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../provider/AuthProvider';
import SocialLogin from '../../share/socialLogin/SocialLogin';

const Login = () => {
    const { handleLoginUser } = useContext(AuthContext);



    // Login User
    const handleLogin = event => {
        event.preventDefault();

        const form = event.target;
        const email = form.email.value;
        const password = form.password.value;

        handleLoginUser(email, password)
            .then(res => {
                const loggedUser = res.user;
                console.log(loggedUser);
            })
            .catch(err => {
                console.log(err.message);
            })
    }
    return (
        <div className="hero min-h-screen bg-gradient-to-r from-pink-100 to-purple-100 mb-12 rounded-3xl">
            <div className="hero-content flex-col lg:flex-row-reverse gap-64">
                <div className="text-center lg:text-left">
                    <img className='h-[496px] w-[480px] rounded-3xl shadow-2xl' src="https://img.freepik.com/free-vector/login-concept-illustration_114360-739.jpg?w=2000" alt="" />
                </div>
                <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
                    <h1 className="text-5xl font-bold text-center mt-4">Login!</h1>
                    <form onSubmit={handleLogin}>
                        <div className="card-body">
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Email</span>
                                </label>
                                <input type="text" name='email' placeholder="email" className="input input-bordered" required />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Password</span>
                                </label>
                                <input type="password" name='password' placeholder="password" className="input input-bordered" required />
                            </div>
                            <div className="form-control mt-6">
                                <input type="submit" value="Login" className='btn btn-outline btn-accent' />
                            </div>
                        </div>
                    </form>
                    <p className='text-center'>New to here? <Link to='/signUp' className='text-accent'>Sign Up</Link></p>

                    {/* SocialLogin */}
                    <SocialLogin />
                </div>
            </div>
        </div>
    );
};

export default Login;