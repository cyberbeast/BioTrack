const ChangeComponentStatusInput = `
    input ChangeComponentStatusInput {
        subjectIds: [String!]
        newStatus: String!
    }
`;

console.log('Exporting INPUT: ChangeComponentStatusInput');
export default () => [ChangeComponentStatusInput];
