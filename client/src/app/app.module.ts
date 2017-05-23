// import { MaterializeModule } from 'angular2-materialize';
import { MaterializeModule } from 'ng2-materialize';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { SidenavHeaderComponent } from './navbar/sidenav-header/sidenav-header.component';
import { SidenavSectionsComponent } from './navbar/sidenav-sections/sidenav-sections.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    SidenavHeaderComponent,
    SidenavSectionsComponent
  ],
  imports: [
    MaterializeModule.forRoot(),
    BrowserAnimationsModule,
    BrowserModule,
    FormsModule,
    HttpModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
