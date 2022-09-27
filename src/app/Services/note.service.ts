import { Injectable } from '@angular/core';
import { Observable,of } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { NoteInterface } from '../note-interface';

@Injectable({
  providedIn: 'root'
})
export class NoteService {
  // api url to get notes
  notesURL = "http://localhost:3000/notes"

  constructor(private http: HttpClient) { }

  getNotes():Observable<NoteInterface[]>{
    return this.http.get<NoteInterface[]>(this.notesURL)
  }
}
