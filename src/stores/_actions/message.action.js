import { messageConstants } from '../_constants';

const getMessage = (id, content, timestamp, author, receiver) => ({
    type: messageConstants.GET_MESSAGE, id, content, timestamp, author, receiver,
});

const insertMessage = (content, author, receiver) => ({
    type: messageConstants.INSERT_MESSAGE, content, author, receiver,
});

export default {
    getMessage,

    insertMessage,
};
