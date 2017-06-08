import gql from 'graphql-tag';

export const fragmentActivityLogOnSubject = gql`
  fragment ActivityLog on Subject {
    activity_log {
      _id
      location_From
      location_To
      activity_Name
      meta_Notes
      timestamp
    }
  }
`
