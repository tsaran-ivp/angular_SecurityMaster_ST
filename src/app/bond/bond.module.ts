import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BondtableComponent } from './bondtable/bondtable.component';


import {HttpClientModule} from '@angular/common/http';
import {FormsModule,ReactiveFormsModule} from '@angular/forms';
import {SecuritybondService} from './shared/securitybond.service';
import { BondformComponent } from './bondform/bondform.component';
      
import { MatCardModule, MatCard} from '@angular/material/card';      
import { MatFormFieldModule} from '@angular/material/form-field';

import { MatButtonModule } from '@angular/material/button';
import {MatInputModule} from '@angular/material/input';
import { BonduploadComponent } from './bondupload/bondupload.component';

@NgModule({
  declarations: [BondtableComponent, BondformComponent, BonduploadComponent],
  imports: [
    CommonModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    MatCardModule,
    MatFormFieldModule,
    MatButtonModule,
    MatInputModule,
    
  ],
  exports: [
    BondtableComponent,BondformComponent,BonduploadComponent
  ],
  providers: [SecuritybondService]
})
export class BondModule { }
