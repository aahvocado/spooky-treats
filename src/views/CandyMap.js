import '../styles/css/views/CandyMap.css';
import React, { Component } from 'react';
import PropTypes from 'prop-types';

export default class CandyMap extends Component {
    static defaultProps = {
        data: [],
        selectedIdx: 0,
    };

    static propTypes = {
        // data: PropTypes.object,
        selectedIdx: PropTypes.number,
    };

    render() {
        const { data, selectedIdx } = this.props;

        const housesList = [];
        data.forEach((hasHouse, idx) => {
            if (hasHouse) {
                // NOTE: this random should be separate from the seed or created at the end
                const houseData = {
                    idx: idx,
                    x: 100 * idx,
                    y: 50 + Math.random() * 50,
                    houseType: 'default',
                };
                const renderedHouse = this.renderHouseIcon(houseData);
                housesList.push(renderedHouse);
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
