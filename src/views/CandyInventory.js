import '../styles/css/views/CandyInventory.css';
import React, { Component } from 'react';
import PropTypes from 'prop-types';

import CandyItem from '../components/CandyItem';

/*
    CandyInventory
        player's status bar actually
*/
export default class CandyInventory extends Component {
    static defaultProps = {
        inventory: [],
    };

    static propTypes = {
        inventory: PropTypes.array,
    };

    render() {

        return (
            <div className="st-inventory">
                <ul className="st-inventory--list">
                    { this.renderInventoryItems() }
                </ul>
            </div>
        );
    }

    renderInventoryItems() {
        const { inventory } = this.props;

        let renderList = inventory.map((item, idx) => {
            return (
                <CandyItem
                    key={ `candy-inventory--item--${idx}-key` }
                >
                    <span>{ item.name }</span>
                </CandyItem>
            );
        });
        return renderList;
    }
}
