import React, { Component } from 'react';
import { PropTypes } from 'prop-types';

import './SetCurrentUserToStart.scss';

/**
 * let user to choose a username to start from
 * @class BaseSetCurrentUserToStart
 */
export class BaseSetCurrentUserToStart extends Component {
    constructor(props) {
        super(props);

        this.state = {
            username: '',
        };

        this.setUserHandler = this.setUserHandler.bind(this);
        this.changeUsernameHandler = this.changeUsernameHandler.bind(this);
        this.keyDownHandler = this.keyDownHandler.bind(this);
    }

    setUserHandler() {
        const { username } = this.state;
        const { setHandler } = this.props;
        setHandler(username);
    }

    changeUsernameHandler(e) {
        const { value } = e && e.target;

        this.setState({
            username: value.toLowerCase(),
        });
    }

    keyDownHandler(event) {
        if (event.keyCode === 13) {
            this.setUserHandler();
        }
    }

    render() {
        const { username } = this.state;

        return (
            <div className="select-current-user-container">
                <div className="name">
                    Enter Your USERNAME:
                </div>
                <div className="input">
                    <input
                        type="text"
                        value={username}
                        onChange={this.changeUsernameHandler}
                        onKeyDown={this.keyDownHandler}
                    />
                </div>
                <button type="submit" onClick={this.setUserHandler}>
                    START!
                </button>
            </div>
        );
    }
}

BaseSetCurrentUserToStart.propTypes = {
    setHandler: PropTypes.func,
};

BaseSetCurrentUserToStart.defaultProps = {
    setHandler: () => {},
};

export default BaseSetCurrentUserToStart;
