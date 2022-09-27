import { Injectable } from '@angular/core';
import { Observable,of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class NoteService {
  notesURL = "http://localhost:3000/notes"
  constructor() { }
}
