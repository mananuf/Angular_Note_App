import { Component, OnInit } from '@angular/core';
import { Notes } from 'src/app/mock-notes';
import { NoteInterface } from 'src/app/note-interface';
import { NoteService } from 'src/app/Services/note.service';
@Component({
  selector: 'app-note',
  templateUrl: './note.component.html',
  styleUrls: ['./note.component.css']
})
export class NoteComponent implements OnInit {

  notes?:NoteInterface[];
  constructor(private noteService: NoteService) { }

  ngOnInit(): void {
    this.get()
  }

  // get notes from server through NoteService
  get():void{
    this.noteService.getNotes().subscribe(data => this.notes = data)
  }

}
