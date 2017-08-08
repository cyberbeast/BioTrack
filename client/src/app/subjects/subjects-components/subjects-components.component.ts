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

import { PluckPipe } from 'ngx-pipes/src/app/pipes/array/pluck';
// import { Component } from '';
import { AppStore } from '../../common/models/appstore.model';

import { Store } from '@ngrx/store';

// app-support service;
import { AppSupportService } from '../../common/services/app-support.service';

// subject-service
import { SubjectsService } from '../../common/services/subjects.service';

@Component({
	selector: 'biotrack-subjects-components',
	templateUrl: './subjects-components.component.html',
	styleUrls: ['./subjects-components.component.css'],
	providers: [PluckPipe]
})
export class SubjectsComponentsComponent implements OnInit {
	var = false;
	selectedComponents: any[] = [];

	moveComponentModal: boolean = false;

	locations: any[] = [];
	status: any[] = [];

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

	changeLocation(newLocation: string) {
		// console.log(this.pluckPipe.transform(this.selectedComponents, '_id'));
		this.subjectService.changeSelectedSubjectLocation(
			this.pluckPipe.transform(this.selectedComponents, '_id'),
			newLocation
		);
		this.moveComponentModal = false;
	}

	constructor(
		private appSupportService: AppSupportService,
		private subjectService: SubjectsService,
		private store: Store<AppStore>,
		private pluckPipe: PluckPipe
	) {
		// store.select('selectedSubject').subscribe(v => {
		// 	for (var k in v) {
		// 		console.log(k);
		// 		if (k === 'components') console.log(v[k]);
		// 	}
		// 	// this.components = v.components;
		// });
	}

	ngOnInit() {
		this.subjectService.selectedSubject$.subscribe(v => {
			this.components = v.components;
		});

		this.appSupportService.appValues_locations$.subscribe(locations => {
			this.locations = locations;
		});

		this.appSupportService.appValues_status$.subscribe(status => {
			this.status = status;
		});
	}
}
