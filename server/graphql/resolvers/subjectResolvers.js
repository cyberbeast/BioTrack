import ActivityModel from '../models/activity';
import IdModel from '../models/id';
import MeasurementModel from '../models/measurement';
import MetadataModel from '../models/metadata';
import SubjectModel from '../models/subject';
import SupplierModel from '../models/supplier';
import ComponentModel from '../models/component';
const ObjectId = require('mongoose').Types.ObjectId;

console.log('Exporting Resolvers for: Subject');
export const subjectResolvers = {
	RootQuery: {
		getSubjects() {
			console.log('Received request for getSubjects()');
			return SubjectModel.find().then(res => res);
		},

		getSubjectInfoById(_, args) {
			console.log('REQUESTED: ' + args.id);
			return SubjectModel.findById(args.id).then(res => res);
		}
	},

	Subject: {
		supplier(_) {
			return SupplierModel.findById(new ObjectId(_.supplier)).then(res => {
				// console.log(res);
				return res;
			});
		},

		identifications(_) {
			return IdModel.findById(new ObjectId(_.identifications)).then(res => {
				console.log(typeof res);
				return res;
			});
		},

		metadata(_) {
			return MetadataModel.findById(new ObjectId(_.metadata)).then(res => {
				return res;
			});
		},

		measurements(_) {
			return MeasurementModel.findById(
				new ObjectId(_.measurements)
			).then(res => {
				return res;
			});
		},

		activity_log(_) {
			console.log(_);
			var activities = [];
			// return activities
			console.log('Request for activity log: ' + _.activity_log);
			// Iterate through all the activity log ids in the activity_log array and fetch the correspondong activity record.
			return ActivityModel.find({
				_id: {
					$in: _.activity_log
				}
			}).then(res => res);
		},

		components(_) {
			console.log(_);

			var components = [];
			console.log('Request for component list: ' + _.components);
			// Iterate through all ids in the component array and fetch the corresponding components.
			return ComponentModel.find({
				_id: {
					$in: _.components
				}
			}).then(res => res);
		}
	},

	RootMutation: {
		moveComponent(root, { input }, context) {
			console.log(JSON.stringify(input));

			return ComponentModel.update(
				{ _id: { $in: input.subjectIds } },
				{ $set: { location: input.newLocation } },
				{
					multi: true
				}
			).then(res => {
				console.log(res);
				if (res.n === input.subjectIds.length) {
					return ComponentModel.find({
						_id: {
							$in: input.subjectIds
						}
					}).then(res => {
						console.log(res);
						return res;
					});
				}
			});
		},
		changeComponentStatus(root, { input }, context) {
			console.log(JSON.stringify(input));

			return ComponentModel.update(
				{ _id: { $in: input.subjectIds } },
				{ $set: { status: input.newStatus } },
				{
					multi: true
				}
			).then(res => {
				console.log(res);
				if (res.n === input.subjectIds.length) {
					return ComponentModel.find({
						_id: {
							$in: input.subjectIds
						}
					}).then(res => {
						console.log(res);
						return res;
					});
				}
			});
		},

		addComponentNote(root, { input }, context) {
			console.log(JSON.stringify(input));

			return ComponentModel.update(
				{ _id: { $in: input.subjectIds } },
				{ $set: { notes: input.newNote } },
				{
					multi: true
				}
			).then(res => {
				console.log(res);
				if (res.n === input.subjectIds.length) {
					return ComponentModel.find({
						_id: {
							$in: input.subjectIds
						}
					}).then(res => {
						console.log(res);
						return res;
					});
				}
			});
		},

		addComponentToSubject(root, { input }, context) {
			console.log(JSON.stringify(input));

			var newComponent = ComponentModel({
				subject: input.subjectId,
				type: input.type,
				location: input.location,
				status: input.status,
				notes: 'Default Note...'
			});

			return newComponent.save(function(err, res) {
				if (err) {
					console.log(err);
					return err;
				}

				console.log('Component created...' + res._id);

				SubjectModel.findById(new ObjectId(input.subjectId), function(
					err,
					subject
				) {
					if (err) throw err;

					subject.components.push(res._id);

					subject.save(function(err, sub) {
						if (err) throw err;

						console.log('Added component to subject...');
					});
				});
				return res;
			});

			// SubjectModel.findById(new ObjectId(input.subjectId))
		}
	}
};
