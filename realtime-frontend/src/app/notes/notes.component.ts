import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Note } from './note.model';
import { NoteService } from './note.service';

@Component({
  selector: 'app-notes',
  templateUrl: './notes.component.html',
  styleUrls: ['./notes.component.css']
})
export class NotesComponent implements OnInit {

  notesForm = this.fb.group({
    description: ['', Validators.required]
  });

  notes: Note[] = [];

  constructor(private fb: FormBuilder, private noteService: NoteService) { }

  ngOnInit(): void {
    this.listAllNotes();
  }

  onSubmit() {
    // TODO: Use EventEmitter with form value
    this.noteService.create(this.notesForm.value).subscribe(result => {
      this.notesForm.reset();
      this.listAllNotes();
    });

  }

  listAllNotes() {
    this.noteService.list().subscribe(result => {
      this.notes = result;
      console.log(result);
    })
  }

}
