import React from 'react';
import './ChannelRow.css'
import { Avatar } from '@material-ui/core';
import { CheckCircle } from '@material-ui/icons';

function ChannelRow({image,channel,verified,subs,noOfVideos,description}) {
    return (
        <div className='channelRow'>
            <Avatar className='channelRow__avatar' alt={channel} src={image}/>
            <div className="channelRow__info">
                <div className="channelRow__channel">
                    <h4>{channel}</h4>
                    {/* {verified && <CheckCircle/>} */}
                    {verified ? (<h4 className='channelRow__verified'><CheckCircle fontSize='small'/></h4>):null}

                </div>
                <div className="channelRow__description">
                    <p>{subs} subscribers • {noOfVideos} videos</p>
                    <p>{description}</p>
                </div>
            </div>
        </div>
    )
}

export default ChannelRow
