import '../styles/css/views/CandyMap.css';
import React, { Component } from 'react';
import PropTypes from 'prop-types';

import MapHouse from '../components/MapHouse';

export default class CandyMap extends Component {
    static defaultProps = {
        data: [],
        selectedIdx: 0,
        onHouseDidClick: () => Promise.resolve(),
    }

    static propTypes = {
        data: PropTypes.array,
        selectedIdx: PropTypes.number,
        onHouseDidClick: PropTypes.func,
    }

    render() {
        const { data } = this.props;

        const housesList = [];
        data.forEach((houseData, idx) => {
            if (houseData) {                
                housesList.push(
                    <MapHouse
                        key={ `candy-map--map-house-${idx}-key` }
                        data={ houseData }
                        onHouseClick={ this.handleHouseClick } />
                );
            }
        });

        const containerStyles = {
            transform: `translate(${window.innerWidth/2}px, ${0}px)`,
        }

        return (
            <div className="st-map">
                <div
                    className="st-map--container"
                    style={ containerStyles } >
                    { housesList }
                </div>
            </div>
        );
    }

    /*
        tells App.js what house was clicked
    */
    handleHouseClick = (idx) => {
        const { onHouseClick } = this.props;
        onHouseClick(idx);
    }
}
