import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { Router, Route, browserHistory } from 'react-router';
import { syncHistoryWithStore } from 'react-router-redux';
import { store } from './stores/appStore';

import App from './components/App';
import ConversationHistoryContainer from './components/ConversationHistoryContainer';
import NewConversation from './components/NewConversation';
import { WelcomeMessage } from './components/UtlsComponents';

import * as serviceWorker from './serviceWorker';

import './index.css';

const history = syncHistoryWithStore(browserHistory, store);

ReactDOM.render(
    <Provider store={store}>
        <App>
            <Router history={history}>
                <Route path="/" component={WelcomeMessage} />
                <Route path="/new-conversation" component={NewConversation} />
                <Route path="/:username" component={ConversationHistoryContainer} />
            </Router>
        </App>
    </Provider>,
    document.getElementById('root'),
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
