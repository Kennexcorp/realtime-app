import { catchError, map } from 'rxjs/operators';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Note } from './note.model';
import { Observable, throwError } from 'rxjs';

export interface Response {
  data: any
}

@Injectable({
  providedIn: 'root'
})

export class NoteService {

  private baseUrl = 'http://localhost/api/notes';

  constructor(private http: HttpClient) { }

  create(note: Note) {
    return this.http.post<Note>(`${this.baseUrl}`, note).pipe(
      catchError(this.handleError)
    );
  }

  list(): Observable<Note[]> {
    return this.http.get<Response>(`${this.baseUrl}`).pipe(
      map(result => {
        return result.data
      }),
      catchError(this.handleError)
    );
  }

  update(note: Note) {
    return this.http.put<Note>(`${this.baseUrl}/${note.id}`, note).pipe(
      catchError(this.handleError)
    );
  }

  delete(id: number) {
    return this.http.delete<Note>(`${this.baseUrl}/${id}`).pipe(
      catchError(this.handleError)
    );
  }


  private handleError(error: HttpErrorResponse) {
    if (error.status === 0) {
      // A client-side or network error occurred. Handle it accordingly.
      console.error('An error occurred:', error.error);
    } else {
      // The backend returned an unsuccessful response code.
      // The response body may contain clues as to what went wrong.
      console.error(
        `Backend returned code ${error.status}, ` +
        `body was: ${error.message}`);
    }
    // Return an observable with a user-facing error message.
    return throwError(
      'Something bad happened; please try again later.');
  }
}
