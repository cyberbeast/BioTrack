import gql from 'graphql-tag';

export const fragmentMeasurementsOnSubject = gql`
    fragment Measurements on Subject {
      measurements {
        _id
        measurement_Height
        measurement_Weight
      }
    }
  `
