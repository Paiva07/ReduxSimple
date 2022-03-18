import React from 'react';
import { connect } from 'react-redux';
import Card from './Card';

const Media = ({ max, min }) => {
  console.log(max, min);
  return (
    <Card title={'Media dos Números'} green>
      <span>
        <span>Resultado: </span>
        <strong>{(max + min) / 2}</strong>
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

export default connect(mapStateToProps)(Media);
