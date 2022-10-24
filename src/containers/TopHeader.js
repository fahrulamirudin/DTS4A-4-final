import React, { Fragment, useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';
import BeritaTerakhir from '../components/BeritaTerakhir';
import useTechStore, { selectFetchTech, selectTech, selectTechReady } from '../store/tlmSection/tech';

const TopHeader = () => {
    const [queryParams] = useSearchParams();
    const techReview=useTechStore(selectTech);
    const fetchTech=useTechStore(selectFetchTech);
    const techReady=useTechStore(selectTechReady);
    useEffect(() => {
        fetchTech();
    }, []);

    useEffect(() => {
        if (!techReady) return;
    }, [queryParams, techReady]);
    return (
        <Fragment>
            <div className="binduz-er-news-top-header-area-2 bg_cover">
                <div className=" container">
                    <div className="row align-items-center">
                        <div className=" col-lg-6 col-md-5">
                            <div className="binduz-er-news-top-header-btns">
                                <ul>
                                    <li>
                                        <span className="binduz-er-toggle-btn binduz-er-news-canvas_open"><i className="fal fa-bars"></i> Menu</span>
                                    </li>
                                    <li>
                                        <a className="binduz-er-news-search-open" href="#"><i className="fal fa-search"></i> Cari Berita Disini</a>
                                    </li>
                                </ul>
                            </div>
                        </div>
                        <div className=" col-lg-6 col-md-7">
                            <div className="binduz-er-news-top-header-weather">
                                <ul>
                                    <li><a href="#"><i className="fal fa-cloud"></i> 22°F</a></li>
                                    <li><a href="#"><i className="fal fa-user"></i> Masuk / Daftar</a></li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <section className="binduz-er-latest-news-area pt-60">
                <div className=" container">
                    <div className="row">
                        <div className=" col-lg-8">
                            <div className="binduz-er-top-news-title">
                                <h3 className="binduz-er-title">Berita Terbaru</h3>
                            </div>
                            {
                                techReview.map(berita => (

                                    <BeritaTerakhir key={(berita.title)} news={berita} />
                                ))
                            }
                        </div>
                        <div className=" col-lg-4">
                            <div className="binduz-er-top-news-title">
                                <h3 className="binduz-er-title">Koleksi Video</h3>
                            </div>
                            <div className="binduz-er-video-post">
                                <div className="binduz-er-latest-news-item">
                                    <div className="binduz-er-thumb">
                                        <img src="assets/images/latest-news-thumb-4.jpg" alt="" />
                                        <div className="binduz-er-play">
                                            <a className="binduz-er-video-popup" href="#"><i className="fas fa-play"></i></a>
                                        </div>
                                    </div>
                                    <div className="binduz-er-content">
                                        <div className="binduz-er-meta-item">
                                            <div className="binduz-er-meta-categories">
                                                <a href="#">Technology</a>
                                            </div>
                                            <div className="binduz-er-meta-date">
                                                <span><i className="fal fa-calendar-alt"></i>24th February 2020</span>
                                            </div>
                                        </div>
                                        <h5 className="binduz-er-title"><a href="#">Spruce up your Business Profile for holiday shoppers</a></h5>
                                    </div>
                                </div>
                                <div className="binduz-er-latest-news-item">
                                    <div className="binduz-er-thumb">
                                        <img src="assets/images/video-post-thumb.jpg" alt="" />
                                        <div className="binduz-er-play">
                                            <a className="binduz-er-video-popup" href="#"><i className="fas fa-play"></i></a>
                                        </div>
                                    </div>
                                    <div className="binduz-er-content">
                                        <div className="binduz-er-meta-item">
                                            <div className="binduz-er-meta-categories">
                                                <a href="#">Technology</a>
                                            </div>
                                            <div className="binduz-er-meta-date">
                                                <span><i className="fal fa-calendar-alt"></i>24th February 2020</span>
                                            </div>
                                        </div>
                                        <h5 className="binduz-er-title"><a href="#">The new conversational Search experience we’re thankful for</a></h5>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </Fragment>
    );
};
export default TopHeader;