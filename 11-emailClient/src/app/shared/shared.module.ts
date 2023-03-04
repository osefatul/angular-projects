import { ReactiveFormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {MatInputModule} from '@angular/material/input'; 
import { SharedRoutingModule } from './shared-routing.module';
import { InputComponent } from './input/input.component';


@NgModule({
  declarations: [
    InputComponent
  ],
  imports: [
    CommonModule,
    SharedRoutingModule,
    MatInputModule,
    ReactiveFormsModule
  ],
  exports: [InputComponent]
})
export class SharedModule { }
