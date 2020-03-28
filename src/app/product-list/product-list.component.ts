import { Component } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';

import { products } from '../products';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent {
  products = products;

  billForm = new FormGroup({
    date: new FormControl(''),
    amount: new FormControl(''),
    title: new FormControl(''),
    description: new FormControl(''),
    category: new FormControl('')
  });

  share() {
    window.alert('The product has been shared!');
  }
}


/*
Copyright Google LLC. All Rights Reserved.
Use of this source code is governed by an MIT-style license that
can be found in the LICENSE file at http://angular.io/license
*/