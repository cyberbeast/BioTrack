const enum_types = `
enum VALUES_gender {
  male
  female
}

enum VALUES_race {
  asian
  black
  caucasian
  latino
  other
}

enum VALUES_ash_status {
  return_ash
  no_return_ash
}

enum VALUES_disposition {
  cremation
  return_to_supplier
}

enum VALUES_usage {
  cab
  asl
  dasl
}
`;

export default () => [enum_types];