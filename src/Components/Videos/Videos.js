import React from "react";
import './Videos.css'

const Videos = () => {
  return (
    <div>
      <div className="videos-container">
        <iframe
          width='890'
          height='500'
          src='https://www.youtube.com/embed/XKfgdkcIUxw'
          title='YouTube video player'
          frameBorder='0'
          allowFullScreen
        ></iframe>
        <br /> <br />
        <iframe
          width="890"
          height="500"
          src="https://www.youtube.com/embed/CHbXYS-9v3U"
          title="YouTube video player"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
      </div>
    </div>
  );
};

export default Videos;
