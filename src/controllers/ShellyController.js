import '../styles/css/ShellyMoods.css';
import React, { Component } from 'react';
import PropTypes from 'prop-types';

export default class ShellyController extends Component {
    static defaultProps = {
        mood: 'default',
    };

    static propTypes = {
        mood: PropTypes.string,
    };

    render() {
        return (
            <div className="st-shelly">
                <span>( o u o )</span><br/>
            </div>
        );
    }
}
