import '../styles/css/components/CandyItem.css';
import React, { Component } from 'react';
import PropTypes from 'prop-types';

/*
    CandyItem
        an inventory item parent
*/
export default class CandyItem extends Component {
    static defaultProps = {
        item: {},
        onClick: () => Promise.resolve(),
    };

    static propTypes = {
        item: PropTypes.object,
        onClick: PropTypes.func,
    };

    render() {
        const { children } = this.props;

        return (
            <li
                className="st-candy-item" >
                <button
                    className="st-candy-item--button"
                    onClick={ this.handleOnClick }
                >
                    { children }
                </button>
            </li>
        );
    }

    handleOnClick = () => {
        const { onClick, item } = this.props;
        onClick(item);
    }
}
