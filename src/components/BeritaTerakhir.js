import * as React from 'react';


const BeritaTerakhir = ({ news }) => {
    // console.log(news.title);
    let bg = '';    
    if (news.thumbnail_standard != null) {
        bg = news.thumbnail_standard;
    }
    return (
        <div class="binduz-er-latest-news-item">
        <div class="binduz-er-thumb">
            <img src={bg} alt=""/>
        </div>
        <div class="binduz-er-content">
            <div class="binduz-er-meta-categories">
                <a href="#">{news.section}</a>
            </div>
            <h5 class="binduz-er-title"><a href="#">{news.title}</a></h5>
            <div class="binduz-er-meta-item">
                <div class="binduz-er-meta-author">
                    <span>By <span>{news.byline}</span></span>
                </div>
                <div class="binduz-er-meta-date">
                    <span><i class="fal fa-calendar-alt"></i>{news.published_date}</span>
                </div>
            </div>
        </div>
    </div>
    );
}

export default BeritaTerakhir;