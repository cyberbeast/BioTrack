import { Component, ViewEncapsulation } from '@angular/core';

// app-support service;
import { AppSupportService } from './common/services/app-support.service';

@Component({
	selector: 'biotrack-root',
	templateUrl: './app.component.html',
	styleUrls: ['./app.component.css'],
	encapsulation: ViewEncapsulation.None
})
export class AppComponent {
	title = 'app works!';

	constructor(private appSupportService: AppSupportService) {
		appSupportService.fetchAppValues();
	}
}
