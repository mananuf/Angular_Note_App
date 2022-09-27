import { Component, OnInit } from '@angular/core';
import { Notes } from 'src/app/mock-notes';
import { NoteInterface } from 'src/app/note-interface';
@Component({
  selector: 'app-note',
  templateUrl: './note.component.html',
  styleUrls: ['./note.component.css']
})
export class NoteComponent implements OnInit {

  notes?:NoteInterface[] = Notes;
  constructor() { }

  ngOnInit(): void {
  }

}
