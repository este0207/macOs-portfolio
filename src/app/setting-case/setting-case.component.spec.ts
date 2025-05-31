import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SettingCaseComponent } from './setting-case.component';

describe('SettingCaseComponent', () => {
  let component: SettingCaseComponent;
  let fixture: ComponentFixture<SettingCaseComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SettingCaseComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SettingCaseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
