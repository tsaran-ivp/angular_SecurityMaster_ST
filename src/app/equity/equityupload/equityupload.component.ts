import { Component, OnInit } from '@angular/core';
import {SecurityequityService} from '../shared/securityequity.service';

@Component({
  selector: 'app-equityupload',
  templateUrl: './equityupload.component.html',
  styleUrls: ['./equityupload.component.css']
})
export class EquityuploadComponent implements OnInit {

  constructor(private service:SecurityequityService) { }

  ngOnInit(): void {
  }

  uploadfile(event){
    var file=event.target.files[0];
    const formdata :FormData=new FormData();
    formdata.append('uploadedFile',file,file.name);
    this.service.addequity(formdata).subscribe((data:any)=>{
   alert("file uploaded succesfully");
    })
  }

}
