import { apiConstants } from '../_constants';

const initializeApp = username => ({
    type: apiConstants.API_INITIALIZE_APP, username,
});

const waitingRequest = username => ({
    type: apiConstants.API_WAITING_REQUEST, username,
});

export default {
    initializeApp,

    waitingRequest,
};
