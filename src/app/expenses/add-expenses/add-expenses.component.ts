import { HttpEventType } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef } from '@angular/material/dialog';
import { FileUploaderService } from 'src/app/_shared/file-uploader.service';

@Component({
  selector: 'app-add-expenses',
  templateUrl: './add-expenses.component.html',
  styleUrls: ['./add-expenses.component.scss']
})
export class AddExpensesComponent implements OnInit {
  public form: FormGroup;
  files: File[] = [];
  readonly paymentModes = [
    {id: 0, name: 'Cash'},
    {id: 1, name: 'Google Pay'},
    {id: 2, name: 'Phone Pay'},
    {id: 3, name: 'Online Transfer'},
    {id: 4, name: 'Other'},
  ]

  
  foods: any[] = [
    {value: 'steak-0', viewValue: 'Steak'},
    {value: 'pizza-1', viewValue: 'Pizza'},
    {value: 'tacos-2', viewValue: 'Tacos'},
  ];
  
  public progress: any;
  public message = '';
  constructor(
    private dialogRef: MatDialogRef<AddExpensesComponent>,
    public fb: FormBuilder,
    private fileUploaderService: FileUploaderService
  ) { }

  ngOnInit(): void {
    this.buildExpensesForm()
  }

  close() {
    this.dialogRef.close()
  }


 

onSelect(event) {
  console.log(event);
  this.files.push(...event.addedFiles);
}

onRemove(event) {
  console.log(event);
  this.files.splice(this.files.indexOf(event), 1);
}

upload() {
  let filesToUpload : File[] = this.files;
  const formData = new FormData();
    
  Array.from(filesToUpload).map((file, index) => {
    return formData.append('file'+index, file, file.name);
  });
  this.fileUploaderService.uploadMultipleFiles(formData)
    .subscribe(event => {
      if (event.type === HttpEventType.UploadProgress)
        this.progress = Math.round(100 * event.loaded / event.total);
      else if (event.type === HttpEventType.Response) {
        this.message = 'Upload success.';
      }
    });

}
buildExpensesForm() {
  this.form = this.fb.group({
    Category: ['', [Validators.required]],
    Amount: ['', [Validators.required]],
    ExpensesDate: ['', [Validators.required]],
    CreatedBy: [1 ],
    CreatedDate: [new Date()],
    Comments: ['', [Validators.required]],
    PaymentMode:['', [Validators.required]],
    PaymentDate: ['', Validators.required],
    
  });
}

saveExpenses() {
  console.log('form value', this.form.value)
}


}
