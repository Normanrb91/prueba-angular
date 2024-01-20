import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-filter',
  templateUrl: './filter.component.html',
  styleUrls: ['./filter.component.scss'],
})
export class FilterComponent {
  filter: string = '';
  @Output() filterChange = new EventEmitter<string>();

  onInputChange() {
    this.filterChange.emit(this.filter);
  }
}
