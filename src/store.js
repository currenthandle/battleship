import { createStore } from 'redux';

import data from './layout.json';

// format ship data
const shipData = data.layout.map(ship => {
    return {
        name: ship.ship,
        // Array of arrays ---> array of strings
        positions: ship.positions.reduce((prev, current) => {
            return prev.concat([`${ current[0] + 1 },${ current[1] + 1}`]);
        }, []),
        hit: 0
    }
});

function ships(state = shipData, action) {
    switch (action.type) {
        case 'CLICK_CELL':
            let newState = [];
            for(let i = 0; i < state.length; i++){
                let shipState = {};
                // if the current ship has the position of the clicked cell
                if(state[i].positions.includes(`${action.col},${action.row}`)) {
                    shipState = {
                        ...state[i], 
                        // increment the ships hits property
                        hit: ++state[i].hit
                    };
                    newState.push( shipState );
                }
                else {
                    newState.push(state[i]);
                }
            }
            return newState;
        default: 
            return state;
    }   
}

export default createStore(ships);

