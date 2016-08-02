import { Component, OnInit } from 'angular2/core';

import { IProduct } from './product';
import { ProductFilterPipe } from './product-filter.pipe';
import { StarComponent } from '../shared/star.component';
import { ProductService } from './product.service';

@Component({
    templateUrl: 'app/products/product-list.component.html',
    styleUrls: ['app/products/product-list.component.css'],
    pipes: [ProductFilterPipe],
    directives: [StarComponent]
})

export class ProductListComponent implements OnInit {
    pageTitle: string = "Product List";
    listFilter: string;
    imageWidth: number = 20;
    imageMargin: number = 2;
    showImage: boolean = false;
    errorMessage: string;

    products: IProduct[];

    constructor(private _productService: ProductService) { }

    ngOnInit(): void {
        this._productService.getProducts()
            .subscribe(
                products => this.products = products,
                error => this.errorMessage = <any>error);
    }

    toggleImage(): void {
        this.showImage = !this.showImage;
    }

    onRatingClicked(message: string): void {
        this.pageTitle = 'Product List: ' + message;
    }
}