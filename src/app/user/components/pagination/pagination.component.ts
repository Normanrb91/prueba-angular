import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-pagination',
  templateUrl: './pagination.component.html',
  styleUrls: ['./pagination.component.scss'],
})
export class PaginationComponent {
  @Input() page: number = 1;
  @Input() hasNextPage: boolean = false;
  @Input() hasPreviousPage: boolean = false;
  @Output() pageChange = new EventEmitter<number>();

  onChangePage(newPage: number): void {
    this.pageChange.emit(newPage);
  }
}
