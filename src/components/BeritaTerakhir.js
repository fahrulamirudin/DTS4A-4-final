import * as React from 'react';


const BeritaTerakhir = ({ news }) => {
    // console.log(news.title);
    return (
        <div className="binduz-er-latest-news-item">
        <div className="binduz-er-thumb">
            <img src={news.thumb} alt=""/>
        </div>
        <div className="binduz-er-content">
            <div className="binduz-er-meta-categories">
                <a href="#">{news.tag}</a>
            </div>
            <h5 className="binduz-er-title"><a href={`/detail?url=${(news.key)}`} >{news.title}</a></h5>
            <div className="binduz-er-meta-item">
                <div className="binduz-er-meta-author">
                    <span>By <span>{news.author}</span></span>
                </div>
                <div className="binduz-er-meta-date">
                    <span><i className="fal fa-calendar-alt"></i>{news.time}</span>
                </div>
            </div>
        </div>
    </div>
    );
}

export default BeritaTerakhir;