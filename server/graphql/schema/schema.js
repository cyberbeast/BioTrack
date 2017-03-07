const typeDefinitions = `
scalar _vsap_importation_app_number
scalar _Date
scalar _id

enum _gender {
  male
  female
}

enum _race {
  asian
  black
  caucasian
  latino
  other
}

enum _ash_status {
  return_ash
  no_return_ash
}

enum _disposition {
  cremation
  return_to_supplier
}

enum _usage {
  cab
  asl
  dasl
}

type Supplier {
  name: String
  description: String
  subjects: [String]
}

type Dates {
  subject_arrival: _Date 
  death: _Date
}

type id {
  supplier_subject: String
}

type Subject {
  vsap_importation_app_number: vsap_importation_app_number
  date: Dates
  supplier: Supplier
  identification_numbers: _id
  gender: _gender
  race: _race
  age: Int
  cause_of_death: String
  ash_status: _ash_status
  disposition: _disposition
  usage: _usage
  notes: String
  height: Int

}

type Body {
  name: String
  supplier: Supplier
}

type Query {
  body: [Body]
  subject: [Subject]
  supplier: [Supplier]
}

schema {
  query: Query
}

`;

export default [typeDefinitions];
