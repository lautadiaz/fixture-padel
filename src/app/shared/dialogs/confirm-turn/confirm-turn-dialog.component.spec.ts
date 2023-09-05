import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ConfirmTurnDialogComponent } from './confirm-turn-dialog.component';

describe('DialogComponent', () => {
  let component: ConfirmTurnDialogComponent;
  let fixture: ComponentFixture<ConfirmTurnDialogComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [ConfirmTurnDialogComponent]
    });
    fixture = TestBed.createComponent(ConfirmTurnDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
