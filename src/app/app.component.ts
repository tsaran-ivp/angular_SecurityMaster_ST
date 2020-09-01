import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'secmaster';
  bondselect(){
    document.getElementById("button1").style.borderColor="white";
    document.getElementById("button2").style.borderColor="gray";
  }
  equityselect(){
    document.getElementById("button2").style.borderColor="white";
    document.getElementById("button1").style.borderColor="gray";
  }
}
