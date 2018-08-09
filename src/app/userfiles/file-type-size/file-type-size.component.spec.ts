import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FileTypeSizeComponent } from './file-type-size.component';

describe('FileTypeSizeComponent', () => {
  let component: FileTypeSizeComponent;
  let fixture: ComponentFixture<FileTypeSizeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FileTypeSizeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FileTypeSizeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
