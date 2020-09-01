import { Component, OnInit } from '@angular/core';
import {SecurityequityService} from '../shared/securityequity.service';
import {Securityequity} from '../shared/securityequity.model';

@Component({
  selector: 'app-equitytable',
  templateUrl: './equitytable.component.html',
  styleUrls: ['./equitytable.component.css']
})
export class EquitytableComponent implements OnInit {

  constructor(private service:SecurityequityService) { }
  equitylist:any=[];


  ngOnInit(): void {
    this.refreshequitylist(); 
  }

  refreshequitylist(){
    this.service.selectequity().subscribe(data=>{
      this.equitylist=data;
    });
  }

  populateform(equityitem :Securityequity){
    this.service.formdata=Object.assign({},equityitem);
  }

  deleteitem(id:number){
    if(confirm('Sure You wish to Delete this security?')){
      this.service.deleteequity(id).subscribe(res=>{
        alert("deleted security successfully");
        this.refreshequitylist();
      })
    }
  }

}
