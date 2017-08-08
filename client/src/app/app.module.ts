import { MaterializeModule as MM } from 'angular2-materialize';
import { MaterializeModule } from 'ng2-materialize';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { ClarityModule } from 'clarity-angular';

import { Ng2SmartTableModule } from 'ng2-smart-table';
// import { NgxDatatableModule } from '@swimlane/ngx-datatable';
import { AgGridModule } from 'ag-grid-angular/main';
import { DataTableModule, SharedModule } from 'primeng/primeng';
import { ScrollToModule } from 'ng2-scroll-to';
import { TabViewModule } from 'primeng/primeng';
import { Ng2PageScrollModule } from 'ng2-page-scroll';

// CLIPBOARD
import { ClipboardModule } from 'ngx-clipboard';

// NGX-PIPES
import { NgPipesModule } from 'ngx-pipes';

// APOLLO CLIENT IMOPRTS
import { ApolloClient, createNetworkInterface } from 'apollo-client';
import { ApolloModule } from 'apollo-angular';
import { provideClient } from './apollo';

// ngrx imports
import { StoreModule } from '@ngrx/store';

import { SubjectsService } from './common/services/subjects.service';
import { subjectsReducer } from './common/stores/subjects.store';
import { selectedSubjectReducer } from './common/stores/selectedSubject.store';

import { SuppliersService } from './common/services/suppliers.service';
import { suppliersReducer } from './common/stores/suppliers.store';
import { selectedSupplierReducer } from './common/stores/selectedSupplier.store';

import { ModesService } from './common/services/modes.service';
import { modes } from './common/stores/modes.store';
import { selectedModeReducer } from './common/stores/selectedMode.store';

import { AppSupportService } from './common/services/app-support.service';
import { fetchedLocationsReducer } from './common/stores/fetchedLocations.store';
import { fetchedStatusReducer } from './common/stores/fetchedStatus.store';

// DECLARATIONS
import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { SuppliersComponent } from './suppliers/suppliers.component';

// ROUTING DECLARATIONS
import { routing } from './app.routes';
import { DashboardComponent } from './dashboard/dashboard.component';
import { SuppliersMasterComponent } from './suppliers/suppliers-master/suppliers-master.component';
import { SuppliersDetailComponent } from './suppliers/suppliers-detail/suppliers-detail.component';
import { RedComponentComponent } from './suppliers/suppliers-detail/red-comp.component';
import { NavbarSectionsComponent } from './navbar/navbar-sections/navbar-sections.component';
import { SuppliersDetailsSubjectsTabComponent } from './suppliers/suppliers-detail/suppliers-details-subjects-tab/suppliers-details-subjects-tab.component';
import { SubjectsComponent } from './subjects/subjects.component';
import { SubjectsMasterComponent } from './subjects/subjects-master/subjects-master.component';
import { SubjectsDetailComponent } from './subjects/subjects-detail/subjects-detail.component';
import { SubjectsInfoTabComponent } from './subjects/subjects-detail/subjects-info-tab/subjects-info-tab.component';
import { SubjectsActivityTabComponent } from './subjects/subjects-detail/subjects-activity-tab/subjects-activity-tab.component';
import { CardBiotrackIdComponent } from './subjects/subjects-detail/subjects-info-tab/card-biotrack-id/card-biotrack-id.component';
import { CardLocationComponent } from './subjects/subjects-detail/subjects-info-tab/card-location/card-location.component';
import { CardStatusComponent } from './subjects/subjects-detail/subjects-info-tab/card-status/card-status.component';
import { CardInformationComponent } from './subjects/subjects-detail/subjects-info-tab/card-information/card-information.component';
import { CardCabIdComponent } from './subjects/subjects-detail/subjects-info-tab/card-cab-id/card-cab-id.component';
import { CardSupplierComponent } from './subjects/subjects-detail/subjects-info-tab/card-supplier/card-supplier.component';
import { SubjectsMeasurementTabComponent } from './subjects/subjects-detail/subjects-measurement-tab/subjects-measurement-tab.component';
import { SubjectsBannerComponent } from './subjects/subjects-banner/subjects-banner.component';
import { SubjectsSidepanelComponent } from './subjects/subjects-sidepanel/subjects-sidepanel.component';
import { SubjectsTabsComponent } from './subjects/subjects-tabs/subjects-tabs.component';
import { BannerCardIdComponent } from './subjects/subjects-banner/banner-card-id/banner-card-id.component';
import { BannerCardCabIdComponent } from './subjects/subjects-banner/banner-card-cab-id/banner-card-cab-id.component';
import { BannerCardSupplierComponent } from './subjects/subjects-banner/banner-card-supplier/banner-card-supplier.component';
import { SubjectsInfoComponent } from './subjects/subjects-info/subjects-info.component';
import { SubjectsMeasurementsComponent } from './subjects/subjects-measurements/subjects-measurements.component';
import { SubjectsActivityComponent } from './subjects/subjects-activity/subjects-activity.component';
import { SubjectsComponentsComponent } from './subjects/subjects-components/subjects-components.component';

@NgModule({
	declarations: [
		AppComponent,
		NavbarComponent,
		SuppliersComponent,
		DashboardComponent,
		SuppliersMasterComponent,
		SuppliersDetailComponent,
		RedComponentComponent,
		NavbarSectionsComponent,
		SuppliersDetailsSubjectsTabComponent,
		SubjectsComponent,
		SubjectsMasterComponent,
		SubjectsDetailComponent,
		SubjectsInfoTabComponent,
		SubjectsActivityTabComponent,
		CardBiotrackIdComponent,
		CardLocationComponent,
		CardStatusComponent,
		CardInformationComponent,
		CardCabIdComponent,
		CardSupplierComponent,
		SubjectsMeasurementTabComponent,
		SubjectsBannerComponent,
		SubjectsSidepanelComponent,
		SubjectsTabsComponent,
		BannerCardIdComponent,
		BannerCardCabIdComponent,
		BannerCardSupplierComponent,
		SubjectsInfoComponent,
		SubjectsMeasurementsComponent,
		SubjectsActivityComponent,
		SubjectsComponentsComponent
	],
	imports: [
		MaterializeModule.forRoot(),
		MM,
		// NgxDatatableModule,
		Ng2SmartTableModule,
		BrowserAnimationsModule,
		ClarityModule.forRoot(),
		Ng2PageScrollModule.forRoot(),
		BrowserModule,
		FormsModule,
		HttpModule,
		routing,
		ClipboardModule,
		NgPipesModule,
		DataTableModule,
		SharedModule,
		StoreModule.provideStore({
			selectedMode: selectedModeReducer,
			suppliers: suppliersReducer,
			selectedSupplier: selectedSupplierReducer,
			subjects: subjectsReducer,
			selectedSubject: selectedSubjectReducer,
			possible_locations: fetchedLocationsReducer,
			possible_status: fetchedStatusReducer
		}),
		ApolloModule.forRoot(provideClient),
		ScrollToModule.forRoot(),
		TabViewModule,
		AgGridModule.withComponents([RedComponentComponent])
	],
	providers: [
		SubjectsService,
		SuppliersService,
		ModesService,
		AppSupportService
	],
	bootstrap: [AppComponent]
})
export class AppModule {}
