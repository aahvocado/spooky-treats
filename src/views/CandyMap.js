import '../styles/css/views/CandyMap.css';
import React, { Component } from 'react';
import PropTypes from 'prop-types';

export default class CandyMap extends Component {
    static defaultProps = {
        data: [],
        selectedIdx: 0,
    };

    static propTypes = {
        data: PropTypes.array,
        selectedIdx: PropTypes.number,
    };

    render() {
        const { data } = this.props;

        const housesList = [];
        data.forEach((houseData, idx) => {
            if (houseData) {                
                housesList.push(this.renderHouseIcon(houseData));
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
        @param {object} the data created by MapMaker.js
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
