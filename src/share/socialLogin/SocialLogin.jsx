import React, { useContext } from 'react';
import { AuthContext } from '../../provider/AuthProvider';
import { FaGoogle } from "react-icons/fa6";

const SocialLogin = () => {
    const { googleLogin } = useContext(AuthContext);


    //Google Login
    const handleGoogleLogin = () => {
        googleLogin()
            .then(res => {
                console.log(res.user);
            })
            .catch(err => {
                console.log(err);
            })
    }


    return (
        <div className='mb-6'>
            <div className="divider">OR</div>
            <button onClick={handleGoogleLogin} className='btn btn-accent ml-20'><FaGoogle className='text-red-600 text-2xl' /> SignIn With Google</button>
        </div>
    );
};

export default SocialLogin;