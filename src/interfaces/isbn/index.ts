import { GetQueryInterface } from 'interfaces';

export interface IsbnInterface {
  id?: string;
  created_at?: any;
  updated_at?: any;
  number?: string;

  _count?: {};
}

export interface IsbnGetQueryInterface extends GetQueryInterface {
  id?: string;
  number?: string;
}
