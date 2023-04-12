import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CatCarouselComponent } from './cat-carousel.component';

describe('CatCarouselComponent', () => {
  let component: CatCarouselComponent;
  let fixture: ComponentFixture<CatCarouselComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CatCarouselComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CatCarouselComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
