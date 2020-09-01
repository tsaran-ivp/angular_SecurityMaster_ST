import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EquityformComponent } from './equityform/equityform.component';
import { EquitytableComponent } from './equitytable/equitytable.component';
import { EquityuploadComponent } from './equityupload/equityupload.component';



import {HttpClientModule} from '@angular/common/http';
import {FormsModule,ReactiveFormsModule} from '@angular/forms';
import {SecurityequityService} from './shared/securityequity.service';

import { MatCardModule, MatCard} from '@angular/material/card';      
import { MatFormFieldModule} from '@angular/material/form-field';
import { MatButtonModule } from '@angular/material/button';
import {MatInputModule} from '@angular/material/input';
import { EquitytileComponent } from './equitytile/equitytile.component';


@NgModule({
  declarations: [EquityformComponent, EquitytableComponent, EquityuploadComponent, EquitytileComponent],
  imports: [
    CommonModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    MatCardModule,
    MatFormFieldModule,
    MatButtonModule,
    MatInputModule
  ],
  exports:[
    EquityformComponent,EquitytableComponent,EquityuploadComponent,EquitytileComponent
  ],
  providers:[SecurityequityService]

})
export class EquityModule { }
