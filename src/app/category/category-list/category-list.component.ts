import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { AddCategoryComponent } from '../add-category/add-category.component';


export interface PeriodicElement {
  name: string;
  position: number;
}

const ELEMENT_DATA: PeriodicElement[] = [
  {position: 1, name: 'Cement'},
  {position: 2, name: 'Iron'},
  {position: 3, name: 'Sand'},
  {position: 4, name: 'Daily Wages'},
  {position: 5, name: 'Plumbing'},
  {position: 6, name: 'Electricity'},
  {position: 7, name: 'Miscelleneaous'},
  {position: 8, name: 'Food'},
  {position: 9, name: 'Petrol'},
  {position: 10, name: 'Others'},
];

@Component({
  selector: 'app-category-list',
  templateUrl: './category-list.component.html',
  styleUrls: ['./category-list.component.scss']
})


export class CategoryListComponent implements OnInit {
  displayedColumns: string[] = ['position', 'name'];
  dataSource = ELEMENT_DATA;
  constructor(
    public dialog: MatDialog
  ) { }

  ngOnInit(): void {

    
  }

  openDialog() {
    this.dialog.open(AddCategoryComponent, {
      data: {
        animal: 'panda',
      },
      width: '450px'
    });
  }

}
