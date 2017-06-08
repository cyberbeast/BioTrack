import gql from 'graphql-tag';

export const fragmentMetadataOnSubject = gql`
  fragment Metadata on Subject {
    metadata {
      _id

      meta_Gender
      meta_Race
      meta_Age
      meta_CauseOfDeath
      meta_AshStatus
      meta_Disposition
      meta_Usage
    }
  }
`
