import { Injectable } from '@angular/core';

import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import { of } from 'rxjs/observable/of';
import { catchError, map, tap } from 'rxjs/operators';

import { Messages } from '../models/message';
import { Participants } from '../models/participants';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
}; 

@Injectable()
export class MessagesService {

  constructor(
    private http: HttpClient
  ) { }

  getParticipants (): Observable<Participants[]> {
    return this.http.get<Participants[]>('/api/participants').pipe(tap(participants => participants));
  }

  getMessage(participant: string): Observable<Messages> {
    return this.http.get<Messages>(`/api/messages/${participant}`).pipe(tap(messages => messages));
  }
}
