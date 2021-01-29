import React from 'react';

const VideoItem = ({ video }) => {
    return (
        <div>
            <img src={video.snippet.thumbnails.medium.url} alt="pic"/>
            {video.snippet.title}
        </div>
    );
}

export default VideoItem;