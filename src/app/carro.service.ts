import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { MessageService } from './message.service';
import { catchError, map, tap } from 'rxjs/operators';
import { Carro, Query } from './carro';
//GraphQL
import gql from 'graphql-tag';
import { Apollo } from 'apollo-angular';
import { AllCarGQL } from './command/carro.all.graphql';
import { GetCarGQL } from './command/carro.get.graphql';

@Injectable({
  providedIn: 'root'
})

export class CarroService {
  constructor(
    private apollo: Apollo,
    private messageService: MessageService,
    private allCarGQL: AllCarGQL,
    private getCarGQL: GetCarGQL
  ) { }
   /**
   * Handle Http operation that failed.
   * Let the app continue.
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

  /** Log a CarroService message with the MessageService */
  private log(message: string) {
    this.messageService.add(`CarroService: ${message}`);
  }

  getCarros(): Observable<Carro[]> {
    return this.allCarGQL.watch()
    .valueChanges 
    .pipe( 
      map(result => {
        console.log(result);
        return result.data.carros;
      }),      
      tap(_ => this.log('Obteniendo carros')),
      catchError(this.handleError('getCarros', []))
    );
  }

  getCarro(id: number): Observable<Carro> {
    return this.getCarGQL.watch({
      id:id
    })
    .valueChanges 
    .pipe(
      map(result => result.data.carro),   
      tap(_ => this.log(`Obteniendo carro por el id=${id}`)),
      catchError(this.handleError<Carro>(`getCarro id=${id}`))
    );  
  }

  /** PUT: update the carro on the server */
  updateCarro (carro: Carro): Observable<any> {  
    throw "updateCarro"; 
  }

  /** POST: add a new carro to the server */
  addCarro (carro: Carro): Observable<Carro> {   
    throw "addCarro";
  }

  /** DELETE: delete the carro from the server */
  deleteCarro (carro: Carro | number): Observable<Carro> {
    throw "deleteCarro";
  }
}