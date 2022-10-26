import * as React from 'react';


const GameTerbaru = ({ news }) => {
    // console.log(news.title);
    return (
        <div className="binduz-er-video-post">
        <div className="binduz-er-latest-news-item">
            <div className="binduz-er-thumb">
            <img src={news.thumb} alt=""/>
                <div className="binduz-er-play">
                    <a className="binduz-er-video-popup" href="#"><i className="fas fa-play"></i></a>
                </div>
            </div>
            <div className="binduz-er-content">
                <div className="binduz-er-meta-item">
                    <div className="binduz-er-meta-categories">
                        <a href="#">{news.tag}</a>
                    </div>
                    <div className="binduz-er-meta-date">
                        <span><i className="fal fa-calendar-alt"></i>{news.time}</span>
                    </div>
                </div>
                <h5 className="binduz-er-title"><a href={`/detail?url=${(news.key)}`} >{news.title}</a></h5>
            </div>
        </div>
        </div>
            );
        }
export default GameTerbaru;