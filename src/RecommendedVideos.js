import React from 'react'
import VideoCard from './VideoCard';
import "./RecommendedVideos.css"

function RecommendedVideos() {
    return (
        <div className="recommendedVideos">
            <h2>Recommended</h2>
            <div className="recommendedVideos__videos">
                <VideoCard image="https://i.ytimg.com/vi/sBws8MSXN7A/hqdefault.jpg?sqp=-oaymwEZCNACELwBSFXyq4qpAwsIARUAAIhCGAFwAQ==&rs=AOn4CLCDpIT4AG_7WCMg9fp5LmpwFtAh8A" 
                title="React JS Crash Course" channel="Traversy Media" views="1.2M views"
                timestamp="1 year ago" 
                channelImage="https://yt3.ggpht.com/a/AATXAJw6qBlNzbAweKz7UlC44hYLoEtdoXGmzN8IJno3mg=s100-c-k-c0xffffffff-no-rj-mo"/>

                <VideoCard image="https://i.ytimg.com/vi/DLX62G4lc44/hqdefault.jpg?sqp=-oaymwEZCNACELwBSFXyq4qpAwsIARUAAIhCGAFwAQ==&rs=AOn4CLALJmXiU3DaUvF5BP_qBYtsO4Qs4A" 
                title="Learn React JS - Full Course for Beginners - Tutorial 2019" channel="freeCodeCamp.org" views="1.8M"
                timestamp="1 year ago" 
                channelImage="https://yt3.ggpht.com/a-/AOh14GgwaiCp63JOClbTXswJ4u8x9IXpD_qDn3tt3g=s68-c-k-c0x00ffffff-no-rj-mo"/>

<VideoCard image="https://i.ytimg.com/vi/zjnr90DJC7M/hq720.jpg?sqp=-oaymwEZCK4FEIIDSEbyq4qpAwsIARUAAIhCGAFwAQ==&rs=AOn4CLCCJtRIHuSOPlF4fWiK-c2c-ZxJsg" 
                title="How to Become a Full-Stack Developer in Under 2 Minutes" 
                channel="Clever Programmer" views="23K views"
                timestamp="1 year ago" 
                channelImage="https://yt3.ggpht.com/a-/AOh14GhOUP_9re93yOMdN4RLQLHl6Mbk6vmUS1524w=s68-c-k-c0x00ffffff-no-rj-mo"/>

<VideoCard image="https://i.ytimg.com/vi/ajZjivqBdcY/hq720.jpg?sqp=-oaymwEZCK4FEIIDSEbyq4qpAwsIARUAAIhCGAFwAQ==&rs=AOn4CLAvEWi9PiaYT2oqLSrTEnHKYU5zEQ" 
                title="CSS Only Particles Background Animation Effects | CSS3 Glowing Dots Animation" 
                channel="Online Tutorials" views="6.7K views"
                timestamp="18 hours ago" 
                channelImage="https://yt3.ggpht.com/a-/AOh14Gg69YkOCQfllwPYlEsnu_7OZ2iihb70PTQTqg=s68-c-k-c0x00ffffff-no-rj-mo"/>

<VideoCard image="https://i.ytimg.com/vi/ZdS9uOl4OJk/hq720.jpg?sqp=-oaymwEZCK4FEIIDSEbyq4qpAwsIARUAAIhCGAFwAQ==&rs=AOn4CLCnAwKx33lUSZY0kR9f3IHkhUPcUw" 
                title="ng-India Webinar - Learn RxJS in Angular by by Deborah Kurata and Ben Lesh" 
                channel="Geek 97" views="6.4K views"
                timestamp="18 hours ago" 
                channelImage="https://yt3.ggpht.com/a-/AOh14Gha0A0pVH3dep4bY1woIDdX9U2IKDM1gcN_uA=s68-c-k-c0x00ffffff-no-rj-mo"/>

<VideoCard image="https://i.ytimg.com/vi/OxoOB0QIhKA/hq720.jpg?sqp=-oaymwEZCK4FEIIDSEbyq4qpAwsIARUAAIhCGAFwAQ==&rs=AOn4CLANaA3eRiJcRk8nwMlfsJkVWefJLQ" 
                title="What Is The Best C# Book? What Is the Best C# Resource?" 
                channel="IAmTimCorey" views="7.6K views"
                timestamp="16 hours ago" 
                channelImage="https://yt3.ggpht.com/a-/AOh14GioaQhV-Z03HnC2MZDJ61h1J6xXsAb5tgjW2A=s68-c-k-c0x00ffffff-no-rj-mo"/>

<VideoCard image="https://i.ytimg.com/vi/988UZFB0heA/hq720.jpg?sqp=-oaymwEZCK4FEIIDSEbyq4qpAwsIARUAAIhCGAFwAQ==&rs=AOn4CLD9-JjzOqr9p8jQiQaDrQO7pWx8oQ" 
                title="Native Android App Tutorial: WhatsApp Clone" 
                channel="freeCodeCamp.org" views="3.3 lakh views"
                timestamp="1 year ago" 
                channelImage="https://yt3.ggpht.com/a-/AOh14GgwaiCp63JOClbTXswJ4u8x9IXpD_qDn3tt3g=s68-c-k-c0x00ffffff-no-rj-mo"/>

<VideoCard image="https://i.ytimg.com/vi/dNBLq6aLpCA/hq720.jpg?sqp=-oaymwEZCK4FEIIDSEbyq4qpAwsIARUAAIhCGAFwAQ==&rs=AOn4CLDZ0ze3yeFHqB_PuWFp78uq443xbw" 
                title="Vue 3: The Future of Front End" 
                channel="Vue Mastery" views="93K views"
                timestamp="6 days ago" 
                channelImage="https://yt3.ggpht.com/a-/AOh14Gg9ExaTCzKVvqWUwIdtKgP1yGXbWVQfyDn8Kw=s68-c-k-c0x00ffffff-no-rj-mo"/>

<VideoCard image="https://i.ytimg.com/vi/pTec1e8oyc8/hq720.jpg?sqp=-oaymwEZCK4FEIIDSEbyq4qpAwsIARUAAIhCGAFwAQ==&rs=AOn4CLDQ4AjjkMazqWwZyld8sr3dSRhXyQ" 
                title="Angular 8 Tutorial | Create Angular Project from Scratch | Angular Training | Edureka" 
                channel="edureka!" views="6.1M views"
                timestamp="6 months ago" 
                channelImage="https://yt3.ggpht.com/a-/AOh14Gj4NQKYYLfyZ5wmstxx5AOGOjvfq705NCeoPg=s68-c-k-c0x00ffffff-no-rj-mo"/>

<VideoCard image="https://i.ytimg.com/vi/2QByYtPEGIs/hq720.jpg?sqp=-oaymwEZCK4FEIIDSEbyq4qpAwsIARUAAIhCGAFwAQ==&rs=AOn4CLCRiNyI-fJKZ7H6o_1HB775qBHcgg" 
                title="A Day in the Life of a Software Engineer | Python Freelancer" 
                channel="Clever Programmer" views="67K views"
                timestamp="1 hour ago" 
                channelImage="https://yt3.ggpht.com/a-/AOh14GhOUP_9re93yOMdN4RLQLHl6Mbk6vmUS1524w=s68-c-k-c0x00ffffff-no-rj-mo"/>

<VideoCard image="https://i.ytimg.com/vi/VvjkphEwHlQ/hq720.jpg?sqp=-oaymwEZCK4FEIIDSEbyq4qpAwsIARUAAIhCGAFwAQ==&rs=AOn4CLBki7cND5HwJr_IXlBCdnqWHe1rwQ" 
                title="Minimum Job Requirements in Development" 
                channel="Traversy Media" views="33K views"
                timestamp="1 day ago" 
                channelImage="https://yt3.ggpht.com/a/AATXAJw6qBlNzbAweKz7UlC44hYLoEtdoXGmzN8IJno3mg=s100-c-k-c0xffffffff-no-rj-mo"/>
            </div>
        </div>
    )
}

export default RecommendedVideos



