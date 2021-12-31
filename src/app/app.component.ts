import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'createfun';
  showMathsButton=true;
  showMaths=false;
  Maths()
  {
    this.showMaths=true;
    this.showMathsButton=false;
  }
  navbarOpen = false;
  showIcon=false;
  toggleNavbar() {
    this.navbarOpen = !this.navbarOpen;
    this.showIcon=true;
  }
}
