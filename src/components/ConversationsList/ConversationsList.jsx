import React, { Component } from 'react';
import { PropTypes } from 'prop-types';
import { connect } from 'react-redux';
import { userServices } from '../../_services';

import './ConversationsList.scss';


/**
 * Display list of user which current user had conversations with
 * @class BaseConversationsList
 */
export class BaseConversationsList extends Component {
    constructor(props) {
        super(props);

        this.openUserConversation = this.openUserConversation.bind(this);
    }

    openUserConversation(e) {
        const { username } = e && e.target && e.target.dataset;
        const { selectUser } = this.props;
        // go to selected user conversation page
        selectUser(username);
    }

    render() {
        const { userList, selectedUsername } = this.props;
        return (
            <div className="conversation-list-container">
                {userList && userList.map(item => (
                    <div
                        className={`conversation-item ${selectedUsername === item.username ? 'active' : ''}`}
                        key={item.lastUpdatedTime}
                        data-username={item.username}
                        data-new-message={
                            item.lastSelectedTime < item.lastUpdatedTime
                            && selectedUsername !== item.username
                        }
                        onClick={this.openUserConversation}
                        role="presentation"
                    >
                        {item.username}
                    </div>
                ))}
            </div>
        );
    }
}

BaseConversationsList.propTypes = {
    userList: PropTypes.array,
    selectedUsername: PropTypes.string,
    selectUser: PropTypes.func,
};

BaseConversationsList.defaultProps = {
    userList: [],
    selectedUsername: '',
    selectUser: () => {},
};

const mapDispatchToProps = {
    selectUser: userServices.selectUser,
};

const mapStateToProps = state => ({
    userList: userServices.generateUserList(state.user.list),
    selectedUsername: state.user.selected,
});

export default connect(mapStateToProps, mapDispatchToProps)(BaseConversationsList);
