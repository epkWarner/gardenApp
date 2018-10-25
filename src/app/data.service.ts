import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http'

import { Observable, of, from } from 'rxjs'
import { catchError, map, tap } from 'rxjs/operators'

import { Product } from './product.class'

const httpOptions = {
  headers: new HttpHeaders({
    "Content-Type": "application/json"
  })
}

@Injectable({
  providedIn: 'root'
})

export class DataService {
  private productsUrl = 'https://efa-gardenapp-backend.herokuapp.com/api/product'
  private deleteUrl = 'https://efa-gardenapp-backend.herokuapp.com/api/product'
  private authUrl = 'https://efa-gardenapp-backend.herokuapp.com/api/auth/login'

  constructor(
    private http: HttpClient
  ) { }

  getProducts(): Observable<Product[]> {
    console.log('getProducts')
    return this.http.get<Product[]>(this.productsUrl)
      .pipe(
        tap(products => console.log('Fetched Products')),
        catchError(this.handleError('getProducts', []))
      )
  }

  handleError<T>(operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {
      console.error(error)
      return of(result as T)
    }
  }

  deleteProduct(product: Product | number): Observable<Product> {
    const id = typeof product === 'number' ? product : product.id
    const url = `${this.deleteUrl}/${id}`

    return this.http.delete<Product>(url, httpOptions).pipe(
      tap(_ => console.log(`Deleted product id: ${id}`)),
      catchError(this.handleError<Product>('deleteProduct'))
    )
  }

  login(email: string, password: string): Observable<any> {
    return this.http.post<any>(this.authUrl, { email, password }).pipe(
      tap(_ => console.log('Logged in')),
      catchError(this.handleError<any>('login '))
    )
  }


}
