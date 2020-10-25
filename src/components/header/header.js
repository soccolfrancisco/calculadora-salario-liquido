import React, { Component } from 'react';
import InputFullSalary from './inputFullSalary';
import InputReadOnly from './inputReadOnly';
import ProgressBarSalary from './progressBarSalary';
import css from './header.module.css';

export default class Header extends Component {
    handleInputChange = (value) => {
        this.props.onChangeFilter(value);
    };

    render() {
        const {
            fullSalary,
            baseINSS,
            discountINSS,
            baseIRPF,
            discountIRPF,
            netSalary,
            pDiscountINSS,
            pDiscountIRPF,
            pNetSalary,
        } = this.props;

        return (
            <div>
                <h3 className={css.title}>
                    <i className="small material-icons">polymer</i>
                    &nbsp;Calculadora Sal&aacute;rio L&iacute;quido&nbsp;
                </h3>
                <InputFullSalary
                    fullSalary={fullSalary}
                    onChangeFilter={this.handleInputChange}
                />
                <InputReadOnly
                    baseINSS={baseINSS}
                    discountINSS={discountINSS}
                    baseIRPF={baseIRPF}
                    discountIRPF={discountIRPF}
                    netSalary={netSalary}
                />
                <ProgressBarSalary
                    pDiscountINSS={pDiscountINSS}
                    pDiscountIRPF={pDiscountIRPF}
                    pNetSalary={pNetSalary}
                />

            </div>
        );
    }
}
