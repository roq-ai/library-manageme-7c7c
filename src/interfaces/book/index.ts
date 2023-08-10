import { BorrowingInterface } from 'interfaces/borrowing';
import { ReservationInterface } from 'interfaces/reservation';
import { LibraryInterface } from 'interfaces/library';
import { IsbnInterface } from 'interfaces/isbn';
import { GetQueryInterface } from 'interfaces';

export interface BookInterface {
  id?: string;
  title: string;
  author: string;
  library_id?: string;
  created_at?: any;
  updated_at?: any;
  isbn_id: string;
  borrowing?: BorrowingInterface[];
  reservation?: ReservationInterface[];
  library?: LibraryInterface;
  isbn?: IsbnInterface;
  _count?: {
    borrowing?: number;
    reservation?: number;
  };
}

export interface BookGetQueryInterface extends GetQueryInterface {
  id?: string;
  title?: string;
  author?: string;
  library_id?: string;
  isbn_id?: string;
}
