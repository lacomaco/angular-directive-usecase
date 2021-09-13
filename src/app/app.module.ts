import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { HelloComponent } from './hello.component';
import { ToggleDirective } from './toggle.directive';
import { UseToggleComponent } from './use-toggle/use-toggle.component';
import { MouseDirective } from './mouse.directive';
import { UseMouseComponent } from './use-mouse/use-mouse.component';

@NgModule({
  imports: [BrowserModule, FormsModule],
  declarations: [
    AppComponent,
    HelloComponent,
    ToggleDirective,
    UseToggleComponent,
    MouseDirective,
    UseMouseComponent
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}
