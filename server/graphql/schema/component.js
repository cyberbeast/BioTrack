const Component = `
  type Component {
    _id: String
    name: String
    location: String
    status: String
  }
`

console.log("Exporting TYPE: Component");
export default () => [Component]
