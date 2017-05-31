export const suppliers = (state: any = [], {type, payload}) => {
  switch (type) {
    case 'ADD_SUPPLIERS':
      // console.log(payload);
      return payload;
    case 'CREATE_SUPPLIER':
      return [...state, payload];
    case 'UPDATE_SUPPLIER':
      return state.map(supplier => {
        return supplier.id === payload.id ? Object.assign({}, supplier, payload) : supplier;
      });
    case 'DELETE_SUPPLIER':
      return state.filter(item => {
        return item.id !== payload.id;
      });
    default:
      return state;
  }
};
