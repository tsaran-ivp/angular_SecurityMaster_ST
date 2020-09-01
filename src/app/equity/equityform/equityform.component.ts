import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import {SecurityequityService} from '../shared/securityequity.service';

@Component({
  selector: 'app-equityform',
  templateUrl: './equityform.component.html',
  styleUrls: ['./equityform.component.css']
})
export class EquityformComponent implements OnInit {

  constructor(public service:SecurityequityService) { }

    ngOnInit(): void {
    this.resetForm();
    }
  
    resetForm(form? : NgForm){
      if(form !=null)
      form.resetForm();
      this.service.formdata=null;
  
    }
  
    onSubmit(form:NgForm){
      this.service.updateequity(form.value).subscribe(res=>{
        alert("updated equity record successfully");
        this.resetForm(form);
      })
    }

}
