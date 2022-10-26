import React, { Fragment, useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';
import Slider from '../components/Slider';
import SliderBerita from '../components/SliderBerita';
import useTechSetup, { selectFetchTechSetup, selectTechSetup, selectTechSetupReady } from '../store/tlmSection/techsetup';

const SliderMain = () => {
    const [queryParams] = useSearchParams();

    const techsetup = useTechSetup(selectTechSetup)
    const fetchTechSetup = useTechSetup(selectFetchTechSetup);
    const techsetupReady = useTechSetup(selectTechSetupReady);
    useEffect(() => {
        fetchTechSetup();

    }, []);

    useEffect(() => {
        if (!techsetupReady) return;
    }, [queryParams, techsetupReady]);
    return (
        <Fragment>
            <div className="binduz-er-news-slider-area pt-50 pb-10">
                <div className=" container">
                    <div className="binduz-er-news-slider-box">
                        <div className="row g-0 align-items-center">
                            <div className=" col-lg-6">
                                <div className="binduz-er-news-slider-item">
                                    <div class="binduz-er-item">
                                        <img src="https://thelazy.media/wp-content/uploads/2021/04/18_%C3%A2L%C3%A2%C3%A2%C3%A2%C3%AB%C3%A2N%C3%A2%5E%C3%BC3-1068x601.jpg" alt="" height="400px" width="700px"/>
                                    </div>
                                    <div class="binduz-er-item">
                                        <img src="https://thelazy.media/wp-content/uploads/2021/04/metadata-1068x561.jpg" alt="" height="400px" width="700px"/>
                                    </div>
                                </div>
                            </div>
                            <div class=" col-lg-6">
                        <div class="binduz-er-news-slider-content-slider">
                            <div class="binduz-er-item">
                                <div class="binduz-er-meta-item">
                                    <div class="binduz-er-meta-categories">
                                        <a href="#">Technology</a>
                                    </div>
                                    <div class="binduz-er-meta-date">
                                        <span><i class="fal fa-calendar-alt"></i> 24th February 2020</span>
                                    </div>
                                </div>
                                <div class="binduz-er-news-slider-content">
                                    <h3 class="binduz-er-title"><a href="#">Nier Replicant ver.1.22474487139 Review – Indah Namun Terbatas</a></h3>
                                    <p>Secara singkat protagonis yang kita mainkan ingin menyelamatkan adiknya yang terkena sebuah penyakit bernama Blackscrawl dan selama prosesnya</p>
                                </div>
                                <div class="binduz-er-meta-author">
                                    <div class="binduz-er-author">
                                        <img src="../assets/images/user-2.jpg" alt=""/>
                                        <span>Penulis <span>Andy Luthfi</span></span>
                                    </div>
                                    <div class="binduz-er-meta-list">
                                        <ul>
                                            <li><i class="fal fa-eye"></i> 5k</li>
                                            <li><i class="fal fa-heart"></i> 5k</li>
                                            <li><i class="fal fa-comments"></i> 5k</li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                            <div class="binduz-er-item">
                                <div class="binduz-er-meta-item">
                                    <div class="binduz-er-meta-categories">
                                        <a href="#">Technology</a>
                                    </div>
                                    <div class="binduz-er-meta-date">
                                        <span><i class="fal fa-calendar-alt"></i> 24th February 2020</span>
                                    </div>
                                </div>
                                <div class="binduz-er-news-slider-content">
                                    <h3 class="binduz-er-title"><a href="#">Outriders Review – Game GRINDING Ok…..</a></h3>
                                    <p>People Can Fly yang memang belum pernah menjadi studio utama dalam pengembangan game, menjadi studio utama untuk game Outriders ini. Tentu Outriders membuat banyak spekulasi, apakah game ini akan berhasil atau tidak.</p>
                                </div>
                                <div class="binduz-er-meta-author">
                                    <div class="binduz-er-author">
                                        <img src="../assets/images/user-2.jpg" alt=""/>
                                        <span>Penulis <span>Rosalina D.</span></span>
                                    </div>
                                    <div class="binduz-er-meta-list">
                                        <ul>
                                            <li><i class="fal fa-eye"></i> 5k</li>
                                            <li><i class="fal fa-heart"></i> 5k</li>
                                            <li><i class="fal fa-comments"></i> 5k</li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                        </div>
                    </div>
                </div>
            </div>
        </Fragment>
    );
};
export default SliderMain;