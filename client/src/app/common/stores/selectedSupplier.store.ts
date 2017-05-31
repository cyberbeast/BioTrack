export const selectedSupplier = (state: any = null, {type, payload}) => {
  switch (type) {
    case 'SELECT_SUPPLIER':
      return payload;
    default:
      return state;
  }
}
