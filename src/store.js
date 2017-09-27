import { createStore } from 'redux';

import data from './layout.json';

const shipData = data.layout.map(ship => {
    return {
        name: ship.ship,
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
                if(state[i].positions.includes(`${action.col},${action.row}`)) {
                    shipState = {
                        ...state[i], 
                        hit: ++state[i].hit
                    };
                    newState.push( shipState );
                    //break;
                }
                else {
                    shipState = state[i];
                    newState.push(shipState);
                }
            }
            return newState;
        default: 
            return state;
    }   
}

export default createStore(ships);

