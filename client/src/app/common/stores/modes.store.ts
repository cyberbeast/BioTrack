export const modes = (state: any = null, {type, payload}) => {
  switch (type) {
    case 'CHANGE_MODE':
      console.log(payload);
      return payload;
    // Other cases to be added here depending on the expected functionality
    default:
      return state;
  }
}
