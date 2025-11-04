
import { Component, inject } from '@angular/core';
import { Card } from '@products/component/product-card/product-card';
import { ProductsService } from '@products/services/products.service';
import { rxResource } from '@angular/core/rxjs-interop';
import { Observable } from 'rxjs';
import { ProductsResponse } from '@products/interfaces/product.interface';



@Component({
  selector: 'app-home-page',
  imports: [Card],
  templateUrl: './home-page.html',

})
export class HomePage {
  productsService = inject(ProductsService);

  productsResource = rxResource({
  params: () => ({}),
  stream: ({params}) => {
    return this.productsService.getProducts({
      limit: 2,
    });
  },
});

}
