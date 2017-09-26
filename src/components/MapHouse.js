// import '../styles/css/views/CandyMap.css';
import React, { Component } from 'react';
import PropTypes from 'prop-types';

/*
    Represents a single House on the map
*/
export default class MapHouse extends Component {
    static defaultProps = {
        data: {},
        onHouseClick: () => Promise.resolve(),
    }

    static propTypes = {
        data: PropTypes.object,
        onHouseClick: PropTypes.func,
    }

    render() {
        const { data } = this.props;
        const { idx, x, y } = data;
        const style = {
            left: x,
            top: y,
        };

        return (
            <span
                className="st-house-icon"
                style={ style } >
                <button
                     className="st-house-icon--button"
                     onClick={ this.handleHouseClick } >
                    { `House ${idx}` }
                </button>
            </span>
        );
    }

    /*
        tells CandyMap.js what house was clicked
    */
    handleHouseClick = () => {
        const { data } = this.props;
        const { idx } = data;
        const { onHouseClick } = this.props;
        onHouseClick(idx);
    }
}
