import React from 'react';
import Card from './Card';
import './Intervalo.css';
import { connect } from 'react-redux';
import {
  alterarNumeroMin,
  alterarNumeroMax,
} from '../store/actions/numerosAction';

const Intervalo = ({ min, max, alterarMinimo, alterarMaximo }) => {
  return (
    <>
      <Card title={'Intervalo de Numeros'} red>
        <div className="Intervalo">
          <span>
            <strong>Minimo:</strong>
            <input
              type="number"
              value={min}
              onChange={({ target }) => alterarMinimo(+target.value)}
            />
          </span>
          <span>
            <strong>Máximo</strong>
            <input
              type="number"
              value={max}
              onChange={({ target }) => alterarMaximo(+target.value)}
            />
          </span>
        </div>
      </Card>
    </>
  );
};

function mapStateToProps(state) {
  return {
    min: state.numeros.min,
    max: state.numeros.max,
  };
}

function mapDispatchToProps(dispatch) {
  return {
    alterarMinimo(novoNumero) {
      const action = alterarNumeroMin(novoNumero);
      dispatch(action);
    },
    alterarMaximo(novoNumero) {
      const action = alterarNumeroMax(novoNumero);
      dispatch(action);
    },
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(Intervalo);
