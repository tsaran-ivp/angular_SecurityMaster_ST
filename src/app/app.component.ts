import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'secmaster';
  bondselect(){
    document.getElementById("button1").style.backgroundColor="white";
    document.getElementById("button2").style.backgroundColor="gray";
  }
  equityselect(){
    document.getElementById("button2").style.backgroundColor="white";
    document.getElementById("button1").style.backgroundColor="gray";
  }
}
