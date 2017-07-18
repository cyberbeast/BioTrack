import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

// rxjs imports
import { Observable } from "rxjs/Observable";
import { Subscription } from 'rxjs/Subscription';

// ngrx store import
import { Store } from '@ngrx/store';

// supplier service, models import
import { SuppliersService } from '../common/services/suppliers.service';
import { ModesService } from '../common/services/modes.service';
import { AppStore } from '../common/models/appstore.model';
import { Supplier } from '../common/models/supplier.model';

// table imports
import { LocalDataSource } from 'ng2-smart-table';

@Component({
  selector: 'biotrack-suppliers',
  templateUrl: './suppliers.component.html',
  styleUrls: ['./suppliers.component.css'],
})
export class SuppliersComponent implements OnInit {

  // rows: [];

  suppliers: Observable<Array<Supplier>>;
  selectedSupplier: Observable<Supplier>;
  activeSupplier: string;
  subjectsBySelectedSupplier: string[];
  subscription: Subscription;

  constructor(
    private suppliersService: SuppliersService,
    private modesService: ModesService,
    private store: Store<AppStore>,
    private route: ActivatedRoute
  ) {

    // this.suppliers = suppliersService.suppliers$;
    suppliersService.loadSuppliers();
    this.suppliers =  store.select('suppliers');
    this.selectedSupplier = store.select('selectedSupplier');
    this.selectedSupplier.subscribe(v => {
      console.log("selectedSupplier is: " + JSON.stringify(v));
      this.activeSupplier = v.name;
    });

    this.subscription = this.suppliersService.getSubjectsBySelectedSupplier().subscribe((subjects) => {
      // console.log("Got subjects for supplier " + subjects);
      this.subjectsBySelectedSupplier = subjects;
    });

  }

  selectSupplier(supplier_id) {
    this.suppliersService.selectSupplier(supplier_id);
  }

  setNewMode(mode) {
    this.modesService.setMode(mode.toLowerCase());
  }

  settings = {
    columns: {
      name: {
        title: 'Name'
      },
      description: {
        title: 'Description'
      }
    }
  };

  supplier_fields = {
    'id': null,
    'name':null,
    'description':null
  };

  autocompleteInit = {
    placeholder: '+Field',
    secondaryPlaceholder: 'Enter Field(s)',
    autocompleteOptions: {
      data: this.supplier_fields,
      limit: Infinity,
      minLength: 1
    }
  };

  add(chip) {
    if (this.supplier_fields.hasOwnProperty(chip.tag)){
      console.log("Chip added: " + chip.tag);
    }
    else {
      this.delete(chip);
    }
  }

  delete(chip) {
    console.log("Chip deleted: " + chip.tag);
  }

  select(chip) {
    console.log("Chip selected: " + chip.tag);
  }


  ngOnInit() {
    this.suppliersService.loadSuppliers();
    // this.modesService.setMode("suppliers");
    // this.suppliers = this.suppliersService.suppliers$;

    this.route.params.subscribe(params => {
      this.selectSupplier(params.supplier_id);
    });
  }

}
