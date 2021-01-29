import './video-item.css';
import React from 'react';

const VideoItem = ({ video }) => {
    return (
        <div className="item video-item">
            <img className="ui image" src={video.snippet.thumbnails.medium.url} alt="pic"/>
            <div className="content">
                <div className="header">{video.snippet.title}</div> 
            </div>            
            
        </div>
    );
}

export default VideoItem;