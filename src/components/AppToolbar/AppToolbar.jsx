import React, { Component } from 'react';
import { browserHistory } from 'react-router';
import { PropTypes } from 'prop-types';
import apiConfig from '../../config';

import './AppToolbar.scss';

const newConversationHandler = () => {
    browserHistory.push('/new-conversation');
};

/**
 * redirect to first page & reload the page to clear redux
 */
const logoutHandler = () => {
    browserHistory.push('/');
    window.location.reload();
};


/**
 * generate top toolbar
 * @class AppToolbar
 */
class AppToolbar extends Component {
    render() {
        const { backHandler } = this.props;
        return (
            <div className="app--toolbar">
                <div className="title">
                    <div onClick={backHandler} role="presentation">
                        <span>
                            {apiConfig.app && apiConfig.app.name}
                        </span>
                    </div>
                </div>
                <div className="tools">
                    <div
                        onClick={newConversationHandler}
                        role="presentation"
                    >
                        <span>new chat</span>
                        <i className="left-spacing material-icons">
                            add
                        </i>
                    </div>
                    <div
                        onClick={logoutHandler}
                        role="presentation"
                    >
                        <i className="material-icons">
                            power_settings_new
                        </i>
                    </div>
                </div>
            </div>
        );
    }
}

AppToolbar.propTypes = {
    backHandler: PropTypes.func,
};

AppToolbar.defaultProps = {
    backHandler: () => {},
};


export default AppToolbar;
