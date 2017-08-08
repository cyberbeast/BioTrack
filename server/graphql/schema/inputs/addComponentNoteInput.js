const AddComponentNoteInput = `
    input AddComponentNoteInput {
        subjectIds: [String!]
        newNote: String!
    }
`;

console.log('Exporting INPUT: AddComponentStatusInput');
export default () => [AddComponentNoteInput];
