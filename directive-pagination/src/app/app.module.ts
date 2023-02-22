import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PaginationModule } from 'ngx-bootstrap/pagination';
import { FormsModule } from '@angular/forms';
import { NavComponent } from './nav/nav.component';
import { NgPaginationComponent } from './ng-pagination/ng-pagination.component';
import { VanillaPaginationComponent } from './vanilla-pagination/vanilla-pagination.component';
import { HomePageComponent } from './home-page/home-page.component';
import { ClassDirective } from './vanilla-pagination/class.directive';
import { TimesDirective } from './vanilla-pagination/times.directives';


@NgModule({
  declarations: [
    AppComponent,
    NavComponent,
    NgPaginationComponent,
    VanillaPaginationComponent,
    HomePageComponent,
    ClassDirective, 
    TimesDirective
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    PaginationModule.forRoot(),
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})


export class AppModule { }
