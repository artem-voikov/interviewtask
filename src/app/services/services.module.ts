import { StateService } from './state.service';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SourceService } from './source.service';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [],
  providers: [SourceService, StateService]
})
export class ServicesModule { }
