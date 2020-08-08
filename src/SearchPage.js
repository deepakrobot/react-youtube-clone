import React from 'react'
import TuneOutlinedIcon from '@material-ui/icons/TuneOutlined'
import ChannelRow from './ChannelRow';
import './SearchPage.css'
import VideoRow from './VideoRow';

function SearchPage() {
    return (
        <div className="searchPage">
            <div className="searchPage__filter">
                <TuneOutlinedIcon />
                <h2>FILTER</h2>
            </div>
            <hr/>

            <ChannelRow 
                image="https://yt3.ggpht.com/a-/AOh14GhOUP_9re93yOMdN4RLQLHl6Mbk6vmUS1524w=s68-c-k-c0x00ffffff-no-rj-mo"
                channel="Clever Programmer"
                verified
                subs="660K"
                noOfVideos={382}
                description="You can find awesome programming videos here and learn about different programming languages"
            />
            <hr/>
            
            <VideoRow image="https://i.ytimg.com/vi/zjnr90DJC7M/hq720.jpg?sqp=-oaymwEZCK4FEIIDSEbyq4qpAwsIARUAAIhCGAFwAQ==&rs=AOn4CLCCJtRIHuSOPlF4fWiK-c2c-ZxJsg" 
                title="How to Become a Full-Stack Developer in Under 2 Minutes" 
                channel="Clever Programmer" 
                views="23K views"
                subs="660K"
                timestamp="1 year ago" 
                description="Learn how to become full stack developer"/>

<VideoRow image="https://i.ytimg.com/vi/pTec1e8oyc8/hq720.jpg?sqp=-oaymwEZCK4FEIIDSEbyq4qpAwsIARUAAIhCGAFwAQ==&rs=AOn4CLDQ4AjjkMazqWwZyld8sr3dSRhXyQ" 
                title="Angular 8 Tutorial | Create Angular Project from Scratch | Angular Training |" 
                channel="Clever Programmer" 
                views="1.2M views"
                subs="660K"
                timestamp="22 hours ago" 
                description="Develop angular apps"/>

            <VideoRow image="https://i.ytimg.com/vi/2QByYtPEGIs/hq720.jpg?sqp=-oaymwEZCK4FEIIDSEbyq4qpAwsIARUAAIhCGAFwAQ==&rs=AOn4CLCRiNyI-fJKZ7H6o_1HB775qBHcgg" 
                title="A Day in the Life of a Software Engineer | Python Freelancer" 
                channel="Clever Programmer" 
                views="53K views"
                subs="660K"
                timestamp="10 days ago" 
                description="Learn how to become full stack developer"/>
        </div>
    )
}

export default SearchPage