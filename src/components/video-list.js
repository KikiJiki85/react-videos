import React from 'react';
import VideoItem from './video-item';

const VideoList = ({ videos }) => {

    const renderedList = videos.map((video) => {
        return <VideoItem video={video} key={video.id.videoId}/>
    });
    
    return (
        <div>
            {renderedList}
        </div>
    );
}

export default VideoList;