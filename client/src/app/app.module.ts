import { MaterializeModule as MM } from 'angular2-materialize';
import { MaterializeModule } from 'ng2-materialize';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { ClarityModule } from "clarity-angular";

import { Ng2SmartTableModule } from 'ng2-smart-table';
// import { NgxDatatableModule } from '@swimlane/ngx-datatable';
import {AgGridModule} from "ag-grid-angular/main";
import {DataTableModule,SharedModule} from 'primeng/primeng';
import {ScrollToModule} from 'ng2-scroll-to';
import {TabViewModule} from 'primeng/primeng';
import {Ng2PageScrollModule} from 'ng2-page-scroll';

// CLIPBOARD
import { ClipboardModule } from 'ngx-clipboard';


// APOLLO CLIENT IMOPRTS
import { ApolloClient, createNetworkInterface } from 'apollo-client';
import { ApolloModule } from 'apollo-angular';
import { provideClient } from './apollo';

// ngrx imports
import { StoreModule } from '@ngrx/store';
import { SuppliersService } from './common/services/suppliers.service';
import { suppliersReducer } from './common/stores/suppliers.store';
import { selectedSupplierReducer } from './common/stores/selectedSupplier.store';
import { ModesService } from './common/services/modes.service';
import { modes } from './common/stores/modes.store';
import { selectedModeReducer } from './common/stores/selectedMode.store';


// DECLARATIONS
import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { SuppliersComponent } from './suppliers/suppliers.component';

// ROUTING DECLARATIONS
import { routing } from './app.routes';
import { DashboardComponent } from './dashboard/dashboard.component';
import { SuppliersMasterComponent } from './suppliers/suppliers-master/suppliers-master.component';
import { SuppliersDetailComponent } from './suppliers/suppliers-detail/suppliers-detail.component';
import { RedComponentComponent } from "./suppliers/suppliers-detail/red-comp.component";
import { NavbarSectionsComponent } from './navbar/navbar-sections/navbar-sections.component';
import { SuppliersDetailsSubjectsTabComponent } from './suppliers/suppliers-detail/suppliers-details-subjects-tab/suppliers-details-subjects-tab.component';



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
    SuppliersDetailsSubjectsTabComponent
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
    DataTableModule,
    SharedModule,
    StoreModule.provideStore({
      suppliers: suppliersReducer,
      selectedMode: selectedModeReducer,
      selectedSupplier: selectedSupplierReducer
    }),
    ApolloModule.forRoot(provideClient),
    ScrollToModule.forRoot(),
    TabViewModule,
    AgGridModule.withComponents(
            [RedComponentComponent]
        )
  ],
  providers: [
    SuppliersService,
    ModesService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
