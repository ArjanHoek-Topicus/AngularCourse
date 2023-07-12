import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    FormsModule, // Import the FormsModule to enable form features, like [(ngModel)] used in the app component template
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
