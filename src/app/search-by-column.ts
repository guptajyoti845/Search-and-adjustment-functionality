import { Pipe, PipeTransform } from '@angular/core';
import {Row} from './row';

@Pipe({ name: 'searchByName' })
export class SearchByColumn implements PipeTransform {
  transform(rows: Row[], searchText: string) {
    return rows.filter(row => row.A.indexOf(searchText) !== -1);
  }
}
