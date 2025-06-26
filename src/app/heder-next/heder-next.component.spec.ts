import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HederNextComponent } from './heder-next.component';

describe('HederNextComponent', () => {
  let component: HederNextComponent;
  let fixture: ComponentFixture<HederNextComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HederNextComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HederNextComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
