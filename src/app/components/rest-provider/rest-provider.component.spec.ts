import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RestProviderComponent } from './rest-provider.component';

describe('RestProviderComponent', () => {
  let component: RestProviderComponent;
  let fixture: ComponentFixture<RestProviderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RestProviderComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RestProviderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
