import { HttpEventType, HttpResponse } from '@angular/common/http';
import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { RESOURCE_CACHE_PROVIDER } from '@angular/platform-browser-dynamic';
import { DialogData } from 'src/app/category/add-category/add-category.component';
import { FileUploaderService } from 'src/app/_shared/file-uploader.service';

@Component({
  selector: 'app-expenses-details',
  templateUrl: './expenses-details.component.html',
  styleUrls: ['./expenses-details.component.scss']
})
export class ExpensesDetailsComponent implements OnInit {
  data: any;
  files: any = [ ];
  fileUrl =''
  //fileSavePath = 'E:\DailyExpensesTracker\DailyExpensesTrackerAPI\DailyExpensesTrackerAPI\Resources\Images\'
  constructor(
    private dialogRef: MatDialogRef<ExpensesDetailsComponent>,
    @Inject(MAT_DIALOG_DATA) public dialogData: DialogData,
    private fileUploaderService: FileUploaderService
  ) { 
    this.data = this.dialogData;
    this.files = this.data.filesList;
  }

  ngOnInit(): void {
  }
  close() {
    this.dialogRef.close()
  }
  
  downloadFile(file):void
  {
   this.fileUploaderService.download(file).subscribe((res: Blob) => {
     const blob = new Blob([res], {type: res.type})
     const url = window.URL.createObjectURL(blob)
     window.open(url)
   })
  }

}
