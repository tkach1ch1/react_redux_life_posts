import { formatDistanceToNow } from 'date-fns';
import React from 'react';


export const Timeago = ({time}) => {
    let timeAgo = '';

    if(time) {
    
        const timePeriod = formatDistanceToNow(time)
        timeAgo = `${timePeriod} ago` 
    }
    return (
        <div  title={time}>
            <i>{timeAgo}</i>
        </div>
    )
}