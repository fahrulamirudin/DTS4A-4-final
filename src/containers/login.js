import { signInWithEmailAndPassword } from 'firebase/auth';
import * as React from 'react';
import { Fragment } from 'react';
import { Link, useNavigate } from 'react-router-dom';

import useUserStore, { selectErrorLogin, selectOnLogin, selectUserReady } from '../store/user';

const Login = () => {
    const navigate = useNavigate();
    const onLogin = useUserStore(selectOnLogin);
    const userReady = useUserStore(selectUserReady);
    const errorLogin = useUserStore(selectErrorLogin);

    const handleSubmit = async (event) => {
        event.preventDefault();
        const data = new FormData(event.currentTarget);
        const email = data.get('email');
        const password = data.get('password');

        await onLogin(email, password);

        if (userReady) {
            navigate("/");
        }
    };

    return (
        <Fragment>
            {/* <HeaderLogin /> */}
            <div className="binduz-er-contact-us-area">
                <div className=" container">
                    <div className="row">
                        <div className=" col-lg-12">
                            <div className="binduz-er-contact-us-box">
                                <form onSubmit={handleSubmit}>
                                    <div className="binduz-er-contact-title">
                                    <br></br>
                                    <br></br>
                                    <br></br>
                                    <br></br>
                                        <center><h4>Halaman Login</h4></center>
                                        <br></br>
                                        <center><p>Belum Punya Akun ? Silahkan Daftar <a href={"/register"} key={"register"}>Disini</a></p></center>
                                    </div>
                                    <div className="row">
                                        <div className=" col-lg-12">
                                            <div className="binduz-er-input-box">
                                                <input type="email" name="email" placeholder="Email Anda"/>
                                                    <i className="fal fa-user"></i>
                                            </div>
                                        </div>
                                        <div className=" col-lg-12">
                                            <div className="binduz-er-input-box">
                                                <input type="text" id="password" name="password" placeholder="Password Anda"/>
                                                    <i className="fal fa-key"></i>
                                            </div>
                                        </div>
                                        <span className='bg-danger'>{selectErrorLogin}</span>
                                    </div>
                                    <button type='submit' className="binduz-er-main-btn">Masuk</button> 
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </Fragment>

    );
}

export default Login;