import { Component, OnInit } from '@angular/core';

import { IProduct } from './product';
import { ProductService } from './product.service';

@Component({
    moduleId: module.id,
    templateUrl: 'product-list.component.html',
    styleUrls: ['product-list.component.css']
})

export class ProductListComponent implements OnInit {
    constructor(private _productService: ProductService) { }

    pageTitle: string = 'Product List';
    imgWidth: number = 50;
    imgPadding: number = 2;
    showImage: boolean = false;
    listFilter: string;
    products: IProduct[];
    errorMessage: string;

    ngOnInit(): void {
        this._productService.getProducts().subscribe(
            products => this.products = products,
            error => this.errorMessage = <any>error
        )
    } 

    onRatingClicked(message: string): void {
        this.pageTitle = 'Product List: ' + message;
    }

    toggleImage(): void {
        this.showImage = !this.showImage;
    }
}