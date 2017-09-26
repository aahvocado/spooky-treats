import '../styles/css/views/CandyMap.css';
import React, { Component } from 'react';
import PropTypes from 'prop-types';

import MapHouse from '../components/MapHouse';

export default class CandyMap extends Component {
    static defaultProps = {
        data: [],
        selectedHouse: undefined,
        onHouseDidClick: () => Promise.resolve(),
    }

    static propTypes = {
        data: PropTypes.array,
        selectedHouse: PropTypes.object,
        onHouseDidClick: PropTypes.func,
    }

    render() {
        const { data, selectedHouse } = this.props;

        const housesList = [];
        data.forEach((houseData, idx) => {
            if (houseData) {                
                housesList.push(
                    <MapHouse
                        key={ `candy-map--map-house-${idx}-key` }
                        data={ houseData }
                        onHouseClick={ this.handleHouseClick }
                        isSelected={ selectedHouse ? selectedHouse.idx === houseData.idx : false } />
                );
            }
        });

        const containerStyles = {
            
        }

        if (selectedHouse) {
            const houseSize = 80; // TODO: global var
            const mapHeight = 300; // TODO: global var
            const { x, y } = selectedHouse;
            // Calculate by finding the center of the Map then offsetting by the House's position
            const xOffset = (window.innerWidth / 2) - x - (houseSize / 2);
            const yOffset = (mapHeight / 2) - (houseSize / 2) - (y / 2); 
            containerStyles.transform = `translate(${xOffset}px, ${yOffset}px)`;
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
    handleHouseClick = (house) => {
        const { onHouseClick } = this.props;
        onHouseClick(house);
    }
}
