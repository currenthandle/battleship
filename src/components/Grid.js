import React from 'react';
import { connect } from 'react-redux';

import Cell from './Cell';

import '../stylesheets/grid.scss';

class Grid extends React.Component {
    render() {
        if (this.props.hits >= 17) {
            alert('Player 1 Wins!');
        }
        return (
            <div
                className='grid'
            >
            {
                Array.from({ length: 100 }, (spot, i) => {
                    const col=(i % 10) + 1 ;
                    const row=parseInt(i/ 10) + 1;
                    return (
                        <Cell 
                            key={i} 
                            index={i}
                            col={ col }
                            row={ row } 
                            // occupied is a boolean
                            occupied={ this.props.positions.includes(`${col},${row}`) } 
                        />
                    );
                })
            }
            </div>
        );
    }
};

const mapStateToProps = (ships) => {
    const positions = ships
        // ships ---> ship positions
        .map((ship) => {
            return ship.positions 
        })
        // concat all ship positions into one list of strings of type: "5,2"
        .reduce((prev, current) => {
            return prev.concat(current);
        }, []);

    // total number of hits
    const hits = ships.reduce((sum, ship) => {
        return sum + ship.hit;
    }, 0);

    return { hits, positions };
};

export default connect(mapStateToProps)(Grid);
