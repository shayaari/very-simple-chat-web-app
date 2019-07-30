import { userConstants } from '../_constants';

const stateSchema = {
    list: [],
    username: '',
    selected: '',
};
export default (state = stateSchema, action) => {
    switch (action.type) {
        // insert a user to store
        case userConstants.GET_USER: {
            const { username, lastUpdatedTime } = action;

            const lastSelectedTime = (state.list[username] && state.list[username].lastSelectedTime)
                || Date.now().toString();
            return {
                ...state,
                list: {
                    ...state.list,
                    [username]: {
                        ...state.list[username],
                        username,
                        lastUpdatedTime,
                        lastSelectedTime,
                    },
                },
            };
        }

        case userConstants.SET_CURRENT_USER: {
            const { username } = action;

            return {
                ...state,
                username,
            };
        }


        case userConstants.SELECT_USER: {
            const { username } = action;

            return {
                ...state,
                selected: username,
                list: {
                    ...state.list,
                    [username]: {
                        ...state.list[username],
                        lastSelectedTime: Date.now().toString(),
                    },
                },
            };
        }

        case userConstants.DESELECT_USER: {
            return {
                ...state,
                selected: null,
            };
        }

        default:
            return state;
    }
};
