import { Component, inject } from '@angular/core';
import { toSignal, rxResource } from '@angular/core/rxjs-interop';
import { ActivatedRoute } from '@angular/router';
import { ProductsService } from '@products/services/products.service';
import { map } from 'rxjs';
import { Card } from "@products/component/product-card/product-card";


@Component({
  selector: 'app-gender-page',
  imports: [Card],
  templateUrl: './gender-page.html',
})
export class GenderPage {
  route = inject(ActivatedRoute);
  productsService = inject(ProductsService)

  gender = toSignal(
    this.route.params.pipe(
      map(({gender}) => gender)
    )
  )
productsResource = rxResource({
    params: () => ({gender:this.gender()}),
    stream: ({ params }) => {
      return this.productsService.getProducts({
        gender: params.gender

      });
    }
  })
}
