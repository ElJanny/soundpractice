import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {MatSliderModule} from '@angular/material/slider';
import {MatButtonModule} from '@angular/material/button';
import {MatIconModule} from '@angular/material/icon';


@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    MatSliderModule
  ],
  exports:[
    MatSliderModule,
    MatButtonModule,
    MatIconModule
  ]
})
export class MaterialModuelModule { }
