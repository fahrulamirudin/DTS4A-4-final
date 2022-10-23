import React, { Fragment, useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';
import BeritaTerakhir from '../components/BeritaTerakhir';
import useBeritaTerakhirStore, { selectFetchHeadline, selectHeadline, selectHeadlineReady } from '../store/beritaTerakhir';
const TopHeader = () => {
    const [queryParams] = useSearchParams();
    const beritaTerakhir = useBeritaTerakhirStore(selectHeadline);
    const fetchBeritaTerakhir = useBeritaTerakhirStore(selectFetchHeadline);
    const beritaTerakhirReady = useBeritaTerakhirStore(selectHeadlineReady);
    useEffect(() => {
        fetchBeritaTerakhir(4);
    }, []);

    useEffect(() => {
        if (!beritaTerakhirReady) return;
    }, [queryParams, beritaTerakhirReady]);
    return (
        <Fragment>
            <div class="binduz-er-news-top-header-area-2 bg_cover">
                <div class=" container">
                    <div class="row align-items-center">
                        <div class=" col-lg-6 col-md-5">
                            <div class="binduz-er-news-top-header-btns">
                                <ul>
                                    <li>
                                        <span class="binduz-er-toggle-btn binduz-er-news-canvas_open"><i class="fal fa-bars"></i> Menu</span>
                                    </li>
                                    <li>
                                        <a class="binduz-er-news-search-open" href="#"><i class="fal fa-search"></i> Cari Berita Disini</a>
                                    </li>
                                </ul>
                            </div>
                        </div>
                        <div class=" col-lg-6 col-md-7">
                            <div class="binduz-er-news-top-header-weather">
                                <ul>
                                    <li><a href="#"><i class="fal fa-cloud"></i> 22°F</a></li>
                                    <li><a href="#"><i class="fal fa-user"></i> Masuk / Daftar</a></li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <section class="binduz-er-latest-news-area pt-60">
                <div class=" container">
                    <div class="row">
                        <div class=" col-lg-8">
                            <div class="binduz-er-top-news-title">
                                <h3 class="binduz-er-title">Berita Terbaru</h3>
                            </div>
                            {
                                beritaTerakhir.map(berita => (

                                    <BeritaTerakhir key={(berita.title)} news={berita} />
                                ))
                            }
                        </div>
                        <div class=" col-lg-4">
                            <div class="binduz-er-top-news-title">
                                <h3 class="binduz-er-title">Koleksi Video</h3>
                            </div>
                            <div class="binduz-er-video-post">
                                <div class="binduz-er-latest-news-item">
                                    <div class="binduz-er-thumb">
                                        <img src="assets/images/latest-news-thumb-4.jpg" alt="" />
                                        <div class="binduz-er-play">
                                            <a class="binduz-er-video-popup" href="#"><i class="fas fa-play"></i></a>
                                        </div>
                                    </div>
                                    <div class="binduz-er-content">
                                        <div class="binduz-er-meta-item">
                                            <div class="binduz-er-meta-categories">
                                                <a href="#">Technology</a>
                                            </div>
                                            <div class="binduz-er-meta-date">
                                                <span><i class="fal fa-calendar-alt"></i>24th February 2020</span>
                                            </div>
                                        </div>
                                        <h5 class="binduz-er-title"><a href="#">Spruce up your Business Profile for holiday shoppers</a></h5>
                                    </div>
                                </div>
                                <div class="binduz-er-latest-news-item">
                                    <div class="binduz-er-thumb">
                                        <img src="assets/images/video-post-thumb.jpg" alt="" />
                                        <div class="binduz-er-play">
                                            <a class="binduz-er-video-popup" href="#"><i class="fas fa-play"></i></a>
                                        </div>
                                    </div>
                                    <div class="binduz-er-content">
                                        <div class="binduz-er-meta-item">
                                            <div class="binduz-er-meta-categories">
                                                <a href="#">Technology</a>
                                            </div>
                                            <div class="binduz-er-meta-date">
                                                <span><i class="fal fa-calendar-alt"></i>24th February 2020</span>
                                            </div>
                                        </div>
                                        <h5 class="binduz-er-title"><a href="#">The new conversational Search experience we’re thankful for</a></h5>
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