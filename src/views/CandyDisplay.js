import '../styles/css/views/CandyDisplay.css';
import React, { Component } from 'react';
import PropTypes from 'prop-types';
import nl2br from 'react-newline-to-break';

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
                <div className="st-display--right">
                    <button className='st-display--next-house-button'>
                        Next House
                    </button>
                </div>
            </div>
        );
    }

    // TODO: move to own component
    renderActionContent() {
        const { data } = this.props;
        const { displayText, actionSet } = data;

        let actionButtonList = [];
        const hasAction = (actionSet && actionSet.length > 0);
        if (hasAction) {
            actionButtonList = actionSet.map((action, idx) => {
                return (
                    <DisplayButton
                        key={ `candy-display--action-button--${idx}`}
                        action={ action }
                        onClick={ this.handleDisplayAction }
                    >
                        { action.text }
                    </DisplayButton>
                );
            });
        }

        return (
            <div className="st-display--middle">
                <div className="st-display-text">
                    { nl2br(displayText) }
                </div>
                <div className="st-display-actions">
                    { hasAction &&
                        actionButtonList
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
