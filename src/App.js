import React, {Component} from 'react';
import {Provider} from 'react-redux';
import Module from './module'
import store from './../store/index'

export default class App extends Component {
    constructor() {
        super();
    }

    render() {
        return (
            <Provider store={store}>
                <Module/>
            </Provider>
        );
    }
}

