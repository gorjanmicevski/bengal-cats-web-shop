import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CatCollageComponent } from './cat-collage.component';

describe('CatCarouselComponent', () => {
  let component: CatCollageComponent;
  let fixture: ComponentFixture<CatCollageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CatCollageComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CatCollageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
