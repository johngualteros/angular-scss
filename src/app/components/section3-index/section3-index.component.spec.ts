import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Section3IndexComponent } from './section3-index.component';

describe('Section3IndexComponent', () => {
  let component: Section3IndexComponent;
  let fixture: ComponentFixture<Section3IndexComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Section3IndexComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Section3IndexComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
