import React, { Fragment } from 'react';
function OffcanvasMenu() {
    return (
        <Fragment>
            <div className="binduz-er-news-off_canvars_overlay"></div>
            <div className="binduz-er-news-offcanvas_menu binduz-er-news-offcanvas_menu_left">
                <div className="container-fluid">
                    <div className="row">
                        <div className="col-12">
                            <div className="binduz-er-news-offcanvas_menu_wrapper">
                                <div className="binduz-er-news-canvas_close">
                                    <a href="#"><i className="fal fa-times"></i></a>
                                </div>
                                <div id="menu" className="text-left ">
                                    <ul className="binduz-er-news-offcanvas_main_menu">
                                        <li className="binduz-er-news-menu-item-has-children binduz-er-news-active">
                                            <a href="#">Home</a>
                                            <ul className="binduz-er-news-sub-menu">
                                                <li><a href="index.html">Home 1</a></li>
                                                <li><a href="index-2.html">Home 2</a></li>
                                                <li><a href="index-3.html">Home 3</a></li>
                                                <li><a href="index-4.html">Home 4</a></li>
                                                <li><a href="index-5.html">Home 5</a></li>
                                                <li><a href="index-6.html">Home 6</a></li>
                                                <li><a href="index-7.html">Home 7</a></li>
                                                <li><a href="index-8.html">Home 8</a></li>
                                                <li><a href="index-9.html">Home 9</a></li>
                                                <li><a href="index-10.html">Home 10</a></li>
                                                <li><a href="index-11.html">Home 11</a></li>
                                                <li><a href="index-12.html">Home 12</a></li>
                                            </ul>
                                        </li>
                                        <li className="binduz-er-news-menu-item-has-children">
                                            <a href="archived.html">Archived </a>
                                        </li>
                                        <li className="binduz-er-news-menu-item-has-children">
                                            <a href="author.html">Author</a>
                                        </li>
                                        <li className="binduz-er-news-menu-item-has-children">
                                            <a href="#"> Pages</a>
                                            <ul className="binduz-er-news-sub-menu">
                                                <li><a href="blog-details-1.html">Blog Details 1</a></li>
                                                <li><a href="blog-details-2.html">Blog Details 2</a></li>
                                            </ul>
                                        </li>
                                        <li className="binduz-er-news-menu-item-has-children">
                                            <a href="about-us.html"> About</a>
                                        </li>
                                        <li className="binduz-er-news-menu-item-has-children">
                                            <a href="contact.html"> Contact</a>
                                        </li>
                                    </ul>
                                </div>
                                <div className="binduz-er-news-offcanvas_footer">
                                    <div className="binduz-er-news-logo text-center mb-30 mt-30">
                                        <a href="index.html">
                                            <img src="assets/images/logo-4.png" alt="" />
                                        </a>
                                    </div>
                                    <p>I’m Michal Škvarenina, a multi-disciplinary designer currently working at Wild and as a freelance designer.</p>
                                    <ul>
                                        <li><i className="fas fa-phone"></i> +212 34 45 45 98</li>
                                        <li><i className="fas fa-home"></i> Angle Bd Abdelmoumen & rue soumaya, Résidence</li>
                                        <li><i className="fas fa-envelope"></i> hello@example.com</li>
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
export default OffcanvasMenu;