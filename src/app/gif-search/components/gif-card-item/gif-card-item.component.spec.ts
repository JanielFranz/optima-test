import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GifCardItemComponent } from './gif-card-item.component';

describe('GifCardItemComponent', () => {
  let component: GifCardItemComponent;
  let fixture: ComponentFixture<GifCardItemComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [GifCardItemComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GifCardItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
