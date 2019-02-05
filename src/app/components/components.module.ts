import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { InfoComponent } from './info/info.component';
import { InfoPageComponent } from './info-page/info-page.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
  ],
  declarations: [InfoComponent, InfoPageComponent],
  exports: [InfoComponent, InfoPageComponent],
})
export class ComponentsModule { }
