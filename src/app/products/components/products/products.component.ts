import {
  Component,
  Input,
  OnChanges,
  OnInit,
  SimpleChanges,
  ViewChild,
} from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss'],
})
export class ProductsComponent implements OnInit, OnChanges {
  pageSize = 10;

  pageSizeOptions = [5, 10, 25, 100];

  dataSource: MatTableDataSource<any>;

  displayedColumns: string[] = ['id', 'title', 'price', 'description'];

  @Input() totalLength: number = 0;

  @Input() products = [];

  @ViewChild(MatPaginator) paginator: MatPaginator;

  @ViewChild(MatSort) sort: MatSort;

  ngAfterViewInit() {
    setTimeout(() => {
      this.dataSource.paginator = this.paginator;
      this.dataSource.sort = this.sort;
    }, 1000);
  }

  ngOnInit() {}

  onPageChanged(event) {
    console.log(event);
  }

  ngOnChanges(changes: SimpleChanges): void {
    if (changes['products'] && this.products != null) {
      this.dataSource = new MatTableDataSource(this.products);
    }
  }
}
