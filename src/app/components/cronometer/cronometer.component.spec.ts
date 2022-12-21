import { SharedModule } from './../../shared/shared/shared.module';
import { MatButtonToggleModule } from '@angular/material/button-toggle';
import { ComponentFixture, TestBed, fakeAsync } from '@angular/core/testing';
import * as fromAuth from './../../store/app.state'
import { CronometerComponent } from './cronometer.component';
import {  MockStore, provideMockStore } from '@ngrx/store/testing';

describe('CronometerComponent', () => {
  let component: CronometerComponent;
  let fixture: ComponentFixture<CronometerComponent>;
  let store: MockStore;
  const initialState = { minute: 0, seconds1: 0, seconds2: 0 };

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CronometerComponent ],
      providers: [provideMockStore({ initialState })],
      imports: [MatButtonToggleModule, SharedModule,]
    })
    .compileComponents();
    fixture = TestBed.createComponent(CronometerComponent);
    component = fixture.componentInstance;
    store = TestBed.inject(MockStore);
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

});
