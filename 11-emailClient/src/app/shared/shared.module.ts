import { ReactiveFormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {MatInputModule} from '@angular/material/input'; 
import { MatFormFieldModule } from '@angular/material/form-field';
import { SharedRoutingModule } from './shared-routing.module';
import { InputComponent } from './input/input.component';
import { ModalComponent } from './modal/modal.component';

@NgModule({
  declarations: [
    InputComponent,
    ModalComponent
  ],
  imports: [
    CommonModule,
    SharedRoutingModule,
    MatInputModule,
    ReactiveFormsModule,
    MatFormFieldModule
  ],
  exports: [
    InputComponent,
    ModalComponent,
  ]
})
export class SharedModule { }
