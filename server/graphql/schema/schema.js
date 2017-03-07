import { enum_types } from './enum';

const typeDefinitions = `
scalar _Date

type Supplier {
  name: String
  description: String
  subjects: [Subject]
}

type Subject {
  id_VdhVsapImportationAppNumber: String
  id_SupplierSubject: String
  date_SubjectArrival: _Date
  date_Death: _Date
  supplier: Supplier
  meta_Gender: VALUES_gender
  meta_Race: VALUES_race
  meta_Age: Int
  meta_CauseOfDeath: String
  meta_AshStatus: VALUES_ash_status
  meta_Disposition: _disposition
  meta_Usage: VALUES_usage
  notes: String
  measurement_Height: Int
  measurement_Weight: Int
}

type Query {
  subject: [Subject]
  supplier: [Supplier]
}

schema {
  query: Query
}

`;

export default [enum_types, typeDefinitions];
