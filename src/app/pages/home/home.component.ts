import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent {
  colorBackground = "#ba4949"
  color = (e: string) => {
    this.colorBackground = e
  }
}
