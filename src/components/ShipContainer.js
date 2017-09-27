import React from 'react';
import { connect } from 'react-redux';
import Ship from './Ship';

import '../stylesheets/ship-container.scss';

const ShipContainer = (props) => {
    return (
        <div 
            className='ship-container'
        >
        { 
            props.ships.map(ship => {
                return ( 
                    <Ship 
                        key={ship.name}
                        title={ship.name} 
                        quantity={ ship.positions.length } 
                        hit={ ship.hit }
                    /> 
                );
            })
        } 
        </div>    
    );
};

const mapStateProps = (state) => {
    return {
        ships: state
    };
};

export default connect(mapStateProps)(ShipContainer);
