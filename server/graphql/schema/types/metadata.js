const Metadata = `
  type Metadata {
    _id: String

    # Meta fields
    meta_Gender: VALUES_gender
    meta_Race: VALUES_race
    meta_Age: Int
    meta_CauseOfDeath: String
    meta_AshStatus: VALUES_ash_status
    meta_Disposition: VALUES_disposition
    meta_Usage: VALUES_usage
  }
`

console.log("Exporting TYPE: Metadata");
export default () => [Metadata]
