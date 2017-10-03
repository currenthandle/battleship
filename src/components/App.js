import React from 'react';
import { Provider } from 'react-redux';

import store from '../store';

import Grid from './Grid';
import GameStatus from './GameStatus';

import '../stylesheets/app.scss';

const App = () => (
    <Provider store={ store }>
        <div
            className='app'
        >
            <div
                className='header' 
            />
            <div className='main'>
                <Grid />
                <GameStatus />
            </div>
        </div>
    </Provider>
);

export default App;
