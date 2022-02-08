import { environment } from '@src/environments/environment';
import { Product } from '@app/components/product/product.model';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  baseUrl = `${environment.apiUrl}/products`;

  constructor(
    private snackBar: MatSnackBar,
    private httpClient: HttpClient) { }

  showMessage(msg: string): void {

    this.snackBar.open(msg, 'X', {
      duration: 3000,
      horizontalPosition: "right",
      verticalPosition: "top"
    })

  }

  create(product: Product): Observable<Product> {
    return this.httpClient.post<Product>(this.baseUrl, product);
  }

}
