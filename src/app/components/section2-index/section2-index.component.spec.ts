import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Section2IndexComponent } from './section2-index.component';

describe('Section2IndexComponent', () => {
  let component: Section2IndexComponent;
  let fixture: ComponentFixture<Section2IndexComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Section2IndexComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Section2IndexComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
