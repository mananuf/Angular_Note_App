import { Component, Input, OnInit } from '@angular/core';
import { NoteInterface } from 'src/app/note-interface';

@Component({
  selector: 'app-note-item',
  templateUrl: './note-item.component.html',
  styleUrls: ['./note-item.component.css']
})
export class NoteItemComponent implements OnInit {
  @Input() note?: NoteInterface;
  constructor() { }

  ngOnInit(): void {
  }

}
