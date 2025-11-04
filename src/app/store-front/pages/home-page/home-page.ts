
import { Component, inject, signal } from '@angular/core';
import { Card } from '@products/component/product-card/product-card';
import { ProductsService } from '@products/services/products.service';
import { rxResource } from '@angular/core/rxjs-interop';
import { Observable, tap } from 'rxjs';
import { Product, ProductsResponse } from '@products/interfaces/product.interface';



@Component({
  selector: 'app-home-page',
  imports: [Card],
  templateUrl: './home-page.html',

})
export class HomePage {
  productsService = inject(ProductsService);
  products = signal<Product[]>([]);


  productsResource = rxResource({
    params: () => ({}),
    stream: ({ params }) => {
      return this.productsService.getProducts({});
    }
  })

}
