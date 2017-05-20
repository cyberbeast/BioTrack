const EnumTypes = `
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

enum VALUES_activity {
  AUTOPSY
  CT
  INFORMATION_UPDATE
  OTHER_as_noted
  PREP_WORK
  RELOCATION
  RETURN_TO_BODY_BAG
  RETURN_TO_FREEZER
  RETURN_TO_SUPPLIER
  TESTING
  THAWING
  TO_RMW
  TO_CREMATION
}

enum VALUES_location {
  BIO_ROOM
  FREEZER01
  FREEZER02
  FREEZER03
  FREEZER04
  FREEZER05
  FREEZER06
  FREEZER06
  FREEZER07
  FREEZER08
  FREEZER09
  FREEZER12
  FREEZER15
  FREEZER16
  FREEZER17
  FREEZER18
  FREEZER19
  FREEZER20
  FREEZER21
  FREEZER22
  FREEZER23
  Mini_Freezer
  MR5MicroCT
  OFF_SITE_as_noted
  OTHER_as_noted
  PREP_COOLER
  PREP_ROOM
  SESA_SLED_ROOM
  VIA_SLED_ROOM
}
`;

console.log("Exporting ENUM: EnumTypes");
export default () => [EnumTypes];
