import { APP_BASE_HREF } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EmptyRouteComponent } from './empty-route/empty-route.component';
import { SalesDetailsComponent } from './sales-details/sales-details.component';
import { SalesListComponent } from './sales-list/sales-list.component';

const routes: Routes = [
  { path: 'list', component: SalesListComponent },
  { path: 'details/:id', component: SalesDetailsComponent },
  { path: '**', component: EmptyRouteComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
  providers: [{
    provide: APP_BASE_HREF,
    // @ts-ignore
    useValue: window.__POWERED_BY_QIANKUN__ ? '/sales' : '/sales'
  }]
})
export class AppRoutingModule {}
