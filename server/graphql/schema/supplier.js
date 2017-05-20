import Subject from './subject';

const Supplier = `
    type Supplier {
        _id: String

        name: String
        description: String
        subjects: [Subject]
    }
`;

console.log("Exporting TYPE: Supplier");
export default () => [Supplier, Subject];
