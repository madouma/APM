import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

import { ProductListComponent } from './product-list.component';
import { ProductDetailComponent } from './product-detail.component';
import { ProductService } from './product.service';
import { ProductFilterPipe } from './product-filter.pipe';
import { ProductDetailGuard } from './product-guard.service';
import { StarComponent } from '../shared/star.component';

@NgModule({
    imports: [ 
        FormsModule,
        CommonModule,
        RouterModule.forChild([
            { path: 'products', component: ProductListComponent },
            { path: 'product/:id', 
                    canActivate: [ ProductDetailGuard ],
                    component: ProductDetailComponent },            
        ])
    ],
    declarations: [ 
        ProductListComponent,
        ProductDetailComponent,        
        ProductFilterPipe,
        StarComponent
     ],
     providers: [
         ProductService,
         ProductDetailGuard
     ]
})

export class ProductModule { }