import React, { Component } from 'react';
import { PropTypes } from 'prop-types';
import { connect } from 'react-redux';
import { userServices } from '../../_services';

import './NewConversation.scss';


/**
 * add new user to redux user list and redirect to user conversation page
 * @class BaseNewConversation
 */
export class BaseNewConversation extends Component {
    constructor(props) {
        super(props);

        this.state = {
            username: '',
        };

        this.onChangeHandler = this.onChangeHandler.bind(this);
        this.onKeyDownHandler = this.onKeyDownHandler.bind(this);
        this.newConversationHandler = this.newConversationHandler.bind(this);
    }

    onKeyDownHandler(e) {
        const { key } = e;

        if (key === 'Enter') {
            this.newConversationHandler();
        }
    }

    onChangeHandler(e) {
        const { value } = e && e.target;
        this.setState({
            username: value.toLowerCase(),
        });
    }

    newConversationHandler() {
        const { username } = this.state;
        const { NewConversation } = this.props;

        // setup new conversation
        NewConversation(username);
    }

    render() {
        const { username } = this.state;
        return (
            <div className="new-conversation-container">
                <div className="text">
                    {"Enter your friend's name to start a conversation."}
                </div>
                <div className="input">
                    <input
                        type="text"
                        value={username}
                        onChange={this.onChangeHandler}
                        onKeyDown={this.onKeyDownHandler}
                    />
                </div>
                <button type="button" onClick={this.newConversationHandler}>
                    START
                </button>
            </div>
        );
    }
}

BaseNewConversation.propTypes = {
    NewConversation: PropTypes.func,
};

BaseNewConversation.defaultProps = {
    NewConversation: () => {},
};

const mapDispatchToProps = {
    NewConversation: userServices.addNewConversation,
};

export default connect(null, mapDispatchToProps)(BaseNewConversation);
