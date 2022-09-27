import { Injectable } from '@angular/core';
import { Observable,of } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { NoteInterface } from '../note-interface';
import { MessagesService } from './messages.service';
import { tap,catchError } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class NoteService {
  // api url to get notes
  notesURL = "http://localhost:3000/notes"
  

  constructor(
    private http: HttpClient,
    private messagesService: MessagesService
    ) { }

  private log(msg:string){
    this.messagesService.add(`LOG:  ${msg}`);
  }

   /**
 * Handle Http operation that failed.
 * Let the app continue.
 *
 * @param operation - name of the operation that failed
 * @param result - optional value to return as the observable result
 */
private handleError<T>(operation = 'operation', result?: T) {
  return (error: any): Observable<T> => {

    // TODO: send the error to remote logging infrastructure
    console.error(error); // log to console instead

    // TODO: better job of transforming error for user consumption
    this.log(`${operation} failed: ${error.message}`);

    // Let the app keep running by returning an empty result.
    return of(result as T);
  };
}

  getNotes():Observable<NoteInterface[]>{
    return this.http.get<NoteInterface[]>(this.notesURL).pipe(
      tap(_ => this.log('succesfully loaded notes')),
      catchError(this.handleError<NoteInterface[]>('getNotes', []))
    )
  }
}
