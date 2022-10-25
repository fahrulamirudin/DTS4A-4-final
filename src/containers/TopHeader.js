import React, { Fragment, useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';
import BeritaTerakhir from '../components/BeritaTerakhir';
import UserLog from '../components/UserLog';
import useGameStore, { selectFetchGame, selectFetchTech, selectGame, selectGameReady, selectTech, selectTechReady } from '../store/tlmSection/game';

const TopHeader = () => {
    const [queryParams] = useSearchParams();
    const tech=useGameStore(selectGame)
    const fetchTech=useGameStore(selectFetchGame);
    const techReady=useGameStore(selectGameReady);
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
                                    <UserLog></UserLog>
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
                                tech.map(berita => (

                                    <BeritaTerakhir key={(berita.title)} news={berita} />
                                ))
                            }
                        </div>
                    </div>
                </div>
            </section>
        </Fragment>
    );
};
export default TopHeader;