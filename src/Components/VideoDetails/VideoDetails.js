import React from 'react';

const VideoDetails = ({blog}) => {
    console.log(blog);
    return (
        <div>
            <div className="videos-container">
                <h1>This is videos page</h1>
                {/* <iframe
                    width='890'
                    height='500'
                    src=''
                    title='YouTube video player'
                    frameBorder='0'
                    allowFullScreen
                ></iframe> */}
                <iframe
                 width="560" 
                 height="315" 
                 src={blog.youtubeURL} 
                 title="YouTube video player" 
                 frameborder="0" 
                 allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen>
                 </iframe>
            </div>
        </div>
    );
};

export default VideoDetails;