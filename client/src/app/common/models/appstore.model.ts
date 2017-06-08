import { Supplier } from './supplier.model';
import { Subject } from './subject.model';
// import { Mode } from ',/mode.model';

export interface AppStore {
  selectedMode: string;

  suppliers: Supplier[];
  selectedSupplier: Supplier;

  subjects: Subject[];
  selectedSubject: Subject;
};
