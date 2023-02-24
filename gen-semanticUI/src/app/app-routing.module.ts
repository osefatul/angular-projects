import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponentComponent } from './home/home-component/home-component.component';
import { NotFoundComponent } from './not-found/not-found.component';


const routes: Routes = [
  {path:"elements", loadChildren:async () => {
    const m = await import("./elements/elements.module");
    return m.ElementsModule;
  }},
  {path: "collections", loadChildren: () => import ("./collections/collections.module").then(m =>m.CollectionsModule)},
  {path: '', component:HomeComponentComponent},
  {path:"**", component: NotFoundComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
