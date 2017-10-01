import '../styles/css/components/KnockVisualizer.css';
import React, { Component } from 'react';
import PropTypes from 'prop-types';
// import cn from 'classnames';

// import { SIZES } from '../content/Constants';

export default class CandyMap extends Component {
    static defaultProps = {
        knockCount: 0,
        numVisuals: 5,
    }

    static propTypes = {
        knockCount: PropTypes.number,
        numVisuals: PropTypes.number,
    }

    state = {
        renderedKnocks: [],
    }

    componentWillMount() {
        const { numVisuals } = this.props;

        let renderedKnocks = [];
        for (var i=0; i<numVisuals; i++) {
            renderedKnocks.push(this.renderKnockVisual(i));
        }

        this.setState({ renderedKnocks });
    }

    render() {
        // const { renderedKnocks } = this.state;
        let renderedKnocks = [];
        for (var i=0; i<this.props.numVisuals; i++) {
            renderedKnocks.push(this.renderKnockVisual(i));
        }

        return (
            <div className='st-knock-visualizer'>
                { renderedKnocks }
            </div>
        );
    }

    renderKnockVisual = (idx) => {
        const { knockCount } = this.props;
        const style = {
            top: 5 * idx + 150,
            left: 30 * idx + (window.innerWidth / 2) - 100,
        };
        return (
            <span
                key={ `render-knock-visual-${idx}-key` }
                className='st-knock-visual-container'
                
            >
                { knockCount >= (idx + 1) &&
                    <span
                        style={ style }
                        className='st-knock-visual-container--item'
                    />
                }
            </span>
        )
    }
}
