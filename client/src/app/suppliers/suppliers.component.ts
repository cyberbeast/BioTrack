import { Component, OnInit } from '@angular/core';
import { Observable } from "rxjs/Observable";
import { Subscription } from 'rxjs/Subscription';
import { Store } from '@ngrx/store';
import { SuppliersService } from '../common/services/suppliers.service';
import { AppStore } from '../common/models/appstore.model';
import { Supplier } from '../common/models/supplier.model';
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
    private store: Store<AppStore>
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

  selectSupplier(supplier) {
    this.suppliersService.selectSupplier(supplier);
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
    // this.suppliers = this.suppliersService.suppliers$;
  }

}
