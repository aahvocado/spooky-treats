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
        data: [],
    };

    static propTypes = {
        data: PropTypes.array,
    };

    render() {
        const { data } = this.props;

        return (
            <div className="st-inventory">
                { `inventory has ${data.length} items` }
                <div>
                    { this.renderInventoryItems() }
                </div>
            </div>
        );
    }

    renderInventoryItems() {
        const { data } = this.props;

        let renderList = data.map((item, idx) => {
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
