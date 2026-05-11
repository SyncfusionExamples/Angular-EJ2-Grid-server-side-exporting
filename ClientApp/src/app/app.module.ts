import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { GridAllModule } from '@syncfusion/ej2-angular-grids';

@NgModule({
  imports: [
    HttpClientModule,
    GridAllModule
  ]
})
export class AppModule { }
