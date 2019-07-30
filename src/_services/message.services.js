import _ from 'lodash';
import { messageActions } from '../stores/_actions';

/**
 * generate user conversations list order by last updated time
 * @param {array} userList
 */
const generateMessageList = (messageList, username) => {
    const conversationMessages = messageList.filter(item => (
        item.author === username || item.receiver === username
    ));
    return _.values(_.orderBy(conversationMessages, ['timestamp'], ['asc']));
};

const sendMessage = (content, author, receiver) => (dispatch) => {
    dispatch(messageActions.insertMessage(content, author, receiver));
};

export default {
    generateMessageList,
    sendMessage,
};
