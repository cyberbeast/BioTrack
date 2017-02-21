const typeDefinitions = `

type Supplier {
  name: String
  description: String
  subjects: [String]
}

type Body {
  name: String
  supplier: Supplier
}

type Query {
  body: [Body]
  supplier: [Supplier]
}

schema {
  query: Query
}

`;

export default [typeDefinitions];
