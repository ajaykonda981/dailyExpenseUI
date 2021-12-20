import { HttpEventType } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef } from '@angular/material/dialog';
import { CategoryService } from 'src/app/_services/category.service';
import { DailyExpensesService } from 'src/app/_services/daily-expenses.service';
import { FileUploaderService } from 'src/app/_shared/file-uploader.service';
import { PaymentModesService} from '../../_services/payment-modes.service';
@Component({
  selector: 'app-add-expenses',
  templateUrl: './add-expenses.component.html',
  styleUrls: ['./add-expenses.component.scss']
})
export class AddExpensesComponent implements OnInit {
  public form: FormGroup;
  files: File[] = [];
   paymentModes: any = []
  categories: any = [];
  
  public progress: any;
  public message = '';
  public Fileuploader =[];
  constructor(
    private dialogRef: MatDialogRef<AddExpensesComponent>,
    public fb: FormBuilder,
    private fileUploaderService: FileUploaderService,
    private dailyExpensesService: DailyExpensesService,
    private categoryService: CategoryService,
    private paymentModeService: PaymentModesService
  ) { }

  ngOnInit(): void {
    this.getCategories();
    this.getPaymentModes()
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
      console.log('event details',event)
      this.Fileuploader = event;
      // if (event.type === HttpEventType.UploadProgress)
      //   this.progress = Math.round(100 * event.loaded / event.total);
      // else if (event.type === HttpEventType.Response) {
      //   this.message = 'Upload success.';
      //}
    });

}
buildExpensesForm() {
  this.form = this.fb.group({
    category: [0, [Validators.required]],
    amount: ['', [Validators.required]],
    expensesDate: ['', [Validators.required]],
    createdBy: [1 ],
    createdDate: [new Date()],
    comments: ['', [Validators.required]],
    paymentMode:[0, [Validators.required]],
    paymentDate: ['', Validators.required],
    isDeleted: false,
    fileuploader: []
    
  });
}

saveExpenses() {
  console.log('form value', this.form.value)
  if(this.form.valid) {
    this.form.value.category = Number(this.form.value.category)
    this.form.value.paymentMode = Number(this.form.value.paymentMode)
    this.form.value.fileuploader = this.Fileuploader;
    this.dailyExpensesService.post(this.form.value).subscribe(response => {
      console.log(response)
      this.dialogRef.close('Saved')
    })    
  }
}



getCategories() {
  this.categoryService.getAll().subscribe(categories => {
    this.categories = categories
  })
}

getPaymentModes() {
  this.paymentModeService.getAll().subscribe(paymentModes => {
    this.paymentModes = paymentModes
  })
}

}
