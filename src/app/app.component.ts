import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  public name = 'Arjan';
  public showName = true;
  public log = [];

  public toggle() {
    this.showName = !this.showName;
    this.log.push(+new Date());
  }
}
