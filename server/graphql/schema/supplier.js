import Subject from './subject';

const Supplier = `
    type Supplier {
        _id: String
        name: String
        description: String
        subjects: [Subject]
    }
`;

export default () => [Supplier, Subject];