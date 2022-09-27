import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http'

import { AppComponent } from './app.component';
import { NoteComponent } from './Components/note/note.component';
import { SearchComponent } from './Components/search/search.component';
import { NoteItemComponent } from './Components/note-item/note-item.component';
import { MessagesComponent } from './Components/messages/messages.component';
import { SingleNoteViewComponent } from './Components/single-note-view/single-note-view.component';

@NgModule({
  declarations: [
    AppComponent,
    NoteComponent,
    SearchComponent,
    NoteItemComponent,
    MessagesComponent,
    SingleNoteViewComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
