import '../styles/css/components/DisplayButton.css';
import React, { Component } from 'react';
import PropTypes from 'prop-types';

// 
export default class CandyDisplay extends Component {
    static defaultProps = {
        action: {},
        onClick: () => Promise.resolve(),
    };

    static propTypes = {
        action: PropTypes.object,
        onClick: PropTypes.func,
    };

    render() {
        const { children } = this.props;

        return (
            <button
                className="st-display-button"
                onClick={ this.handleOnClick }
            >
                { children }
            </button>
        );
    }

    handleOnClick = () => {
        const { onClick, action } = this.props;
        onClick(action);
    }
}
