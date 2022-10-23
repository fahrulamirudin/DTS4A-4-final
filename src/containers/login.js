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
                                        <h4 className="binduz-er-title">Login</h4>
                                    </div>
                                    <div className="row">
                                        <div className=" col-lg-12">
                                            <div className="binduz-er-input-box">
                                                <input type="email" name="email" placeholder="Enter Email"/>
                                                    <i className="fal fa-user"></i>
                                            </div>
                                        </div>
                                        <div className=" col-lg-12">
                                            <div className="binduz-er-input-box">
                                                <input type="password" id="password" name="password" placeholder="Enter Password"/>
                                                    <i className="fal fa-envelope"></i>
                                            </div>
                                        </div>
                                        <span className='bg-danger'>{errorLogin}</span>
                                    </div>
                                    <button type='submit' className="binduz-er-main-btn">Submit</button>
                                </form>
                            </div>
                        </div>
                    </div>
                    <div className="row pt-90">
                        <div className=" col-lg-4">
                            <div className="binduz-er-contact-info-box">
                                <h3 className="binduz-er-title">Corporate Office</h3>
                                <ul>
                                    <li>Address: <span>Lorem 142 Str., 2352, Pro State, USA</span></li>
                                    <li>Phone: <span>+33-257634 534</span></li>
                                    <li>Email: <span>info@webexample.com</span></li>
                                </ul>
                                <a className="binduz-er-main-btn" href="#">Make A Call</a>
                            </div>
                        </div>
                        <div className=" col-lg-4">
                            <div className="binduz-er-contact-info-box">
                                <h3 className="binduz-er-title">Main HQ</h3>
                                <ul>
                                    <li>Address: <span>Lorem 142 Str., 2352, Pro State, USA</span></li>
                                    <li>Phone: <span>+33-257634 534</span></li>
                                    <li>Email: <span>info@webexample.com</span></li>
                                </ul>
                                <a className="binduz-er-main-btn active" href="#">Make A Call</a>
                            </div>
                        </div>
                        <div className=" col-lg-4">
                            <div className="binduz-er-contact-info-box">
                                <h3 className="binduz-er-title">Advertise</h3>
                                <ul>
                                    <li>Address: <span>Lorem 142 Str., 2352, Pro State, USA</span></li>
                                    <li>Phone: <span>+33-257634 534</span></li>
                                    <li>Email: <span>info@webexample.com</span></li>
                                </ul>
                                <a className="binduz-er-main-btn" href="#">Make A Call</a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </Fragment>

    );
}

export default Login;