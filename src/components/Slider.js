import * as React from 'react';


const Slider = ({ news }) => {
    // console.log(news.title);
    return (
        <div className="binduz-er-item">
             <img src={news.thumb} alt="" style={{width: '600px'}}/>
        </div>
    );
}

export default Slider;