import React, { Component } from 'react';
import css from './header.module.css';

export default class InputFullSalary extends Component {
    handleInputChange = (event) => {
        this.props.onChangeFilter(event.target.value);
    };

    render() {
        const { fullSalary } = this.props;

        return (
            <div>
                <div className={css.container}>
                    <div className="row">
                        <span>Salário Bruto:</span>
                        <input
                            type="number"
                            autoFocus={true}
                            className={css.buttonSalary}
                            value={fullSalary}
                            onChange={this.handleInputChange}
                            min="1000"
                        />
                    </div>
                </div>
            </div>
        );
    }
}
