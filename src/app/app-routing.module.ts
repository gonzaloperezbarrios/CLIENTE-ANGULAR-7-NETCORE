import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CarrosComponent }      from './carros/carros.component';
import { DashboardComponent }   from './dashboard/dashboard.component';
import { CarroDetailComponent }  from './carro-detail/carro-detail.component';

const routes: Routes = [
  { path: '', redirectTo: '/dashboard', pathMatch: 'full' },
  { path: 'dashboard', component: DashboardComponent },
  { path: 'detail/:id', component: CarroDetailComponent },
  { path: 'carros', component: CarrosComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
