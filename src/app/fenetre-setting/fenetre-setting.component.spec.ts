import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FenetreSettingComponent } from './fenetre-setting.component';

describe('FenetreSettingComponent', () => {
  let component: FenetreSettingComponent;
  let fixture: ComponentFixture<FenetreSettingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FenetreSettingComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FenetreSettingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
