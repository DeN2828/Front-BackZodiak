import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ZodiakComponentComponent } from './zodiak-component.component';

describe('ZodiakComponentComponent', () => {
  let component: ZodiakComponentComponent;
  let fixture: ComponentFixture<ZodiakComponentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ZodiakComponentComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ZodiakComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
