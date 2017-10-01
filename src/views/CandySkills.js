import '../styles/css/views/CandySkills.css';
import React, { Component } from 'react';
import PropTypes from 'prop-types';

/*
    CandySkills
        list of player's skills
*/
export default class CandySkills extends Component {
    static defaultProps = {
        skills: [],
    };

    static propTypes = {
        skills: PropTypes.array,
    };

    render() {

        return (
            <div className="st-skills">
                <ul className="st-skills--list">
                    { this.renderSkillItems() }
                </ul>
            </div>
        );
    }

    renderSkillItems() {
        const { skills } = this.props;

        let renderList = skills.map((skill, idx) => {
            return (
                <li
                    className="st-skills--list--item"
                    key={ `candy-skills--skill--${idx}-key` }
                >
                    <span>{ skill.name }</span>
                </li>
            );
        });
        return renderList;
    }
}
