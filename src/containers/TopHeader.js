import React, { Fragment, useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';
import BeritaTerakhir from '../components/BeritaTerakhir';
import GameTerbaru from '../components/GameTerbaru';
import UserLog from '../components/UserLog';
import useGameStore, { selectFetchGame, selectFetchTech, selectGame, selectGameReady, selectTech, selectTechReady } from '../store/tlmSection/game';
import useGameTerbaru, { selectGameTerbaru, selectGameTerbaruReady } from '../store/tlmSection/gameterbaru';
import useTechSetup, { selectFetchTechSetup, selectTechSetup, selectTechSetupReady } from '../store/tlmSection/techsetup';
import SliderIki from './Slider';
import SliderMain from './Slider';

const TopHeader = () => {
    const [queryParams] = useSearchParams();
    const tech = useGameStore(selectGame)
    const fetchTech = useGameStore(selectFetchGame);
    const techReady = useGameStore(selectGameReady);
    const pc = useGameTerbaru(selectGameTerbaru)
    const fetchPc = useGameTerbaru(selectFetchGame);
    const pcReady = useGameTerbaru(selectGameTerbaruReady);

    const techsetup = useTechSetup(selectTechSetup)
    const fetchTechSetup = useTechSetup(selectFetchTechSetup);
    const techsetupReady = useTechSetup(selectTechSetupReady);
    useEffect(() => {
        fetchTech();
        fetchTechSetup();
        fetchPc();

    }, []);

    useEffect(() => {
        if (!techReady) return;
        if (!techsetupReady) return;
        if (!pcReady) return;
    }, [queryParams, techReady, techsetupReady, pcReady]);
    return (
        <Fragment>
            <div className="binduz-er-news-top-header-area-2 bg_cover">
                <div className=" container">
                    <div className="row align-items-center">
                        <div className=" col-lg-6 col-md-5">
                            <div className="binduz-er-news-top-header-btns">
                                <ul>
                                    <li>
                                        <a className="binduz-er-news-search-open" href="#"><i className="fal fa-search"></i>    Cari Berita Disini</a>
                                    </li>
                                </ul>
                            </div>
                        </div>
                        <div className=" col-lg-6 col-md-7">
                            <div className="binduz-er-news-top-header-weather">
                                <ul>
                                    <li><a href="#"><i className="fal fa-home"></i> Beranda</a></li>
                                    <UserLog></UserLog>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <SliderIki/>
            <section className="binduz-er-latest-news-area pt-60">
                <div className=" container">
                    <div className="row">
                        <div className=" col-lg-8">
                            <div className="binduz-er-top-news-title">
                                <h3 className="binduz-er-title">Review Game Terbaru</h3>
                            </div>
                            {
                                tech.map(berita => (

                                    <BeritaTerakhir key={(berita.title)} news={berita} />
                                ))
                            }
                        </div>
                        <div className=" col-lg-4">
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
        </Fragment>
    );
};
export default TopHeader;