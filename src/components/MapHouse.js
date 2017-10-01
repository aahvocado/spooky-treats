import '../styles/css/components/MapHouse.css';
import React, { Component } from 'react';
import PropTypes from 'prop-types';
import cn from 'classnames';

/*
    Represents a single House on the map
*/
export default class MapHouse extends Component {
    static defaultProps = {
        data: {},
        onHouseClick: () => Promise.resolve(),
        isSelected: false, // is this selected 
    }

    static propTypes = {
        data: PropTypes.object,
        onHouseClick: PropTypes.func,
        isSelected: PropTypes.bool,
    }

    render() {
        const { data } = this.props;
        const { x, y, visited } = data;
        const style = {
            left: x,
            top: y,
        };

        const modifiers = {
            'mod-visited': visited,
            'mod-not-visited': !visited,
        };

        return (
            <span
                className={ cn('st-map-house', modifiers) }
                style={ style } >
                <button
                     className="st-map-house--button"
                     onClick={ this.handleHouseClick } >
                </button>
            </span>
        );
    }

    /*
        tells CandyMap.js what house was clicked

        passes up this house's data
    */
    handleHouseClick = () => {
        const { onHouseClick, data } = this.props;
        onHouseClick(data);
    }
}
