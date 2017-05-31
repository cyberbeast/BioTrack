import { Component, OnInit } from '@angular/core';
import { Observable } from "rxjs/Observable";
import { Store } from '@ngrx/store';
import { SuppliersService } from '../common/services/suppliers.service';
import { AppStore } from '../common/models/appstore.model';
import { Supplier } from '../common/models/supplier.model';
import { LocalDataSource } from 'ng2-smart-table';

@Component({
  selector: 'app-suppliers',
  templateUrl: './suppliers.component.html',
  styleUrls: ['./suppliers.component.css'],
})
export class SuppliersComponent implements OnInit {

  // rows: [];

  suppliers: Observable<Array<Supplier>>;
  selectedSupplier: Observable<Supplier>;

  constructor(
    private suppliersService: SuppliersService,
    private store: Store<AppStore>
  ) {

    // this.suppliers = suppliersService.suppliers$;
    suppliersService.loadSuppliers();
    this.suppliers =  store.select('suppliers');
    this.selectedSupplier = store.select('selectedSupplier');
    this.selectedSupplier.subscribe(v => console.log("selectedSupplier is: " + v));

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

  printval() {
    this.suppliers.forEach((sup) => {
      console.log(JSON.stringify(sup));
    })
    // console.log(this.suppliers);
  }
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
