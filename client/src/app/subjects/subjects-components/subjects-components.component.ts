import { Component, OnInit, ViewChild } from '@angular/core';
import {
	IDFilter,
	NameFilter,
	LocationFilter,
	GroupFilter,
	StatusFilter
} from '../../common/filters/component.filter';
import { StringFilter } from 'clarity-angular';
import { Wizard } from 'clarity-angular/wizard/wizard';

// import { Component } from '';
import { AppStore } from '../../common/models/appstore.model';

import { Store } from '@ngrx/store';

@Component({
	selector: 'biotrack-subjects-components',
	templateUrl: './subjects-components.component.html',
	styleUrls: ['./subjects-components.component.css']
})
export class SubjectsComponentsComponent implements OnInit {
	var = false;
	singleSelected: any[] = [];
	addComponentModalOpened = false;
	private nameFilter = new NameFilter();
	private idFilter = new IDFilter();
	private locationFilter = new LocationFilter();
	private groupFilter = new GroupFilter();
	private statusFilter = new StatusFilter();

	components: any = [];

	@ViewChild('wizard') wizard: Wizard;
	@ViewChild('myForm') formData: any;

	loadingFlag: boolean = false;
	errorFlag: boolean = false;

	// have to define doCancel because page will prevent doCancel from working
	// if the page had a previous button, you would need to call
	// this.wizard.previous() manually as well...
	doCancel(): void {
		this.wizard.close();
	}

	onCommit(): void {
		let value: any = this.formData.value;
		this.loadingFlag = true;
		this.errorFlag = false;

		setTimeout(() => {
			if (value.answer === '42') {
				this.wizard.forceNext();
			} else {
				this.errorFlag = true;
			}
			this.loadingFlag = false;
		}, 1000);
	}

	constructor(private store: Store<AppStore>) {
		// store.select('selectedSubject').subscribe(v => {
		// 	for (var k in v) {
		// 		console.log(k);
		// 		if (k === 'components') console.log(v[k]);
		// 	}
		// 	// this.components = v.components;
		// });
	}

	ngOnInit() {
		this.store.select('selectedSubject').subscribe(v => {
			this.components = v['components'];
		});
	}
}
