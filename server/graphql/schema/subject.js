import Supplier from './supplier';
import Activity from './activity';
import Measurement from './measurement';
import Metadata from './metadata';
import ID from './id';

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

        #Activity Logs
        activity_log: [Activity]

        #Notes
        notes: String
    }
`;

console.log("Exporting TYPE: Subject");
export default () => [Subject, Supplier, Activity, Measurement, Metadata, ID]
