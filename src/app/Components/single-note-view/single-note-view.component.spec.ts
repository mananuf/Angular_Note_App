import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SingleNoteViewComponent } from './single-note-view.component';

describe('SingleNoteViewComponent', () => {
  let component: SingleNoteViewComponent;
  let fixture: ComponentFixture<SingleNoteViewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SingleNoteViewComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SingleNoteViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
