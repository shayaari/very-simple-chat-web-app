import React, { Component } from 'react';
import { PropTypes } from 'prop-types';
import { connect } from 'react-redux';
import { browserHistory } from 'react-router';
import { messageServices, userServices } from '../../_services';
import AddNewMessage from './AddNewMessage';
import { Avatar, ShowTime } from '../UtlsComponents';

import './ConversationHistoryContainer.scss';


/**
 * Display user conversation messages
 * @class BaseConversationHistoryContainer
 */
export class BaseConversationHistoryContainer extends Component {
    constructor(props) {
        super(props);

        this.conversationRef = React.createRef();
    }

    componentDidMount() {
        const { selectedUsername, params } = this.props;

        // redirect to home page if user not selected
        if (params.username !== selectedUsername) {
            browserHistory.push('/');
        }

        this.scrollToBottom();
    }

    componentDidUpdate() {
        this.scrollToBottom();
    }

    /**
     * force scroll to go to the last message
     */
    scrollToBottom() {
        this.conversationRef.current.scrollTop = this.conversationRef.current.scrollHeight;
    }

    render() {
        const {
            username, selectedUsername, messageList, sendNewMessage, backBtnHandler,
        } = this.props;
        return (
            <div className="conversation-history-wrap">
                <div className="conversation-toolbar">
                    <div
                        className="back-btn"
                        onClick={backBtnHandler}
                        role="presentation"
                    >
                        Close Chat
                        <i className="material-icons">
                            clear
                        </i>
                    </div>
                    <div className="user-name">
                        {selectedUsername}
                        <i className="material-icons">
                            face
                        </i>
                    </div>
                </div>

                <div
                    className="conversation-history-container"
                    ref={this.conversationRef}
                >
                    {messageList && messageList.map((item, idx) => (
                        <div
                            className={`message-container ${
                                item.author === selectedUsername ? 'dark' : ''
                            } ${
                                item.author !== (messageList[idx - 1] && messageList[idx - 1].author) ? 'first' : ''
                            } ${
                                item.author !== (messageList[idx + 1] && messageList[idx + 1].author) ? 'last' : ''
                            }`}
                            key={item.id}
                        >
                            {item.author !== (messageList[idx - 1] && messageList[idx - 1].author)
                            && (
                                <div className="top-container">
                                    <Avatar username={item.author} />
                                    <div className="author-name">{item.author}</div>
                                    <ShowTime timestamp={item.timestamp} />
                                </div>
                            )}
                            <div className="body-container">
                                {item.content}
                            </div>
                        </div>
                    ))}
                </div>
                <AddNewMessage
                    author={username}
                    receiver={selectedUsername}
                    connectedNewMessage={sendNewMessage}
                />
            </div>
        );
    }
}

BaseConversationHistoryContainer.propTypes = {
    messageList: PropTypes.array,
    selectedUsername: PropTypes.string,
    username: PropTypes.string,
    sendNewMessage: PropTypes.func,
    params: PropTypes.object,
    backBtnHandler: PropTypes.func,
};

BaseConversationHistoryContainer.defaultProps = {
    messageList: [],
    selectedUsername: '',
    username: '',
    sendNewMessage: () => {},
    params: {},
    backBtnHandler: () => {},
};

const mapDispatchToProps = {
    sendNewMessage: messageServices.sendMessage,
    backBtnHandler: userServices.backBtnHandler,
};

const mapStateToProps = state => ({
    messageList: messageServices.generateMessageList(state.message.list, state.user.selected),
    selectedUsername: state.user.selected,
    username: state.user.username,
});

export default connect(mapStateToProps, mapDispatchToProps)(BaseConversationHistoryContainer);
