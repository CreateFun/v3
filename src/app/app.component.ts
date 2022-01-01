import { Component } from '@angular/core';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'createfun';
  showMathsButton=true;
  show:boolean []=[false,false,false,false,false,false,false,false,false,false,true];
  createfun()
  {}
  Maths()
  {
    this.show[0]=true;
    for(let i=0;i<=10;i++)
    {
      if(i!==0)
        this.show[i]=false;
    }
    this.navbarOpen =false;
  }
  Food()
  {
    this.show[1]=true;
    for(let i=0;i<=10;i++)
    {
      if(i!==1)
        this.show[i]=false;
    }
    this.navbarOpen =false;
  }

  Bhajans()
  {
   
    for(let i=0;i<=10;i++)
    {
      if(i==2 || i==9)
      {
        this.show[2]=true;
        this.show[9]=true;
      }
      else
        this.show[i]=false;
    }
    this.navbarOpen =false;

    this.url=["https://www.youtube.com/embed/SEfr-fDloHk"];
    this.urlSafe=[this.sanitizer.bypassSecurityTrustResourceUrl(this.url[0])];
    this. groups=[
      {
        "imgsrc":this.urlSafe[0],
        "name": "Krishna Bhajan ",
        "cardtextHeader": "Learning Maths is Fun  ",
        "cardtextBody":  "Learning Maths is Fun",
        "cardtextFooter":  "Learning Maths is Fun",
        "buttonName":"Maths",
        "link":"/maths",
        "color":"table-primary"
      },
      {
        "imgsrc":this.urlSafe[0],
        "name": "Krishna Bhajan ",
        "cardtextHeader": "Learning Maths is Fun  ",
        "cardtextBody":  "Learning Maths is Fun",
        "cardtextFooter":  "Learning Maths is Fun",
        "buttonName":"Maths",
        "link":"/maths",
        "color":"table-primary"
      },
      {
        "imgsrc":this.urlSafe[0],
        "name": "Krishna Bhajan ",
        "cardtextHeader": "Learning Maths is Fun  ",
        "cardtextBody":  "Learning Maths is Fun",
        "cardtextFooter":  "Learning Maths is Fun",
        "buttonName":"Maths",
        "link":"/maths",
        "color":"table-primary"
      },
      {
        "imgsrc":this.urlSafe[0],
        "name": "Krishna Bhajan ",
        "cardtextHeader": "Learning Maths is Fun  ",
        "cardtextBody":  "Learning Maths is Fun",
        "cardtextFooter":  "Learning Maths is Fun",
        "buttonName":"Maths",
        "link":"/maths",
        "color":"table-primary"
      },
      {
        "imgsrc":this.urlSafe[0],
        "name": "Krishna Bhajan ",
        "cardtextHeader": "Learning Maths is Fun  ",
        "cardtextBody":  "Learning Maths is Fun",
        "cardtextFooter":  "Learning Maths is Fun",
        "buttonName":"Maths",
        "link":"/maths",
        "color":"table-primary"
      }
    ]
  }

  BookSummaries()
  {
    this.show[3]=true;
    for(let i=0;i<=10;i++)
    {
      if(i!==3)
        this.show[i]=false;
    }
    this.navbarOpen =false;
  }

  Kannada()
  {
    this.show[9]=true;
    for(let i=0;i<=10;i++)
    {
      if(i!==9)
        this.show[i]=false;
    }
    this.navbarOpen =false;
    this.url=["https://www.youtube.com/embed/SEfr-fDloHk"];
    this.urlSafe=[this.sanitizer.bypassSecurityTrustResourceUrl(this.url[0])];
    this. groups=[
      {
        "imgsrc":this.urlSafe[0],
        "name": "Maths",
        "cardtextHeader": "Learning Maths is Fun  ",
        "cardtextBody":  "Learning Maths is Fun",
        "cardtextFooter":  "Learning Maths is Fun",
        "buttonName":"Maths",
        "link":"/maths",
        "color":"table-primary"
      }]


  }
  
  MemoryTips()
  {
    this.show[5]=true;
    for(let i=0;i<=10;i++)
    {
      if(i!==5)
        this.show[i]=false;
    }
    this.navbarOpen =false;
  }
  
  Programming()
  {
    this.show[6]=true;
    for(let i=0;i<=10;i++)
    {
      if(i!==6)
        this.show[i]=false;
    }
    this.navbarOpen =false;
  }
  
  Books()
  {
    this.show[7]=true;
    for(let i=0;i<=10;i++)
    {
      if(i!==7)
        this.show[i]=false;
    }
    this.navbarOpen =false;
  }
  ContactUS()
  {
    this.show[8]=true;
    for(let i=0;i<=10;i++)
    {
      if(i!==8)
        this.show[i]=false;
    }
    this.navbarOpen =false;
  }
  // About Table starts 
  url: string[] =["https://www.youtube.com/embed/SEfr-fDloHk","https://www.youtube.com/embed/SEfr-fDloHk","https://www.youtube.com/embed/SEfr-fDloHk","https://www.youtube.com/embed/SEfr-fDloHk","https://www.youtube.com/embed/SEfr-fDloHk"];
  urlSafe: SafeResourceUrl[]=[this.sanitizer.bypassSecurityTrustResourceUrl(this.url[0]),this.sanitizer.bypassSecurityTrustResourceUrl(this.url[1])]
  /*
  urlSafe1: SafeResourceUrl= this.sanitizer.bypassSecurityTrustResourceUrl(this.url[0]);
  urlSafe2: SafeResourceUrl= this.sanitizer.bypassSecurityTrustResourceUrl(this.url[1]);
  urlSafe3: SafeResourceUrl= this.sanitizer.bypassSecurityTrustResourceUrl(this.url[2]);
  urlSafe4: SafeResourceUrl= this.sanitizer.bypassSecurityTrustResourceUrl(this.url[3]);
  urlSafe5: SafeResourceUrl= this.sanitizer.bypassSecurityTrustResourceUrl(this.url[4]);      */

  groups=[
    {
      "imgsrc":this.urlSafe[0],
      "name": "Maths",
      "cardtextHeader": "Learning Maths is Fun  ",
      "cardtextBody":  "Learning Maths is Fun",
      "cardtextFooter":  "Learning Maths is Fun",
      "buttonName":"Maths",
      "link":"/maths",
      "color":"table-primary"
    },
    {
      "imgsrc":this.urlSafe[1],
      "name": "Bhajans",
      "cardtextHeader": "Learning Maths is Fun  ",
        "cardtextBody":  "Learning Maths is Fun",
        "cardtextFooter":  "Learning Maths is Fun",
      "buttonName":"Bhajans",
      "link":"/bhajans",
      "color":"table-success"
    }];
    constructor(public sanitizer: DomSanitizer) {

 
    }
  Demo(){
    this.show[9]=true;
    for(let i=0;i<=10;i++)
    {
      if(i!==9)
        this.show[i]=false;
    }
    this.navbarOpen =false;
  }

  navbarOpen = false;
  showIcon=false;
  toggleNavbar() {
    this.navbarOpen = !this.navbarOpen;
    this.showIcon=true;
  }
}
