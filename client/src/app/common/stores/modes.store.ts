export const modes = (state: any = [], {type, payload}) => {
  switch (type) {
    case 'ADD_MODE':
      return payload;
    // Other cases to be added here depending on the expected functionality
    default:
      return state;
  }
}
