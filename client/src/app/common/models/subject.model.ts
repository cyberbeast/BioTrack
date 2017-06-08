import { Supplier } from ',/supplier.model';
import { Activity } from './activity.model;';

export interface Subject {
  _id: string;

  notes: string;

  identifications: {
    _id: string;
    id_VdhVsapImportationAppNumber: string;
    id_SupplierSubject: string;
  };

  metadata: {
    _id: string;
    meta_Gender: string;
    meta_Race: string;
    meta_Age: number;
    meta_CauseOfDeath: string;
    meta_AshStatus: string;
    meta_Disposition: string;
    meta_Usage: string;
  };

  measurements: object;

  supplier: Supplier;

  activity_log: Activity[];

}
