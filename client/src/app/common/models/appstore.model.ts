import { Supplier } from './supplier.model';
// import { Mode } from ',/mode.model';

export interface AppStore {
  selectedMode: String;
  suppliers: Supplier[];
  selectedSupplier: Supplier;
};
