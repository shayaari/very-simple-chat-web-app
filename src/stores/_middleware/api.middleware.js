import apiConfig from '../../config';
import { apiConstants } from '../_constants';
import { messageActions, userActions, apiActions } from '../_actions';

export default store => next => (action) => {
    switch (action.type) {
        // call to get user list & conversation messages for the first time
        case apiConstants.API_INITIALIZE_APP: {
            const { username } = action;

            /** call server api to get user first conversations setup */
            fetch(`${apiConfig.base_url}/get?user=${username}`)
                .then(resp => resp.json()) // Transform the data into json
                .then((data) => {
                    const conversationList = data;
                    conversationList.forEach((item) => {
                        const { username: receiver, lastUpdatedDate, messageList } = item;

                        // add user to user conversations list
                        store.dispatch(userActions.getUser(receiver, lastUpdatedDate));

                        messageList.forEach((element) => {
                            const {
                                id, content, timestamp, from, to,
                            } = element;

                            // add message to redux store
                            store.dispatch(messageActions.getMessage(
                                id, content, timestamp, from, to,
                            ));
                        });
                    });

                    // call waiting request
                    store.dispatch(
                        apiActions.waitingRequest(username),
                    );
                })
                .catch(() => {
                    // call waiting request
                    store.dispatch(
                        apiActions.waitingRequest(username),
                    );
                });
        } break;

        case apiConstants.API_WAITING_REQUEST: {
            const { username } = action;

            fetch(`${apiConfig.base_url}/waiting?user=${username}&timestamp=${Date.now()}`)
                .then(resp => resp.json()) // Transform the data into json
                .then((data) => {
                    const conversationList = data;
                    conversationList.forEach((item) => {
                        const { username: receiver, lastUpdatedDate, messageList } = item;

                        // add user to user conversations list
                        store.dispatch(userActions.getUser(receiver, lastUpdatedDate));

                        messageList.forEach((element) => {
                            const {
                                id, content, timestamp, from, to,
                            } = element;

                            // add message to redux store
                            store.dispatch(messageActions.getMessage(
                                id, content, timestamp, from, to,
                            ));
                        });
                    });

                    // call waitingRequest again to waite for new changes
                    store.dispatch(apiActions.waitingRequest(username));
                });
        } break;

        default: break;
    }
    next(action);
};
