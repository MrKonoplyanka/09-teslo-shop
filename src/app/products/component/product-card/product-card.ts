import { SlicePipe } from '@angular/common';
import { Component, computed, input, signal } from '@angular/core';
import { RouterLink } from "@angular/router";
import { Product } from '@products/interfaces/product.interface';

@Component({
  selector: 'product-card',
  imports: [RouterLink, SlicePipe],
  templateUrl: './product-card.html',
})
export class Card {
  product = input.required<Product>();

}
