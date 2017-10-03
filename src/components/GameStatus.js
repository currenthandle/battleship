import React from 'react';

import ShipContainer from './ShipContainer';

import '../stylesheets/game-status.scss';

const GameStatus = () => (
    <div 
        className='game-status'
    >
        <div
            className='player-card'
        />
        <ShipContainer />
    </div>
)

export default GameStatus;
