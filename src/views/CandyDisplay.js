import '../styles/css/views/CandyDisplay.css';
import React, { Component } from 'react';
import PropTypes from 'prop-types';

import DisplayButton from '../components/DisplayButton';

/*
    Displays text and content
*/
export default class CandyDisplay extends Component {
    static defaultProps = {
        data: {},
        displayText: '',
    };

    static propTypes = {
        data: PropTypes.object,
        displayText: PropTypes.string,
    };

    render() {
        return (
            <div className="st-display">
                <div className="st-display--left"></div>
                { this.renderActionContent() }
                <div className="st-display--right"></div>
            </div>
        );
    }

    // TODO: move to own component
    renderActionContent() {
        const { data } = this.props;
        const { displayText, actionSet } = data;

        const hasAction = (actionSet && actionSet.length > 0);

        return (
            <div className="st-display--middle">
                <div className="st-display-text">
                    { displayText }
                </div>
                <div className="st-display-actions">
                    { hasAction &&
                        <DisplayButton
                            actionId={ actionSet[0] }
                            onClick={ this.handleDisplayAction }
                        >
                            button
                        </DisplayButton>
                    }
                </div>
            </div>
        );
    }

    handleDisplayAction = (action) => {
        const { onNodeAction } = this.props;
        onNodeAction(action);
    }
}
