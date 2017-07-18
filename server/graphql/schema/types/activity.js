const Activity = `
  type Activity {
    _id: String

    location_From: VALUES_location
    location_To: VALUES_location

    activity_Name: VALUES_activity
    meta_Notes: String

    timestamp: String
  }
`

console.log("Exporting TYPE: Activity");
export default () => [Activity]
