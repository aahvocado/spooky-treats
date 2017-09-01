import React, { Component } from 'react';
import PropTypes from 'prop-types';

export default class BasicPage extends Component {
    static defaultProps = {
        className: 'st-test',
    };

    static propTypes = {
        className: PropTypes.string,
    };

    render() {
        const { className } = this.props;

        return (
            <div className={ `st-basic-page ${className}` }>
                SPo o o ooo o o ooo K y yy!
            </div>
        );
    }
}
