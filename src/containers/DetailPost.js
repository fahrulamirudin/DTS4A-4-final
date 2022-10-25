import React, { Fragment, useEffect } from 'react';
import { useLocation, useParams, useSearchParams } from 'react-router-dom';
import useDetailStore, { selectDetail, selectDetailReady, selectFetchDetail } from '../store/tlmSection/detail';
// import useGameStore, { selectFetchGame, selectGame, selectGameReady } from '../store/tlmSection/game';
// import useTechReviewStore, { selectFetchTechReview, selectTechReview, selectTechReviewReady } from '../store/tlmSection/techReview';



function DetailPost() {
    const useQuery = () => new URLSearchParams(useLocation().search);
    const query = useQuery();
    const url = query.get('url');

    const detailSection = useDetailStore(selectDetail);
    const fetchDetailSection = useDetailStore(selectFetchDetail);
    const detailSectionReady = useDetailStore(selectDetailReady);

    useEffect(() => {
        fetchDetailSection(url);
    }, []);

    useEffect(() => {
        if (!detailSectionReady) return;
    }, [detailSectionReady]);

    return (
        <Fragment>
            <div className="binduz-er-blog-bg-area" style={{ backgroundImage: `url(https://images.unsplash.com/photo-1519389950473-47ba0277781c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NHx8dGVjaG5vbG9neXxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60)` }}></div>
            <section className="binduz-er-author-item-area binduz-er-author-item-layout-1 pb-20">
                <div className=" container">
                    <div className="row">
                        <div className=" col-lg-9">
                            <div className="binduz-er-author-item mb-40">
                                <div className="binduz-er-content">
                                    <div className="binduz-er-meta-item">
                                        <div className="binduz-er-meta-date">
                                            <span><i className="fal fa-calendar-alt"></i>{detailSection.date}</span>
                                        </div>
                                    </div>
                                    <h3 className="binduz-er-title">{detailSection.title}</h3>
                                    <div className="binduz-er-meta-author">
                                        <div className="binduz-er-author">
                                            <img src="assets/images/user-2.jpg" alt="" />
                                            <span>By <span>{detailSection.author}</span></span>
                                        </div>
                                    </div>
                                </div>
                                <div className="row">
                                    <div className=" col-lg-10">
                                        <div className="binduz-er-blog-details-box">
                                            <div className="binduz-er-text">
                                                <p>{detailSection.content}</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className=" col-lg-3">
                            <div className="binduz-er-populer-news-sidebar">

                                <div className="binduz-er-populer-news-sidebar-post pt-60">
                                    <div className="binduz-er-popular-news-title">
                                        <ul className="nav nav-pills mb-3" id="pills-tab-2" role="tablist">
                                            <li className="nav-item" role="presentation">
                                                <a className="nav-link active" id="pills-home-tab" data-bs-toggle="pill" href="#pills-home" role="tab" aria-controls="pills-home" aria-selected="true">Most Popular</a>
                                            </li>
                                        </ul>
                                    </div>
                                    <div className="tab-content" id="pills-tabContent-2">
                                        <div className="tab-pane fade show active" id="pills-home" role="tabpanel" aria-labelledby="pills-home-tab">
                                            <div className="binduz-er-sidebar-latest-post-box">
                                                <div className="binduz-er-sidebar-latest-post-item">
                                                    <div className="binduz-er-thumb">
                                                        <img src="assets/images/latest-post-1.jpg" alt="latest" />
                                                    </div>
                                                    <div className="binduz-er-content">
                                                        <span><i className="fal fa-calendar-alt"></i> 24th February 2020</span>
                                                        <h4 className="binduz-er-title"><a href="#">Why creating inclusive classrooms matters</a></h4>
                                                    </div>
                                                </div>
                                                <div className="binduz-er-sidebar-latest-post-item">
                                                    <div className="binduz-er-thumb">
                                                        <img src="assets/images/latest-post-2.jpg" alt="latest" />
                                                    </div>
                                                    <div className="binduz-er-content">
                                                        <span><i className="fal fa-calendar-alt"></i> 24th February 2020</span>
                                                        <h4 className="binduz-er-title"><a href="#">Celebrating Asian Pacific American art and</a></h4>
                                                    </div>
                                                </div>
                                                <div className="binduz-er-sidebar-latest-post-item">
                                                    <div className="binduz-er-thumb">
                                                        <img src="assets/images/latest-post-3.jpg" alt="latest" />
                                                    </div>
                                                    <div className="binduz-er-content">
                                                        <span><i className="fal fa-calendar-alt"></i> 24th February 2020</span>
                                                        <h4 className="binduz-er-title"><a href="#">From overcoming burnout to finding new</a></h4>
                                                    </div>
                                                </div>
                                                <div className="binduz-er-sidebar-latest-post-item">
                                                    <div className="binduz-er-thumb">
                                                        <img src="assets/images/latest-post-4.jpg" alt="latest" />
                                                    </div>
                                                    <div className="binduz-er-content">
                                                        <span><i className="fal fa-calendar-alt"></i> 24th February 2020</span>
                                                        <h4 className="binduz-er-title"><a href="#">Sparks of inspiration to the new trend 2021</a></h4>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
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
export default DetailPost;