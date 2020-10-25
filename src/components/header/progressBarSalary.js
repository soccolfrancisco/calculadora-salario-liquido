import React, { Component } from 'react';
import css from './header.module.css';

export default class ProgressBarSalary extends Component {
  render() {
    const { pDiscountINSS, pDiscountIRPF, pNetSalary } = this.props;

    const styleBar = {
      stylePDiscountINSS: {
        width: `${pDiscountINSS}%`,
        backgroundColor: '#e67e22',
      },
      stylePDiscountIRPF: {
        width: `${pDiscountIRPF}%`,
        backgroundColor: '#c0392b',
      },
      sylePNetSalary: {
        width: `${pNetSalary}%`,
        backgroundColor: '#16a085',
      },
    };

    return (
        <div>
          <div className={css.bar}>
            <div style={styleBar.stylePDiscountINSS}/>
            <div style={styleBar.stylePDiscountIRPF}/>
            <div style={styleBar.sylePNetSalary}/>
          </div>
        </div>
    );
  }
}
