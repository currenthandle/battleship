import React from 'react';

import Indicator from './Indicator';

import '../stylesheets/ship.scss';

const Ship = (props) => {
        return (
            <div
                className='ship'
            >
                <img 
                    src={ require(`../assets/ships/${ props.title }.png`) } 
                />
                <Indicator 
                    hit={ props.hit }
                    quantity={ props.quantity }
                />
            </div>
        );
}

export default Ship;
