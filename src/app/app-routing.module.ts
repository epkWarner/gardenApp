import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: '/home', component: SplashComponent },
  { path: '/about', component: AboutComponent },
  { path: '/shop', component: ShopComponent },
  { path: '/admin', component: AdminComponent }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
