import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  public name = 'Arjan';
  public showName = true;
  public clicks = [];

  public toggle() {
    this.showName = !this.showName;
    this.clicks.push(+new Date());
  }
}
