import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SplashComponent } from './splash/splash.component'
import { AboutComponent } from './about/about.component'
import { AdminComponent } from './admin/admin.component'
import { LoginComponent } from './login/login.component'
import { ShopComponent } from './shop/shop.component'

const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: 'home', component: SplashComponent },
  // { path: '/about', component: AboutComponent },
  // { path: '/shop', component: ShopComponent },
  // { path: '/admin', component: AdminComponent }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
