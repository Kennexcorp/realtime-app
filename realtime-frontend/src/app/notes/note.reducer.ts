import { createEntityAdapter, EntityAdapter, EntityState } from '@ngrx/entity';
import { Action, createReducer, on } from '@ngrx/store';
import { Note } from './note.model';
import * as NoteActions from './note.actions';

export interface State extends EntityState<Note> {
  selectedNoteId: string | null;
  description: string | null;
}

export function selectNoteId(note: Note): string {
  return note.id;
}

export function sortByName(firstNote: Note, secondNote: Note): number {
  return firstNote.description.localeCompare(secondNote.description);
}

export const adapter: EntityAdapter<Note> = createEntityAdapter<Note>();

export const initialState: State = adapter.getInitialState({
  selectedNoteId: null,
  description: null,
});

const noteReducer = createReducer(
  initialState,
  on(NoteActions.addNote, (state, { note }) => {
    return adapter.addOne(note, state);
  }),
  on(NoteActions.updateNote, (state, { update }) => {
    return adapter.updateOne(update, state);
  }),
  on(NoteActions.deleteNote, (state, { id }) => {
    return adapter.removeOne(id, state);
  }),
  on(NoteActions.listNotes, (state, { notes }) => {
    return adapter.setAll(notes, state);
  })
);

export function reducer(state: State | undefined, action: Action) {
  return noteReducer(state, action);
}
