import React from 'react';
import { Provider } from 'react-redux';

import store from '../store';

import Grid from './Grid';
import ShipContainer from './ShipContainer';

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
                <div 
                    className='container'
                >
                    <div
                        className='player-card'
                    />
                    <ShipContainer />
                </div>
            </div>
        </div>
    </Provider>
);

export default App;
