/* eslint-disable no-undef */
import React from 'react';
import './App.css';
import { bglog } from './utils';
import LoggedIn from './components/loggedin';
import LoggedOut from './components/loggedout';

function App() {
    const [loggedIn, setLoggedIn] = React.useState(false);

    chrome.storage.local.get(['_x'], (result) => {
        bglog(result);
        setLoggedIn(!!result._x);
    });

    if (loggedIn) return <LoggedIn />;
    return <LoggedOut />;
}

export default App;
