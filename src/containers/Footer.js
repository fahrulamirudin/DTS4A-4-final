import React, { Fragment } from 'react';
function Footer() {
    return (
        <Fragment>
            <footer className="binduz-er-footer-2-area">
                <div className="container">
                    <div className="row">
                        <div className=" col-lg-12">
                            <div className="binduz-er-footer-box">
                                <div className="row">
                                    <div className=" col-lg-4">
                                        <div className="binduz-er-footer-about text-center">
                                            <div className="binduz-er-logo">
                                                <a href="#"><img src="assets/images/logo-4.png" alt="" /></a>
                                            </div>
                                            <p>Pusat Informasi Game Terbaru </p>
                                            <ul>
                                                <li><a href="#"><i className="fab fa-facebook-f"></i></a></li>
                                                <li><a href="#"><i className="fab fa-twitter"></i></a></li>
                                                <li><a href="#"><i className="fab fa-linkedin-in"></i></a></li>
                                                <li><a href="#"><i className="fab fa-behance"></i></a></li>
                                            </ul>
                                        </div>
                                    </div>
                                    <div className=" col-lg-4">
                                        <div className="binduz-er-footer-navigation">
                                            <div className="binduz-er-footer-title">
                                                <h3 className="binduz-er-title">Company Info</h3>
                                            </div>
                                            <div className="binduz-er-footer-list">
                                                <ul>
                                                    <li><a href="#">About us</a></li>
                                                    <li><a href="#">Terms of Service</a></li>
                                                    <li><a href="#">Contact us</a></li>
                                                    <li><a href="#">Local print ads</a></li>
                                                    <li><a href="#">FAQ</a></li>
                                                    <li><a href="#">Media kit</a></li>
                                                </ul>
                                                <ul>
                                                    <li><a href="#">Careers</a></li>
                                                    <li><a href="#">Privacy Policy</a></li>
                                                    <li><a href="#">Archives</a></li>
                                                    <li><a href="#">Coupons</a></li>
                                                    <li><a href="#">Manage Web Notifications</a></li>
                                                    <li><a href="#">Chicago Tribune Store</a></li>
                                                </ul>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </footer>
            <div className="binduz-er-footer-copyright-area binduz-er-footer-copyright-area-2">
                <div className=" container">
                    <div className="binduz-er-footer-copyright-box">
                        <div className="row align-items-center">
                            <div className=" col-lg-6">
                                <div className="binduz-er-copyright-text">
                                </div>
                            </div>
                            <div className=" col-lg-6">
                                <div className="binduz-er-copyright-menu float-lg-end float-none">
                                    <ul>
                                        <li><a href="#">Privacy & Policy</a></li>
                                        <li><a href="#">Claim A Report</a></li>
                                        <li><a href="#">Careers</a></li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </Fragment>
    );
};
export default Footer;