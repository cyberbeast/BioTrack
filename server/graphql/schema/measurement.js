const Measurement = `
  type Measurement {
    _id: String

    # Measurement fields
    measurement_Height: Float
    measurement_Weight: Float
    measurement_Shoulder_Acromial_Height: Float
    measurement_Vertex_to_Symphision_Length: Float
    measurement_Waist_Height_Umbilicus: Float
    measurement_Waist_Depth_Umbilicus: Float
    measurement_Waist_Breadth: Float
    measurement_Shoulder_Breadth_Biacromial: Float
    measurement_Chest_Breadth_4th_Rib: Float
    measurement_Chest_Breadth_8th_Rib: Float
    measurement_Chest_Depth_4th_Rib: Float
    measurement_Chest_Depth_8th_Rib: Float
    measurement_Seated_Chest_Breadth_4th_Rib: Float
    measurement_Seated_Chest_Breadth_8th_Rib: Float
    measurement_Seated_Chest_Depth_4th_Rib: Float
    measurement_Seated_Chest_Depth_8th_Rib: Float
    measurement_Buttock_Depth: Float
    measurement_Interscye_Across_Back: Float
    measurement_Hip_Breadth: Float
    measurement_Shoulder_to_Elbow: Float
    measurement_Forearm_to_Hand: Float
    measurement_Tibiale_Height: Float
    measurement_Ankle_Height_Outside: Float
    measurement_Foot_Breadth: Float
    measurement_Foot_Length: Float
    measurement_Top_of_Head_to_Trochacterion: Float
    measurement_Seated_Height_Top_of_Head_to_Bottom_of_Feet: Float
    measurement_Seated_Head_to_Buttock: Float
    measurement_Seated_Knee_Height: Float
    measurement_Seated_Hip_to_Knee_Length: Float
    measurement_Head_Length: Float
    measurement_Head_Breadth: Float
    measurement_Head_Height: Float
    measurement_Head_Circumference: Float
    measurement_Bicep_Circumference: Float
    measurement_Elbow_Circumference: Float
    measurement_Forearm_Circumference: Float
    measurement_Wrist_Circumference: Float
    measurement_Thigh_Circumference: Float
    measurement_Lower_Thigh_Circumference: Float
    measurement_Knee_Circumference: Float
    measurement_Calf_Circumference: Float
    measurement_Ankle_Circumference: Float
    measurement_Neck_Circumference: Float
    measurement_Scye_Armpit_Circumference: Float
    measurement_Chest_Circumference_4th_Rib: Float
    measurement_Chest_Circumference_8th_Rib: Float
    measurement_Seated_Chest_Circumference_4th_Rib: Float
    measurement_Seated_Chest_Circumference_8th_Rib: Float
    measurement_Waist_Circumference_At_Umbilicus: Float
    measurement_8cm_Above_Umbilicus: Float
    measurement_8cm_Below_Umbilicus: Float
    measurement_Buttock_Circumference: Float
    measurement_Seated_Surface_to_T1: Float
    measurement_Top_of_Head_to_T1: Float
  }
`

console.log("Exporting TYPE: Measurement");
export default () => [Measurement];
