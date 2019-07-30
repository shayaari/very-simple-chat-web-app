import { messageConstants } from '../_constants';

const stateSchema = {
    list: [],
};
export default (state = stateSchema, action) => {
    switch (action.type) {
        /**
         *  insert a message to store
         */
        case messageConstants.GET_MESSAGE: {
            const {
                id, content, timestamp, author, receiver,
            } = action;

            const newMessage = {
                id,
                content,
                timestamp: timestamp.toString(),
                author,
                receiver,
            };

            return {
                ...state,
                list: [
                    ...state.list,
                    newMessage,
                ],
            };
        }

        default:
            return state;
    }
};
