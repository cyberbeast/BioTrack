const MoveComponentInput = `
  input MoveComponentInput {
    subjectIds: [String!]
    newLocation: String!
  }
`;

console.log('Exporting INPUT: MoveComponentInput');
export default () => [MoveComponentInput];
