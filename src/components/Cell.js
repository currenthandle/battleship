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
        return this.props.hits <= 17
         
    }
    handleClick(e) {
        if (this.state.clicked) {
            return;
        }
        else {
            this.setState({ 
                clicked: true 
            });

            // Dispatch Click Cell Action
            this.props.dispatch(
                (() => ({
                    type: 'CLICK_CELL',
                    col: this.props.col,
                    row: this.props.row
                }))()
            );
        }
    }
    getBorder() {
        let borderStyle = {};
        if (this.props.col === 1) {
            borderStyle = {
                ...borderStyle,
                borderLeft: 'none'
            }; 
        }
        if (this.props.col === 10) {
            borderStyle = {
                ...borderStyle,
                borderRight: 'none'
            }; 
        }
        if (this.props.row === 1) {
            borderStyle = {
                ...borderStyle,
                borderTop: 'none'
            }; 
        }
        if (this.props.row === 10) {
            borderStyle = {
                ...borderStyle,
                borderBottom: 'none'
            }; 
        }
        return borderStyle;
    }
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
    return {};
};

export default connect(mapStateToProps)(Cell);
