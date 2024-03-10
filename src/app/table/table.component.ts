import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.css'],
})
export class TableComponent {
  @Input() data: any;
  title = 'pagination';
  page: number = 1;
  count: number = 0;
  tableSize: number = 10;
  tableSizes: any = [5, 10, 15, 20];
  @Input() headArray: string[] = [];
  @Input() customFunction!: Function;
  @Input() fetchData!: Function;
  ontableDataChange(event: any) {
    this.page = event;
    this.fetchData();
  }

  onTableSizeChange(event: any): void {
    this.tableSize = event.target.value;
    this.page = 1;
    this.fetchData();
  }
}
