import Supplier from './supplier';
import Activity from './activity';
import Measurement from './measurement';
import Metadata from './metadata';
import ID from './id';
import Component from './component';

const Subject = `
    type Subject {
        _id: String

        #ID's
        identifications: Id

        # Date fields
        #date_SubjectArrival:
        #date_Death:

        #Metadata
        metadata: Metadata

        #Measurement Data
        measurements: Measurement

        #Supplier
        supplier: Supplier

        #Component Information
        components: [Component]

        #Activity Logs
        activity_log: [Activity]

        #Notes
        notes: String
    }
`;

console.log("Exporting TYPE: Subject");
export default () => [Subject, Supplier, Activity, Measurement, Metadata, Component, ID]
