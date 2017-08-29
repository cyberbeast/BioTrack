import { Component, OnInit, ViewChild } from '@angular/core';
import { PluckPipe } from 'ngx-pipes/src/app/pipes/array/pluck';
import { ValuesPipe } from 'ngx-pipes/src/app/pipes/object/values';

@Component({
	selector: 'app-inventory',
	templateUrl: './inventory.component.html',
	styleUrls: ['./inventory.component.css'],
	providers: [PluckPipe, ValuesPipe]
})
export class InventoryComponent implements OnInit {
	queryEngaged: boolean = false;
	opened: boolean = true;
	dis: boolean = true;
	categorySelection = '';
	optionSelection = '';
	valueSelection = '';

	standard_options = ['is', 'contains'];
	display_options = ['-'];

	ruleSet = [];

	populateOptions(value: any) {
		console.log("THIS IS THE CHOSEN ONE: " + value);
		for (let entity of this.id_structure) {
			// console.log(entity.title == value);
			if (entity.title === value) {
				this.display_options = entity.options;
			}
		}
	}

	id_structure = [
		{
			title: 'BioTrack Database ID',
			options: this.standard_options
		},
		{
			title: 'CAB ID',
			options: this.standard_options
		},
		{
			title: 'VDH VSAP Importation Application Number',
			options: this.standard_options
		},
		{
			title: 'Supplier Subject ID',
			options: this.standard_options
		}
	];

	addRule() {
		var nextIndex = this.ruleSet.length;
		this.ruleSet.push({
			index: nextIndex,
			category: this.categorySelection,
			option: this.optionSelection,
			value: this.valueSelection
		})
		this.categorySelection = '';
		this.optionSelection = '';
		this.valueSelection = '';
	}

	removeRule(idx: any) {
		console.log("DELETING..." + idx);
		this.ruleSet = this.ruleSet.filter(function (rule) {
			return rule.index !== idx;
		});
		console.log(this.ruleSet);
	}

	constructor() { }

	ngOnInit() { }
}
