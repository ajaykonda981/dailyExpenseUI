import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DeleteExpensesComponent } from './delete-expenses.component';

describe('DeleteExpensesComponent', () => {
  let component: DeleteExpensesComponent;
  let fixture: ComponentFixture<DeleteExpensesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DeleteExpensesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DeleteExpensesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
