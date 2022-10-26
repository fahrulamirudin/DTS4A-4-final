import * as React from 'react';


const SliderBerita = ({ news }) => {
    // console.log(news.title);
    return (
        <div className="binduz-er-item">
        <div className="binduz-er-meta-item">
            <div className="binduz-er-meta-categories">
                <a href="#">{news.tag}</a>
            </div>
            <div className="binduz-er-meta-date">
                <span><i className="fal fa-calendar-alt"></i>{news.time}</span>
            </div>
        </div>
        <div className="binduz-er-news-slider-content">
            <h3 className="binduz-er-title"><a href={`/detail?url=${(news.key)}`} >{news.title}</a></h3>
            <p>{news.desc}</p>
        </div>
        <div className="binduz-er-meta-author">
            <div className="binduz-er-author">
                <img src="assets/images/user-2.jpg" alt=""/>
                    <span>Penulis <span>{news.author}</span></span>
            </div>
        </div>
    </div>
    );
}

export default SliderBerita;