import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditTurnDialogComponent } from './edit-turn-dialog.component';

describe('DialogComponent', () => {
  let component: EditTurnDialogComponent;
  let fixture: ComponentFixture<EditTurnDialogComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [EditTurnDialogComponent]
    });
    fixture = TestBed.createComponent(EditTurnDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
