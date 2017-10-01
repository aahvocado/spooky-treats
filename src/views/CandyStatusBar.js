import '../styles/css/views/CandyStatusBar.css';
import React, { Component } from 'react';
import PropTypes from 'prop-types';

import CandyInventory from './CandyInventory';
import CandySkills from './CandySkills';

/*
    CandyStatusBar
        player's status bar
*/
export default class CandyStatusBar extends Component {
    static defaultProps = {
        playerStatus: [],
        inventory: [],
        skills: [],
    };

    static propTypes = {
        playerStatus: PropTypes.array,
        inventory: PropTypes.array,
        skills: PropTypes.array,
    };

    render() {
        const { inventory, skills } = this.props;

        return (
            <div className="st-status-bar">
                <div className="st-status-bar--left">
                
                </div>
                <CandyInventory
                    inventory={ inventory }
                />
                <CandySkills
                    skills={ skills }
                />
            </div>
        );
    }
}
