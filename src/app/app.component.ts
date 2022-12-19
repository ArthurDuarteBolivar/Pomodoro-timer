import { map } from 'rxjs';
import { IAppState } from './store/app.state';
import { Store } from '@ngrx/store';
import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'copy-of-pomodoro';

}
