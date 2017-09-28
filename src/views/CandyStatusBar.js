import '../styles/css/views/CandyStatusBar.css';
import React, { Component } from 'react';
import PropTypes from 'prop-types';

import CandyInventory from './CandyInventory';

/*
    CandyStatusBar
        player's status bar
*/
export default class CandyStatusBar extends Component {
    static defaultProps = {
        playerStatus: [],
        inventory: [],
    };

    static propTypes = {
        playerStatus: PropTypes.array,
        inventory: PropTypes.array,
    };

    render() {
        const { inventory } = this.props;

        return (
            <div className="st-status-bar">
                <div className="st-status-bar--left">
                
                </div>
                <CandyInventory
                    inventory={ inventory }
                />
                <div className="st-status-bar--right">
                
                </div>
            </div>
        );
    }
}
