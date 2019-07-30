import { userConstants } from '../_constants';
import { apiActions } from '../_actions';

export default state => next => (action) => {
    switch (action.type) {
        case userConstants.SET_CURRENT_USER: {
            const { username } = action;
            // initialize current user conversations;
            state.dispatch(apiActions.initializeApp(username));
        } break;
        default:
            break;
    }
    next(action);
};
