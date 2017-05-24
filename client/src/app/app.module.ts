import { MaterializeModule as MM } from 'angular2-materialize';
import { MaterializeModule } from 'ng2-materialize';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

// APOLLO CLIENT IMOPRTS
import { ApolloClient, createNetworkInterface } from 'apollo-client';
import { ApolloModule } from 'apollo-angular';
import { provideClient } from './apollo';

// ngrx imports
import { StoreModule } from '@ngrx/store';
import { SuppliersService } from './common/services/suppliers.service';
import { suppliers } from './common/stores/suppliers.store';
import { selectedSupplier } from './common/stores/selectedSupplier.store';
import { modes } from './common/stores/modes.store';
import { selectedMode } from './common/stores/selectedMode.store';


// DECLARATIONS
import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { SidenavHeaderComponent } from './navbar/sidenav-header/sidenav-header.component';
import { SidenavSectionsComponent } from './navbar/sidenav-sections/sidenav-sections.component';
import { SuppliersComponent } from './suppliers/suppliers.component';

// ROUTING DECLARATIONS
import { routing } from './app.routes';
import { DashboardComponent } from './dashboard/dashboard.component';



@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    SidenavHeaderComponent,
    SidenavSectionsComponent,
    SuppliersComponent,
    DashboardComponent
  ],
  imports: [
    MaterializeModule.forRoot(),
    MM,
    BrowserAnimationsModule,
    BrowserModule,
    FormsModule,
    HttpModule,
    routing,
    StoreModule.provideStore({suppliers, selectedSupplier}),
    ApolloModule.forRoot(provideClient)
  ],
  providers: [SuppliersService],
  bootstrap: [AppComponent]
})
export class AppModule { }
