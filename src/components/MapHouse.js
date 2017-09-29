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
        isVisited: false,
    }

    static propTypes = {
        data: PropTypes.object,
        onHouseClick: PropTypes.func,
        isSelected: PropTypes.bool,
        isVisited: PropTypes.bool,
    }

    render() {
        const { data, isVisited } = this.props;
        const { id, x, y } = data;
        const style = {
            left: x,
            top: y,
        };

        const modifiers = {
            'mod-visited': isVisited,
            'mod-not-visited': !isVisited,
        };

        return (
            <span
                className={ cn('st-map-house', modifiers) }
                style={ style } >
                <button
                     className="st-map-house--button"
                     onClick={ this.handleHouseClick } >
                    { `House ${id}` }
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
