import { Injectable } from '@angular/core';
import{HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {Securitybond} from './securitybond.model';

@Injectable({
  providedIn: 'root'
})
export class SecuritybondService {
  readonly Bondurl="https://localhost:44362/api";
  formdata:Securitybond;
  

  constructor(private http:HttpClient) { }
    
    bondselect():Observable<any[]>{
      return this.http.get<any>(this.Bondurl+'/bond');
    }
    

    bondupdate(formdata:Securitybond){
      return this.http.put(this.Bondurl+'/bond',formdata);
    }
    bondadd(val:any){
      return this.http.post(this.Bondurl+'/bond',val);
    }
    bonddelete(id:number){
      return this.http.delete(this.Bondurl+'/bond/'+id);
    }
}
