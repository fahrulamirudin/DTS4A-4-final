import React, { Fragment, useEffect } from 'react';
import { useLocation, useParams, useSearchParams } from 'react-router-dom';
import GameTerbaru from '../components/GameTerbaru';
import UserLog from '../components/UserLog';
import useDetailStore, { selectDetail, selectDetailReady, selectFetchDetail } from '../store/tlmSection/detail';
import { selectFetchGame } from '../store/tlmSection/game';
import useGameTerbaru, { selectGameTerbaru, selectGameTerbaruReady } from '../store/tlmSection/gameterbaru';
import Footer from './Footer';
// import useGameStore, { selectFetchGame, selectGame, selectGameReady } from '../store/tlmSection/game';
// import useTechReviewStore, { selectFetchTechReview, selectTechReview, selectTechReviewReady } from '../store/tlmSection/techReview';



function DetailPost() {
    const useQuery = () => new URLSearchParams(useLocation().search);
    const query = useQuery();
    const url = query.get('url');

    const detailSection = useDetailStore(selectDetail);
    const fetchDetailSection = useDetailStore(selectFetchDetail);
    const detailSectionReady = useDetailStore(selectDetailReady);
    const pc = useGameTerbaru(selectGameTerbaru)
    const fetchPc = useGameTerbaru(selectFetchGame);
    const pcReady = useGameTerbaru(selectGameTerbaruReady);

    useEffect(() => {
        fetchDetailSection(url);
        fetchPc();
    }, []);

    useEffect(() => {
        if (!detailSectionReady) return;
        if (!pcReady) return;
    }, [detailSectionReady]);

    return (
        <Fragment>
            <div className="binduz-er-news-top-header-area-2 bg_cover">
                <div className=" container">
                    <div className="row align-items-center">
                        <div className=" col-lg-6 col-md-5">
                            <div className="binduz-er-news-top-header-btns">
                                <ul>
                                    <li>
                                        <a className="binduz-er-news-search-open" href="#"><i className="fal fa-search"></i> Cari Berita Disini</a>
                                    </li>
                                </ul>
                            </div>
                        </div>
                        <div className=" col-lg-6 col-md-7">
                            <div className="binduz-er-news-top-header-weather">
                                <ul>
                                    <li><a href="/"><i className="fal fa-home"></i> Beranda</a></li>
                                    <UserLog></UserLog>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <section className="binduz-er-author-item-area binduz-er-author-item-layout-1 pb-20">
                <div className=" container">
                    <div className="row">
                        <div className=" col-lg-8">
                            <div className="binduz-er-author-item mb-40">
                                <div className="binduz-er-content" style={{ marginTop: '90px' }}>
                                    <div className="binduz-er-meta-item">
                                        <div className="binduz-er-meta-date">
                                            <span><i className="fal fa-calendar-alt"></i>{detailSection.date}</span>
                                        </div>
                                    </div>
                                    <h1 className="binduz-er-title-hero">{detailSection.title}</h1>
                                    <div className="binduz-er-meta-author">
                                        <div className="binduz-er-author">
                                            <i className="fal fa-user"></i>
                                            <span> Ditulis Oleh <span>{detailSection.author}</span></span>
                                        </div>
                                    </div>
                                </div>
                                <div className="row">
                                    <div className=" col-lg-12">
                                        <div className="binduz-er-blog-details-box">
                                            <div className="binduz-er-text">
                                                <img src={detailSection.thumb} alt="" />
                                                <br></br>
                                                <br></br>
                                                <p text align="justify">{detailSection.content}</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                            </div>
                        </div>
                        <div className=" col-lg-4">
                            <br></br>
                            <br></br>
                            <div className="binduz-er-top-news-title">
                                <h3 className="binduz-er-title">Game Terbaru</h3>
                            </div>
                            {
                                pc.slice(0, 5).map(news => (

                                    <GameTerbaru key={(news.title)} news={news} />
                                ))
                            }
                        </div>
                    </div>
                </div>
            </section>
            <Footer/>
        </Fragment>
    );
};
export default DetailPost;