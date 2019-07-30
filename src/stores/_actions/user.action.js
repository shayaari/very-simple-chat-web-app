import { userConstants } from '../_constants';

const getUser = (username, lastUpdatedTime) => ({
    type: userConstants.GET_USER, username, lastUpdatedTime,
});

const selectUser = username => ({
    type: userConstants.SELECT_USER, username,
});

const deselectUser = () => ({
    type: userConstants.DESELECT_USER,
});

const setCurrentUser = username => ({
    type: userConstants.SET_CURRENT_USER, username,
});

export default {
    getUser,
    selectUser,
    deselectUser,
    setCurrentUser,
};
