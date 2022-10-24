import React, { Fragment } from 'react';
function SearchStart() {
    return (
        <Fragment>
            <div className="binduz-er-news-search-box">
                <div className="binduz-er-news-search-header">
                    <div className=" container mt-60">
                        <div className="row">
                            <div className=" col-6">
                                <img src="assets/images/logo-4.png" alt="" />
                            </div>
                            <div className=" col-6">
                                <div className="binduz-er-news-search-close float-end">
                                    <button className="binduz-er-news-search-close-btn">Close <span></span><span></span></button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="binduz-er-news-search-body">
                    <div className=" container">
                        <div className="row">
                            <div className=" col-lg-12">
                                <div className="binduz-er-news-search-form">
                                    <form action="#">
                                        <input type="text" placeholder="Search for Products" />
                                        <button><i className="fa fa-search"></i></button>
                                    </form>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </Fragment>
    );
};
export default SearchStart;