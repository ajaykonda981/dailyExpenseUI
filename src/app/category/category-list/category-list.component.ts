import { Component, OnInit, ViewChild } from '@angular/core';
import { MatDialog, MatDialogRef } from '@angular/material/dialog';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { CategoryService } from 'src/app/_services/category.service';
import { AddCategoryComponent } from '../add-category/add-category.component';

@Component({
  selector: 'app-category-list',
  templateUrl: './category-list.component.html',
  styleUrls: ['./category-list.component.scss']
})


export class CategoryListComponent implements OnInit {
  @ViewChild(MatPaginator) paginator: MatPaginator;
  displayedColumns: string[] = ['id', 'categoryName'];
  //dataSource: any = [];
  data: any = [];
  dataSource = new MatTableDataSource<any>();

  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
  }
  constructor(
    public dialog: MatDialog,
    private categoryService: CategoryService,
  ) { 
  }

  ngOnInit(): void {
    this.search();
    
  }

  openDialog() {
   let dialogRef =  this.dialog.open(AddCategoryComponent, {
      data: {
        animal: 'panda',
      },
      width: '450px',
      
    });
    dialogRef.afterClosed().subscribe(res => {
      this.search();
    
    })
  }

  search() {
    this.categoryService.search().subscribe(categories => {
      this.data = categories;
      this.dataSource = new MatTableDataSource<any>(this.data);
      this.dataSource.paginator = this.paginator;
    })
  }



}
