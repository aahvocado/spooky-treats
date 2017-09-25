import '../styles/css/views/CandyMap.css';
import React, { Component } from 'react';
// import PropTypes from 'prop-types';

export default class CandyMap extends Component {
    static defaultProps = {
        data: [],
    };

    static propTypes = {
        // data: PropTypes.object,
    };

    render() {
        const { data } = this.props;
        console.log('house data', data);

        const housesList = [];
        data.forEach((hasHouse, idx) => {
            if (hasHouse) {
                // TODO: this random should be separate from the seed
                const houseData = {
                    idx: idx,
                    x: 100 + 75 * idx,
                    y: 50 + Math.random() * 50,
                    houseType: 'default',
                };
                const renderedHouse = this.renderHouseIcon(houseData);
                housesList.push(renderedHouse);
            }
        });

        return (
            <div className="st-map">
                <div className="st-map--container">
                    { housesList }
                </div>
            </div>
        );
    }

    /*
        renders a house icon
    */
    renderHouseIcon(data) {
        const { idx, x, y } = data;
        const styles = {
            left: x,
            top: y,
        };

        return (
            <span
                key={ `candy-map--house-icon--${idx}-key` }
                className="st-house-icon"
                style={ styles } >
                <button
                     className="st-house-icon--button" >
                    { `House ${idx}` }
                </button>
            </span>
        );
    }
}
