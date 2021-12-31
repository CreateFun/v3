import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'createfun';
  showMathsButton=true;
  show:boolean []=[false,false,false,false,false,false,false,false,false,false,false];
  Maths()
  {
    this.show[0]=true;
   
  }
  navbarOpen = false;
  showIcon=false;
  toggleNavbar() {
    this.navbarOpen = !this.navbarOpen;
    this.showIcon=true;
  }
}
