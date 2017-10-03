import React from 'react';
import { connect } from 'react-redux';

import miss from '../assets/hit-miss/miss.png';
import hit from '../assets/hit-miss/hit.png';

import '../stylesheets/cell.scss';

class Cell extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            clicked: false,
            occupied: props.occupied
        };

        this.handleClick = this.handleClick.bind(this);
        this.getBackground = this.getBackground.bind(this);
        this.getBorder = this.getBorder.bind(this);
    }
    gameOver() {
        return this.props.hits >= 17;
    }
    handleClick(e) {
        if (this.state.clicked || this.gameOver()) {
            return;
        }
        else {
            this.setState({ 
                clicked: true 
            });

            this.props.dispatch(
                (() => ({
                    type: 'CLICK_CELL',
                    col: this.props.col,
                    row: this.props.row,
                    occupied: this.state.occupied
                }))()
            );
        }
    }
    // style cell border
    getBorder() {
        let borderStyle = {};
        // Cell is in the left most column
        if (this.props.col === 1) {
            borderStyle = {
                ...borderStyle,
                borderLeft: 'none'
            }; 
        }
        // Cell is in the right most column
        else if (this.props.col === 10) {
            borderStyle = {
                ...borderStyle,
                borderRight: 'none'
            }; 
        }
        // Cell is in the top row
        if (this.props.row === 1) {
            borderStyle = {
                ...borderStyle,
                borderTop: 'none'
            }; 
        }
        // Cell is in the bottom row
        else if (this.props.row === 10) {
            borderStyle = {
                ...borderStyle,
                borderBottom: 'none'
            }; 
        }
        return borderStyle;
    }
    // style cell background
    getBackground() {
        const backgroundStyle = { };
        if(!this.state.clicked) {
            return  backgroundStyle;
        } 
        else if (!this.state.occupied) {
            return {
                ...backgroundStyle,
                backgroundImage: `url(${ miss })`
            };
        }
        // cell is clicked and occupied (hit)
        else {
            return {
                ...backgroundStyle,
                backgroundImage: `url(${ hit })`
            };
        }
    }
    render() {
        const backgroundStyle = this.getBackground();
        const borderStyle = this.getBorder();
        return (
            <div
                className='cell'
                onClick={ this.handleClick }
                style={{ 
                    ...backgroundStyle,
                    ...borderStyle,
                    gridColumn: this.props.col,
                    gridRow: this.props.row,
                }}
            >
            </div>
        );
    }
};

const mapStateToProps = (ships) => {
    const hits = ships.reduce((sum, ship) => {
        return sum + ship.hit;
    }, 0);
    return { hits };
};

export default connect(mapStateToProps)(Cell);
