import React from 'react'
import VideoCard from './VideoCard';
import "./RecommendedVideos.css"

function RecommendedVideos() {
    return (
        <div className="recommendedVideos">
            <h1>Recommended</h1>
            <div className="recommendedVideos__videos">
                <VideoCard image="https://i.ytimg.com/vi/sBws8MSXN7A/hqdefault.jpg?sqp=-oaymwEZCNACELwBSFXyq4qpAwsIARUAAIhCGAFwAQ==&rs=AOn4CLCDpIT4AG_7WCMg9fp5LmpwFtAh8A" 
                title="React JS Crash Course" channel="Traversy Media" views="1,241,963"
                timestamp="Jan 4, 2019" 
                channelImage="https://yt3.ggpht.com/a/AATXAJw6qBlNzbAweKz7UlC44hYLoEtdoXGmzN8IJno3mg=s100-c-k-c0xffffffff-no-rj-mo"/>

            <VideoCard image="https://i.ytimg.com/an_webp/rRgD1yVwIvE/mqdefault_6s.webp?du=3000&sqp=CIz_s_kF&rs=AOn4CLAbx0cRtO_XUPSb1jC9Z3Kt-APLWg" 
                title="Javascript Higher Order Functions" channel="Traversy Media" views="423K"
                timestamp="2 years ago" 
                channelImage="https://yt3.ggpht.com/a/AATXAJw6qBlNzbAweKz7UlC44hYLoEtdoXGmzN8IJno3mg=s100-c-k-c0xffffffff-no-rj-mo"/>
                
            </div>
        </div>
    )
}

export default RecommendedVideos
