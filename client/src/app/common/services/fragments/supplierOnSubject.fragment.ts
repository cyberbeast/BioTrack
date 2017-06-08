import gql from 'graphql-tag';

export const fragmentSupplierOnSubject = gql`
  fragment Supplier on Subject {

    supplier {
      _id

      name
    }
  }
`
