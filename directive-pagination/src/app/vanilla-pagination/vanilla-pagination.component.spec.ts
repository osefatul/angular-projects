import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VanillaPaginationComponent } from './vanilla-pagination.component';

describe('VanillaPaginationComponent', () => {
  let component: VanillaPaginationComponent;
  let fixture: ComponentFixture<VanillaPaginationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VanillaPaginationComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(VanillaPaginationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
