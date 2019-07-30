import apiConfig from '../../config';
import { messageConstants } from '../_constants';
import messageAction from '../_actions/message.action';

export default store => next => (action) => {
    switch (action.type) {
        case messageConstants.GET_MESSAGE: {
            const { id } = action;
            const { message } = store.getState();
            const { list: messageList } = message;

            // check if message already exist
            let messageExist = false;

            messageList.forEach((messageItem) => {
                if (messageItem.id === id) {
                    messageExist = true;
                }
            });

            // skip redux process ( message already exist )
            if (messageExist) {
                return;
            }
        } break;

        case messageConstants.INSERT_MESSAGE: {
            const { content: message, author: username, receiver: to } = action;

            if (!message || !username || !to) {
                return;
            }

            fetch(`${apiConfig.base_url}/send`, {
                headers: {
                    'Content-type': 'application/json',
                },
                method: 'POST',
                body: JSON.stringify({
                    username,
                    to,
                    message,
                }),
            })
                .then(resp => resp.json()) // Transform the data into json
                .then((data) => {
                    const {
                        id, timestamp, content, from: author, to: receiver,
                    } = data;

                    // insert new message to redux
                    store.dispatch(messageAction.getMessage(
                        id, content, timestamp, author, receiver,
                    ));
                });
        } break;
        default:
            break;
    }
    next(action);
};
