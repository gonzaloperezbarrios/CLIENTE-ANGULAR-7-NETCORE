import { Injectable } from '@angular/core';
import { Carro } from './carro';
import { Observable, of } from 'rxjs';
import { MessageService } from './message.service';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { catchError, map, tap } from 'rxjs/operators';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json', 'Accept': 'application/json' })
};

@Injectable({
  providedIn: 'root'
})

export class CarroService {

  constructor(
    private http: HttpClient,
    private messageService: MessageService) { }

  private carroUrl = 'http://localhost:5000/api/cars';  // URL to web api

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
    return this.http.get<Carro>(this.carroUrl) 
    .pipe( 
      map(carrosJson=>{        
        let carros=[]; 
        for (let i in carrosJson){
          const car={
            'id':carrosJson[i]['Id'],
            'name':carrosJson[i]['Name']
          }         
          carros.push(car);
        }      
        return carros;
      }),      
      tap(_ => this.log('Obteniendo carros')),
      catchError(this.handleError('getCarros', []))
    );
  }

  getCarro(id: number): Observable<Carro> {
    const url = `${this.carroUrl}/${id}`;
    return this.http.get<Carro>(url).pipe(
      map(carrosJson=>{   
        const car={
          'id':carrosJson['Id'],
          'name':carrosJson['Name']
        }         
        return car;
      }),  
      tap(_ => this.log(`Obteniendo carro por el id=${id}`)),
      catchError(this.handleError<Carro>(`getCarro id=${id}`))
    );
  }

  /** PUT: update the carro on the server */
  updateCarro (carro: Carro): Observable<any> {  
    const car={
      'Name':carro.name  
    }   
    const url = `${this.carroUrl}/${carro.id}`;
    return this.http.put(url, car, httpOptions).pipe(
      tap(_ => this.log(`Actulizado carro por el id=${carro.id}`)),
      catchError(this.handleError<any>('updateCarro'))
    );
  }

  /** POST: add a new carro to the server */
  addCarro (carro: Carro): Observable<Carro> {   
    return this.http.post<Carro>(this.carroUrl, carro, httpOptions).pipe(
      tap((carro: Carro) => this.log(`Carro nuevo con id=${carro.id}`)),
      catchError(this.handleError<Carro>('addCarro'))
    );
  }

  /** DELETE: delete the carro from the server */
  deleteCarro (carro: Carro | number): Observable<Carro> {
    const id = typeof carro === 'number' ? carro : carro.id;
    const url = `${this.carroUrl}/${id}`;   
    return this.http.delete<Carro>(url, httpOptions).pipe(
      tap(_ => this.log(`Carro borrado por el id=${id}`)),
      catchError(this.handleError<Carro>('deleteCarro'))
    );
  }
}