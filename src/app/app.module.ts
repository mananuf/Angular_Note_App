import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http'

import { AppComponent } from './app.component';
import { NoteComponent } from './Components/note/note.component';
import { SearchComponent } from './Components/search/search.component';
import { NoteItemComponent } from './Components/note-item/note-item.component';

@NgModule({
  declarations: [
    AppComponent,
    NoteComponent,
    SearchComponent,
    NoteItemComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
