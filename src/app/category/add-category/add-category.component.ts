import { Component, OnInit, Inject } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';
import { ToastrService } from 'ngx-toastr';
import { CategoryService } from 'src/app/_services/category.service';

export interface DialogData {
  animal: 'panda' | 'unicorn' | 'lion';
}

@Component({
  selector: 'app-add-category',
  templateUrl: './add-category.component.html',
  styleUrls: ['./add-category.component.scss']
})
export class AddCategoryComponent implements OnInit {
  public form: FormGroup;
  isMask = false;
  constructor(
    @Inject(MAT_DIALOG_DATA) public data: DialogData,
    private dialogRef: MatDialogRef<AddCategoryComponent>,
    private fb: FormBuilder,
    private categoryService: CategoryService,
    private toastr: ToastrService
    ) {}

  ngOnInit(): void {
    this.buildCategoryForm()
  }

  saveCategory() {
  this.isMask =true
    if (this.form.valid) {
      this.categoryService.post(this.form.value).subscribe(res => {
       this.isMask =false
       this.showSuccess()
       this.dialogRef.close();  
      })
    }
  }

  close() {
    this.dialogRef.close()
  }

  buildCategoryForm() {
    this.form = this.fb.group({
      categoryName: ['', [Validators.required]]
    });
  }

  showSuccess() {
    this.toastr.success('Saved successfully')
  }
  
  

}
