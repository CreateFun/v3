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
    for(let i=0;i<=10;i++)
    {
      if(i!==0)
        this.show[i]=false;
    }
   
  }
  Food()
  {
    this.show[1]=true;
    for(let i=0;i<=10;i++)
    {
      if(i!==1)
        this.show[i]=false;
    }
   
  }

  Bhajans()
  {
    this.show[2]=true;
    for(let i=0;i<=10;i++)
    {
      if(i!==2)
        this.show[i]=false;
    }
   
  }

  BookSummaries()
  {
    this.show[3]=true;
    for(let i=0;i<=10;i++)
    {
      if(i!==3)
        this.show[i]=false;
    }
   
  }

  Kannada()
  {
    this.show[4]=true;
    for(let i=0;i<=10;i++)
    {
      if(i!==4)
        this.show[i]=false;
    }
   
  }
  
  MemoryTips()
  {
    this.show[5]=true;
    for(let i=0;i<=10;i++)
    {
      if(i!==5)
        this.show[i]=false;
    }
   
  }
  
  Programming()
  {
    this.show[6]=true;
    for(let i=0;i<=10;i++)
    {
      if(i!==6)
        this.show[i]=false;
    }
   
  }
  
  Books()
  {
    this.show[7]=true;
    for(let i=0;i<=10;i++)
    {
      if(i!==7)
        this.show[i]=false;
    }
   
  }
  ContactUS()
  {
    this.show[8]=true;
    for(let i=0;i<=10;i++)
    {
      if(i!==8)
        this.show[i]=false;
    }

  }



  navbarOpen = false;
  showIcon=false;
  toggleNavbar() {
    this.navbarOpen = !this.navbarOpen;
    this.showIcon=true;
  }
}
