import { Component, OnInit } from '@angular/core';
import {SecuritybondService} from '../shared/securitybond.service';
import {Securitybond} from '../shared/securitybond.model';


@Component({
  selector: 'app-bondtable',
  templateUrl: './bondtable.component.html',
  styleUrls: ['./bondtable.component.css']
})
export class BondtableComponent implements OnInit {

  constructor(private service:SecuritybondService) { }
bondlist:any=[];
  ngOnInit(): void {
    this.refreshbondlist(); 
  }

  refreshbondlist(){
    this.service.bondselect().subscribe(data=>{
      this.bondlist=data;
    });
  }
  populateform(bonditem :Securitybond){
    this.service.formdata=Object.assign({},bonditem);
  }
  deleteitem(id:number){
    if(confirm('are u sure u wanna delete?')){
      this.service.bonddelete(id).subscribe(res=>{
        alert("deleted successfully");
        this.refreshbondlist();
      })
    }
  }


}
