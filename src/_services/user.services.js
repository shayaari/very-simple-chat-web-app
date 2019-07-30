import { browserHistory } from 'react-router';
import _ from 'lodash';
import { userActions } from '../stores/_actions';

/**
 * generate user conversations list order by last updated time
 * @param {array} userList
 */
const generateUserList = userList => (
    _.values(_.orderBy(userList, ['lastUpdatedTime'], ['desc']))
);

const selectUser = username => (dispatch) => {
    // redirect to username page
    browserHistory.push(`/${username}`);
    // select the username to start chatting with
    dispatch(userActions.selectUser(username));
};

const setCurrentUser = username => (dispatch) => {
    dispatch(userActions.setCurrentUser(username));
};

const addNewConversation = username => (dispatch) => {
    // set new username to redux
    dispatch(userActions.getUser(username, Date.now()));
    // redirect to username page
    browserHistory.push(`/${username}`);
    // select the username to start chatting with
    dispatch(userActions.selectUser(username));
};

const backBtnHandler = () => (dispatch) => {
    // redirect to home page
    browserHistory.push('/');
    // deselect the username
    dispatch(userActions.deselectUser());
};

export default {
    generateUserList,
    selectUser,
    setCurrentUser,
    addNewConversation,
    backBtnHandler,
};
