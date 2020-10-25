import React, { Component } from 'react';
import css from './header.module.css';

export default class InputReadOnly extends Component {
  render() {
    const {
      baseINSS,
      discountINSS,
      baseIRPF,
      discountIRPF,
      netSalary,
    } = this.props;

    return (
        <div>
          <div className="row">
            <div className="col s3">
              <span className={css.span}>Base INSS:</span>
              <input
                  className={css.button}
                  type="text"
                  value={baseINSS}
                  readOnly
              />
            </div>
            <div className="col s3">
              <span className={css.span}>Desconto INSS:</span>
              <input
                  className={`${css.colorOrange} ${css.button}`}
                  type="text"
                  value={discountINSS}
                  readOnly
              />
            </div>
            <div className="col s3">
              <span className={css.span}>Base IRPF:</span>
              <input
                  className={css.button}
                  type="text"
                  value={baseIRPF}
                  readOnly
              />
            </div>
            <div className="col s3">
              <span className={css.span}>Desconto IRPF:</span>
              <input
                  className={`${css.colorRed} ${css.button}`}
                  type="text"
                  value={discountIRPF}
                  readOnly
              />
            </div>
          </div>
          <div className="row">
            <div className="col s3">
              <span className={css.span}>Salário Líquido:</span>
              <input
                  className={`${css.colorGreen} ${css.button}`}
                  type="text"
                  value={netSalary}
                  readOnly
              />
            </div>
          </div>
        </div>
    );
  }
}
