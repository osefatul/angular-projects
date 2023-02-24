import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CollectionsModule } from './collections/collections.module';
import { ElementsModule } from "./elements/elements.module";
import { NotFoundComponent } from './not-found/not-found.component';


@NgModule({
    declarations: [
        AppComponent,
        NotFoundComponent
    ],
    providers: [],
    bootstrap: [AppComponent],
    imports: [
        BrowserModule,
        ElementsModule,
        CollectionsModule,
        AppRoutingModule,
    ]
})
export class AppModule { }
