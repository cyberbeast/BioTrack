import gql from 'graphql-tag';

export const fragmentIdentificationsOnSubject = gql`
  fragment Identifications on Subject {
    identifications {
      _id

      id_VdhVsapImportationAppNumber
      id_SupplierSubject
    }
  }
`
