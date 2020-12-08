import React from 'react';
import './VideoRow.css'

import { Avatar } from '@material-ui/core';
import { CheckCircle } from '@material-ui/icons';

function VideoRow({image,channel,channelImage,verified,title,views,subs,description,timestamp}) {
    return (
        <div className='videoRow'>
            <img className='videoRow__thumbnail' src={image} alt=""/>
            <div className="videoRow__info">
                <h4>{title}</h4>
                <p>{views} • {timestamp}</p>
                <div className="videoRow__channel">
                <Avatar className='videoRow__avatar' alt={channel} src={channelImage}/>
                    <div className="videoRow__channelName">
                        <p>{channel}</p>
                        {verified ? (<p className='videoRow__verified'><CheckCircle fontSize='small'/></p>):null}
                    </div>
                </div>
                <p>{description}</p>
                
            </div>
        </div>
    )
}

export default VideoRow
