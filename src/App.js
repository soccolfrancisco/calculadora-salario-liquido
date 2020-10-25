import React, { Component } from 'react';
import { calculateSalaryFrom } from './components/salary/salary';
import Header from './components/header/header';
import { formatNumber } from './helpers/formatHelpers';
import Footer from "./components/header/footer";

export default class App extends Component {
  constructor() {
    super();

    this.state = {
      fullSalary: 1000,
      baseINSS: '',
      discountINSS: '',
      baseIRPF: '',
      discountIRPF: '',
      netSalary: '',
      pDiscountINSS: '',
      pDiscountIRPF: '',
      pNetSalary: '',
    };
  }

  async componentDidMount() {
    this.calcularValores(this.state.fullSalary);
  }

  calcularValores = (valor) => {
    const {
      baseINSS,
      discountINSS,
      baseIRPF,
      discountIRPF,
      netSalary,
    } = calculateSalaryFrom(valor);

    const pDiscountINSS = ((discountINSS / valor) * 100).toFixed(2);
    const pDiscountIRPF = ((discountIRPF / valor) * 100).toFixed(2);
    const pNetSalary = ((netSalary / valor) * 100).toFixed(2);

    this.setState({
      fullSalary: valor,
      baseINSS: `R$ ${formatNumber(baseINSS)}`,
      discountINSS: `R$ ${formatNumber(discountINSS)} (${pDiscountINSS} %)`,
      baseIRPF: `RF ${formatNumber(baseIRPF)}`,
      discountIRPF: `R$ ${formatNumber(discountIRPF)} (${pDiscountIRPF} %)`,
      netSalary: `R$ ${formatNumber(netSalary)} (${pNetSalary} %)`,
      pDiscountINSS,
      pDiscountIRPF,
      pNetSalary,
    });
  };

  handleChangeFilter = (newValor) => {
    this.calcularValores(newValor);
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
    } = this.state;

    return (
      <div className="container">
        <Header
          fullSalary={fullSalary}
          onChangeFilter={this.handleChangeFilter}
          baseINSS={baseINSS}
          discountINSS={discountINSS}
          baseIRPF={baseIRPF}
          discountIRPF={discountIRPF}
          netSalary={netSalary}
          pDiscountINSS={pDiscountINSS}
          pDiscountIRPF={pDiscountIRPF}
          pNetSalary={pNetSalary}
        />

       <Footer />
      </div>
    );
  }
}
