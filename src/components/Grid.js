import React from 'react';
import { connect } from 'react-redux';

import Cell from './Cell';

import '../stylesheets/grid.scss';

import layout from '../layout.json';

const positions = layout.layout
    .map(ship => {
        return ship.positions
    })
    .reduce((prev, current) => { 
        return prev.concat(current);
    })
    .reduce((prev, current) => {
        return prev.concat(`${current[0]},${current[1]}`);
    }, []);

class Grid extends React.Component {
    constructor(props) {
        super(props);
        this.state = { over: false };
    }
    componentWillUpdate() {
        if (this.state.over) {
            alert('Player 1 Wins!');
            return;
        }
        console.log(this.props.hits)
        if(this.props.hits >= 16) {
            this.setState({ over: true })
        }
    }
    render() {
        return (
            <div
                className='grid'
            >
            {
                Array.from({ length: 100 }, (spot, i) => {
                    const col=(i % 10) + 1 ;
                    const row=parseInt(i/ 10) + 1;
                    return <Cell 
                        key={i} 
                        index={i}
                        col={ col }
                        row={ row } 
                        occupied={ this.props.positions.includes(`${col},${row}`) } 
                    />
                })
            }
            </div>
        );
    }
};

const mapStateToProps = (state) => {
    const positions = state
        .map((ship) => {
            return ship.positions 
        })
        .reduce((prev, current) => {
            return prev.concat(current);
        }, []);

    const hits = state.reduce((current, next) => {
        const sum = current + next.hit;
        return sum;
    }, 0);

    return { hits, positions };
};

export default connect(mapStateToProps)(Grid);
