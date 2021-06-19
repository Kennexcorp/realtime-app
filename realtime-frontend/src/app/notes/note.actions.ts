import { Update } from "@ngrx/entity";
import { createAction, props } from "@ngrx/store";
import { Note } from "./note.model";

export const listNotes = createAction('[Note/API] List Notes', props<{ notes: Note[] }>());

export const addNote = createAction('[Note/API] Add Note', props<{ note: Note }>());

export const updateNote = createAction('[Note/API] Update Note', props<{ update: Update<Note> }>());

export const deleteNote = createAction('[Note/API] Delete Note', props<{ id: string }>());
