import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './modules/home/home.component';
import { NotFoundComponent } from './modules/not-found/not-found.component';
import { ProductInfoComponent } from './modules/product-info/product-info.component';
import { StoreInfoComponent } from './modules/store-info/store-info.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: '**', component: NotFoundComponent },
  { path: 'product-info', component: ProductInfoComponent },
  { path: 'store-info', component: StoreInfoComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
