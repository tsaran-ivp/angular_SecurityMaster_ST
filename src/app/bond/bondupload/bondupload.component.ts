import { Component, OnInit } from '@angular/core';
import {SecuritybondService} from '../shared/securitybond.service';

@Component({
  selector: 'app-bondupload',
  templateUrl: './bondupload.component.html',
  styleUrls: ['./bondupload.component.css']
})
export class BonduploadComponent implements OnInit {

  constructor(private service:SecuritybondService) { }
 
  ngOnInit(): void {
  }


  uploadfile(event){
    var file=event.target.files[0];
    const formdata :FormData=new FormData();
    formdata.append('uploadedFile',file,file.name);
    this.service.bondadd(formdata).subscribe((data:any)=>{
   alert("inserted succesfully");
    })
  }


}
