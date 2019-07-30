import React from 'react';
import { PropTypes } from 'prop-types';

import './utilities.scss';

function formatTime(unixTimestamp) {
    const date = new Date(Number(unixTimestamp));
    let hours = date.getHours();
    let minutes = date.getMinutes();
    const ampm = hours >= 12 ? 'pm' : 'am';
    hours %= 12;
    hours = hours || 12; // the hour '0' should be '12'
    minutes = minutes < 10 ? `0${minutes}` : minutes;
    const strTime = `${hours}:${minutes} ${ampm}`;
    return strTime;
}

/**
 * Application welcome message
 */
export const ShowTime = (props) => {
    const { timestamp } = props;
    const time = formatTime(timestamp);
    return <div className="time-warp">{time}</div>;
};

ShowTime.propTypes = {
    timestamp: PropTypes.string,
};

ShowTime.defaultProps = {
    timestamp: 0,
};

export default ShowTime;
