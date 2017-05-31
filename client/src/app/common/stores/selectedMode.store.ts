export const selectedMode = (state: any = null, {type, payload}) => {
  switch (type) {
    case 'SELECT_MODE':
      return payload;
    default:
      return state;
  }
}
