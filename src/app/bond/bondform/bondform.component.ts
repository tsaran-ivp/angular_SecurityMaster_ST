import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import {SecuritybondService} from '../shared/securitybond.service';

@Component({
  selector: 'app-bondform',
  templateUrl: './bondform.component.html',
  styleUrls: ['./bondform.component.css']
})
export class BondformComponent implements OnInit {

  constructor(public service:SecuritybondService) { }

  ngOnInit(): void {
    this.resetForm();
    }
  
    resetForm(form? : NgForm){
      if(form !=null)
      form.resetForm();
      this.service.formdata=null;
  
    }
  
    onSubmit(form:NgForm){
      this.service.bondupdate(form.value).subscribe(res=>{
        alert("updated successfully");
        this.resetForm(form);
      })
    }

}
