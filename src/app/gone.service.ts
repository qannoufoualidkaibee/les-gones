import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import {filter, Observable, of} from 'rxjs';
import { catchError, map, tap } from 'rxjs/operators';

import { Gone } from './gone';
import { MessageService } from './message.service';

@Injectable({ providedIn: 'root' })
export class GoneService {

  private gonesUrl = 'api/gones';  // URL to web api

  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
  };

  constructor(
    private http: HttpClient,
    private messageService: MessageService) { }

  /** GET gones from the server */
  getGones(): Observable<Gone[]> {
    return this.http.get<Gone[]>(this.gonesUrl)
      .pipe(
          map((gones) => gones.map((gone) => new Gone(gone))),
          catchError(this.handleError<Gone[]>('getGones', []))
      );
  }

  /** GET gones from the server */
  getTopGones(): Observable<Gone[]> {
    return this.getGones()
        .pipe(map((gones) => gones.filter((gone) => gone.numberOfEatenPizzaSlices >= 50)));
  }

  /** GET gone by id. Return `undefined` when id not found */
  getGoneNo404<Data>(id: number): Observable<Gone> {
    const url = `${this.gonesUrl}/?id=${id}`;
    return this.http.get<Gone[]>(url)
      .pipe(
        map(gones => gones[0]), // returns a {0|1} element array
        tap(h => {
          const outcome = h ? 'fetched' : 'did not find';
          this.log(`${outcome} gone id=${id}`);
        }),
        catchError(this.handleError<Gone>(`getGone id=${id}`))
      );
  }

  /** GET gone by id. Will 404 if id not found */
  getGone(id: number): Observable<Gone> {
    const url = `${this.gonesUrl}/${id}`;
    return this.http.get<Gone>(url).pipe(
      tap(_ => this.log(`fetched gone id=${id}`)),
      catchError(this.handleError<Gone>(`getGone id=${id}`))
    );
  }

  /* GET gones whose name contains search term */
  searchGones(term: string): Observable<Gone[]> {
    if (!term.trim()) {
      // if not search term, return empty gone array.
      return of([]);
    }
    return this.http.get<Gone[]>(`${this.gonesUrl}/?name=${term}`).pipe(
      tap(x => x.length ?
         this.log(`found gones matching "${term}"`) :
         this.log(`no gones matching "${term}"`)),
      catchError(this.handleError<Gone[]>('searchGones', []))
    );
  }

  //////// Save methods //////////

  /** POST: add a new gone to the server */
  addGone(gone: Gone): Observable<Gone> {
    return this.http.post<Gone>(this.gonesUrl, gone, this.httpOptions).pipe(
      tap((newGone: Gone) => this.log(`added gone w/ id=${newGone.id}`)),
      catchError(this.handleError<Gone>('addGone'))
    );
  }

  /** DELETE: delete the gone from the server */
  deleteGone(id: number): Observable<Gone> {
    const url = `${this.gonesUrl}/${id}`;

    return this.http.delete<Gone>(url, this.httpOptions).pipe(
      tap(_ => this.log(`deleted gone id=${id}`)),
      catchError(this.handleError<Gone>('deleteGone'))
    );
  }

  /** PUT: update the gone on the server */
  updateGone(gone: Gone): Observable<any> {
    return this.http.put(this.gonesUrl, gone, this.httpOptions).pipe(
      tap(_ => this.log(`updated gone id=${gone.id}`)),
      catchError(this.handleError<any>('updateGone'))
    );
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

  /** Log a GoneService message with the MessageService */
  private log(message: string) {
    this.messageService.add(`GoneService: ${message}`);
  }
}



