import { Supplier } from './supplier.model';
import { Mode } from ',/mode.model';

export interface AppStore {
  modes: Mode[];
  selectedMode: Mode;
  suppliers: Supplier[];
  selectedSupplier: Supplier;
};
