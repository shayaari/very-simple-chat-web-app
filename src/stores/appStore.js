import {
    createStore, compose, applyMiddleware, combineReducers,
} from 'redux';
import thunk from 'redux-thunk';
import { routerReducer } from 'react-router-redux';
import { user, message, api } from './_reducers';
import { userMiddleware, messageMiddleware, apiMiddleware } from './_middleware';

// Add redux-thunk, so we can handle asynchronous updates to the store.
// For example, when we make api calls or want to update after a promise resolves.
const enhancers = [
    applyMiddleware(
        thunk,
        userMiddleware,
        messageMiddleware,
        apiMiddleware,
    ),
];

// also, disabling the linter here because this prop name is controlled by the redux
// chrome extension and the setup instructions state to reference this directly.
// This extension is not technically necessary for the app to run, but will drastically
// improve the ability to debug the front end data store.
// https://chrome.google.com/webstore/detail/redux-devtools/lmhkpmbekcpmknklioeibfkpmmfibljd
// eslint-disable-next-line no-underscore-dangle
if (window.__REDUX_DEVTOOLS_EXTENSION__) enhancers.push(window.__REDUX_DEVTOOLS_EXTENSION__());

const reducer = combineReducers({
    user,
    message,
    api,
    routing: routerReducer,
});


export const store = createStore(
    reducer,
    compose(...enhancers),
);

export default store;
