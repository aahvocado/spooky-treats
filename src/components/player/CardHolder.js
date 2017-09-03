import '../../styles/css/CardHolder.css';
import React, { Component } from 'react';
import PropTypes from 'prop-types';

// components
import Card from './Card';

export default class CardHolder extends Component {
    static defaultProps = {
        data: [{}], // list of cards
    };

    static propTypes = {
        data: PropTypes.array,
    };

    render() {
        const { data } = this.props;

        const cardsComponents = data.map((cardData, idx) => this.renderCard(cardData, idx));

        return (
            <ul className="st-card-holder">
                { cardsComponents }
            </ul>
        );
    }

    renderCard = (cardData, idx) => 
        <li key={ `st-rendered-card-${idx}` }>
            <Card data={ cardData } />
        </li>
}
