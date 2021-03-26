import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {AppComponent} from './app.component';
import {SearchByColumn} from './search-by-column';
import {FormsModule} from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent, SearchByColumn

  ],
  imports: [
    BrowserModule,
    FormsModule,

  ],
  bootstrap: [AppComponent]
})
export class AppModule {
}
