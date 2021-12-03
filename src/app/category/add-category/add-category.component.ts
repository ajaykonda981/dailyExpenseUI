import { toBase64String } from '@angular/compiler/src/output/source_map';
import { Component, OnInit, Inject } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';

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
  constructor(
    @Inject(MAT_DIALOG_DATA) public data: DialogData,
    private dialogRef: MatDialogRef<AddCategoryComponent>,
    private fb: FormBuilder,
    ) {}

  ngOnInit(): void {
    this.buildCategoryForm()
  }

  saveCategory() {
    if (this.form.valid) {
      console.log('save category is', this.form.value)
    }
    
  }

  close() {
    this.dialogRef.close()
  }

  buildCategoryForm() {
    this.form = this.fb.group({
      CategoryName: ['', [Validators.required]]
    });
  }
  

}
