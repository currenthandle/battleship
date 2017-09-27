import React from 'react';

import hit from '../assets/hit-miss/hit-small.png';
import miss from '../assets/hit-miss/miss-small.png';

import '../stylesheets/indicator.scss';

const Indicator = (props) => {
    const indicators = [];
    let src;
    for(let i = 0; i < props.quantity; i++) {
        if (i < props.hit) {
            src = hit;
        }
        else {
            src = miss;
        }
        indicators.push(
            <img 
                key={i} 
                src={ src } 
            />
        )
    }
    return (
        <div
            className='indicator'>
        {
            indicators
        }
        </div> 
    );
};

export default Indicator;
