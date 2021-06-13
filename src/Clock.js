import React from 'react';
import './Clock.css';
const dayOrNight = {
    day: {
        iconName: 'sun'
    },
    night: {
        iconName: 'moon'
    }
};
const hours = new Date().getHours();
const isDay = hours > 6 && hours < 20;
const Clock = ({time}) => {
    const temp = isDay ? 'day' : 'night';
    const {iconName} = dayOrNight[temp];
    return(
        <div className = {`body ${temp}`}>
            <div className = {`in ${temp}`}>
           <i className={`massive ${iconName} icon`}/>
            <h1>{time}</h1>
            {/* {iconName} */}
        </div>
        </div>
        
    );
};
export default Clock;