import '../styles/css/components/DisplayButton.css';
import React, { Component } from 'react';
import PropTypes from 'prop-types';

// 
export default class CandyDisplay extends Component {
    static defaultProps = {
        actionId: -1,
        onClick: () => Promise.resolve(),
    };

    static propTypes = {
        actionId: PropTypes.number,
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
        const { onClick, actionId } = this.props;
        onClick(actionId);
    }
}
