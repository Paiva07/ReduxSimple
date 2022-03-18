const estadoInicial = {
  min: 1,
  max: 10,
};

export default function (state = estadoInicial, action) {
  switch (action.type) {
    case 'NUM_MAX_ALTERADO':
      return {
        ...state,
        max: action.payload,
      };
    case 'NUM_MIN_ALTERADO':
      return {
        ...state,
        min: action.payload,
      };
    default:
      return state;
  }
}
