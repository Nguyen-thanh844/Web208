import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ContenadminComponent } from './contenadmin.component';

describe('ContenadminComponent', () => {
  let component: ContenadminComponent;
  let fixture: ComponentFixture<ContenadminComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ContenadminComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ContenadminComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
