const AddComponentInput = `
  input AddComponentInput {
    subjectId: String!
    type: String!
    location: String!
    status: String!
    group: String
    notes: String
  }
`

console.log("Exporting INPUT: AddComponentInput");
export default () => [AddComponentInput]
