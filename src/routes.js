import { BrowserRouter, Switch, Route } from 'react-router-dom';

import React from 'react';

// import { Container } from './styles';

import Main from './pages/Main';
import Repository from './pages/Repository';

export default function Routes() {
    return (
        // direaciona
        <BrowserRouter>
            <Switch>
                <Route path="/" exact component={Main} />
                <Route path="/repository/:repository" component={Repository} />
            </Switch>
        </BrowserRouter>
    );
}
