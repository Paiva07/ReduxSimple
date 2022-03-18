import React from 'react';
import Card from './Card';
import './Intervalo.css';
import { connect } from 'react-redux';

const Sorteio = ({ max, min }) => {
  const numeroAleatorio = parseInt(Math.random() * (max - min) + min);
  return (
    <Card title={'Sorteio de um Número'} purple>
      <span>
        <span>Resultado:</span>
        <strong>{numeroAleatorio}</strong>
      </span>
    </Card>
  );
};

function mapStateToProps(state) {
  return {
    min: state.numeros.min,
    max: state.numeros.max,
  };
}

export default connect(mapStateToProps)(Sorteio);
