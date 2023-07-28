import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../provider/AuthProvider';

const SignUp = () => {
    const { handleCreateUser } = useContext(AuthContext)

    // Create User
    const handleSignUp = event => {
        event.preventDefault();

        const form = event.target;
        const name = form.name.value;
        const email = form.email.value;
        const password = form.password.value;
        const photo = form.photo.value;

        handleCreateUser(email, password)
            .then(res => {
                const createUser = res.user;
                console.log(createUser);
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
                    <h1 className="text-5xl font-bold text-center mt-4">Sign Up!</h1>
                    <form onSubmit={handleSignUp}>
                        <div className="card-body">
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Name</span>
                                </label>
                                <input type="text" name='name' placeholder="name" className="input input-bordered" required />
                            </div>
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
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Photo URL</span>
                                </label>
                                <input type="text" name='photo' placeholder="photo" className="input input-bordered" required />
                            </div>
                            <div className="form-control mt-6">
                                <input type="submit" value="Sign Up" className='btn btn-outline btn-accent' />
                            </div>
                            <p className='text-center mt-3'>Have an account? <Link to='/login' className='text-accent'>Login</Link></p>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default SignUp;