import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { ProductListComponent } from './product-list.component';
import { ProductDetailComponent } from './product-detail.component';
import { ProductService } from './product.service';
import { ProductFilterPipe } from './product-filter.pipe';
import { ProductDetailGuard } from './product-guard.service';

import { SharedModule } from '../shared/shared.module';

@NgModule({
    imports: [ 
        SharedModule,
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
     ],
     providers: [
         ProductService,
         ProductDetailGuard
     ]
})

export class ProductModule { }