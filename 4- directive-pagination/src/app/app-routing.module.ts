import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NgPaginationComponent } from 'src/app/ng-pagination/ng-pagination.component';
import { AppComponent } from './app.component';
import { HomePageComponent } from './home-page/home-page.component';
import { VanillaPaginationComponent } from './vanilla-pagination/vanilla-pagination.component';

const routes: Routes = [
  {path: "home", component: HomePageComponent},
  {path:"ngPagination", component:NgPaginationComponent},
  {path:"vanillaPagination", component:VanillaPaginationComponent},
  {path: "", redirectTo: "home", pathMatch:"full"}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
