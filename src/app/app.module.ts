import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { ButtonComponent } from './button/button.component';

@NgModule({
  imports: [BrowserModule, FormsModule],
  declarations: [AppComponent, ButtonComponent],
  bootstrap: [AppComponent],
})
export class AppModule {}
