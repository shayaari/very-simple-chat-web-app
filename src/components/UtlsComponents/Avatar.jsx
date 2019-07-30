import React from 'react';
import { PropTypes } from 'prop-types';

import './utilities.scss';

/**
 * Application welcome message
 */
export const Avatar = (props) => {
    const { username } = props;
    const content = username.substring(0, 2).toUpperCase();
    return <div className="username-avatar" data-content={content} />;
};

Avatar.propTypes = {
    username: PropTypes.string,
};

Avatar.defaultProps = {
    username: '',
};

export default Avatar;
