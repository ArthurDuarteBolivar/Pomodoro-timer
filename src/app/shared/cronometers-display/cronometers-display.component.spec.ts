import { ComponentFixture, TestBed } from '@angular/core/testing';
import { CronometersDisplayComponent } from './cronometers-display.component';



describe('CronometersDisplayComponent', () => {
  let component: CronometersDisplayComponent;
  let fixture: ComponentFixture<CronometersDisplayComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CronometersDisplayComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CronometersDisplayComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
