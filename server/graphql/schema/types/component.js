const Component = `
  type Component {
    _id: String
    type: String
    location: String
    status: String
    notes: String
    group: String
  }
`

console.log("Exporting TYPE: Component");
export default () => [Component]
