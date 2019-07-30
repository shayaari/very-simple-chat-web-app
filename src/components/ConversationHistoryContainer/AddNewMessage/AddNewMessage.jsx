import React, { Component } from 'react';
import { PropTypes } from 'prop-types';

import './AddNewMessage.scss';

/**
 * add new message to the conversation
 * @class BaseAddNewMessage
 */
export class BaseAddNewMessage extends Component {
    constructor(props) {
        super(props);

        this.state = {
            content: '',
        };

        this.changeContentHandler = this.changeContentHandler.bind(this);
        this.addNewMessageHandler = this.addNewMessageHandler.bind(this);
    }

    componentDidMount() {
        // this.messageInput.focus();
    }

    changeContentHandler(e) {
        const { value } = e && e.target;
        const { key } = e;

        this.setState({
            content: value,
        });

        if (key === 'Enter') {
            this.addNewMessageHandler();
        }
    }

    addNewMessageHandler(e) {
        if (e) {
            e.preventDefault();
        }

        const { content } = this.state;
        const { connectedNewMessage, author, receiver } = this.props;

        this.setState({
            content: '',
        });

        connectedNewMessage(content, author, receiver);
    }

    render() {
        const { content } = this.state;

        return (
            <div className="new-message-container">
                <div className="input-container">
                    <input
                        type="text"
                        value={content}
                        onKeyDown={this.changeContentHandler}
                        onChange={this.changeContentHandler}
                        ref={(input) => { this.messageInput = input; }}
                    />
                </div>
                <button
                    type="submit"
                    onClick={this.addNewMessageHandler}
                >
                    SEND!
                </button>
            </div>
        );
    }
}

BaseAddNewMessage.propTypes = {
    author: PropTypes.string,
    receiver: PropTypes.string,
    connectedNewMessage: PropTypes.func,
};

BaseAddNewMessage.defaultProps = {
    author: '',
    receiver: '',
    connectedNewMessage: () => {},
};

export default BaseAddNewMessage;
