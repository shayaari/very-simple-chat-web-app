import React, { Component } from 'react';
import { PropTypes } from 'prop-types';
import { connect } from 'react-redux';
import AppToolbar from '../AppToolbar';
import ConversationsList from '../ConversationsList';
import SetCurrentUserToStart from '../SetCurrentUserToStart';
import { userServices } from '../../_services';

import './App.scss';

/**
 * An application prototype to preview chat app.
 * @class BaseApp
 */
export class BaseApp extends Component {
    render() {
        const {
            currentUser, setCurrentUser, backBtnHandler,
            selectedUser, children, pathUrl,
        } = this.props;

        /* let select a username to start from */
        if (!currentUser) {
            return (
                <div className="app">
                    <SetCurrentUserToStart setHandler={setCurrentUser} />
                </div>
            );
        }

        return (
            <div className={`app ${selectedUser ? 'chat' : 'home'}`} data-path={pathUrl}>
                <AppToolbar backHandler={backBtnHandler} />
                <div className="app--container">
                    <ConversationsList selected={selectedUser} />
                    {children}
                </div>
            </div>
        );
    }
}

BaseApp.propTypes = {
    currentUser: PropTypes.string,
    selectedUser: PropTypes.string,
    children: PropTypes.node,
    setCurrentUser: PropTypes.func,
    pathUrl: PropTypes.string,
    backBtnHandler: PropTypes.func,
};

BaseApp.defaultProps = {
    currentUser: '',
    selectedUser: '',
    pathUrl: '',
    children: {},
    setCurrentUser: () => {},
    backBtnHandler: () => {},
};

const mapDispatchToProps = {
    setCurrentUser: userServices.setCurrentUser,
    backBtnHandler: userServices.backBtnHandler,
};

const mapStateToProps = state => ({
    currentUser: state.user.username,
    selectedUser: state.user.selected,
    pathUrl: state.routing && state.routing.locationBeforeTransitions
        && state.routing.locationBeforeTransitions.pathname,
});


export default connect(mapStateToProps, mapDispatchToProps)(BaseApp);
