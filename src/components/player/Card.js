// import '../styles/css/ShellyMoods.css';
import React, { Component } from 'react';
import PropTypes from 'prop-types';

export default class Card extends Component {
    static defaultProps = {
        data: {},
    };

    static propTypes = {
        data: PropTypes.object,
    };

    render() {
        const { data } = this.props;
        const { name } = data;

        return (
            <div className="st-card">
                { name || 'default-card-name' }
            </div>
        );
    }
}
