import { Component } from '@angular/core';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'createfun';
  Heading="";
  Headers:string[]=['Maths','Food','Bhajans','Book Summaries','Kannda','Meory Tips','Programming','Books','Contact Us']
  showMathsButton=true;
  show:boolean []=[false,false,false,false,false,false,false,false,false,false,true,true];
  createfun()
  {
    console.log(this.show.length);
    for(let i=0;i<this.show.length;i++)
    {
      if(i==10 || i==11)
      {
        this.show[i]=true;
        
      }
      else
        this.show[i]=false;
    }
  }

  Maths()
  {
    this.Heading=this.Headers[0];
    for(let i=0;i<this.show.length;i++)
    {
      if(i==0 || i==9)
      {
        this.show[0]=true;
        this.show[9]=true;
      }
      else
        this.show[i]=false;
    }
    this.navbarOpen =false;

    this.url=["https://www.youtube.com/embed/xitTUOMbcII","https://www.youtube.com/embed/T2k3poiEM2w","https://www.youtube.com/embed/tN2zgLOMznc",
  "https://www.youtube.com/embed/m2a2H28UQAU","https://www.youtube.com/embed/KGYm6JJu2Zw"];
    this.urlSafe=[this.sanitizer.bypassSecurityTrustResourceUrl(this.url[0]),
    this.sanitizer.bypassSecurityTrustResourceUrl(this.url[1]),
    this.sanitizer.bypassSecurityTrustResourceUrl(this.url[2]),
    this.sanitizer.bypassSecurityTrustResourceUrl(this.url[3]),
    this.sanitizer.bypassSecurityTrustResourceUrl(this.url[4])];
    this. groups=[
      {
        "imgsrc":this.urlSafe[0],
        "name": "Krishna Bhajan ",
        "cardtextHeader": "Jai Shri Krishna",  
        "cardtextBody":  "Learning Bhajans is Fun & Devotional. Connecting to God and surrendering to him gives immense mental peace.",
        "cardtextFooter":  "Please listen Sing and Enjoy ",
        
       
        "color":"table-primary"
      },
      {
        "imgsrc":this.urlSafe[1],
        "name": "Krishna Bhajan ",
        "cardtextHeader": "Jai Shri Krishna ",
        "cardtextBody":  "Learning Maths is Fun",
        "cardtextFooter":  "Learning Maths is Fun",
     
        "color":"table-warning"
      },
      {
        "imgsrc":this.urlSafe[2],
        "name": "Krishna Bhajan ",
        "cardtextHeader": "Jai Shri Krishna ",
        "cardtextBody":  "Learning Maths is Fun",
        "cardtextFooter":  "Learning Maths is Fun",
       
        "color":"table-success"
      },
      {
        "imgsrc":this.urlSafe[3],
        "name": "Ganesh Bhajan ",
        "cardtextHeader": "Jai Ganesha ",
        "cardtextBody":  "Learning Maths is Fun",
        "cardtextFooter":  "Learning Maths is Fun",
   
        "color":"table-info"
      },
      {
        "imgsrc":this.urlSafe[4],
        "name": "Krishna Bhajan ",
        "cardtextHeader": "Jai Panduranga",
        "cardtextBody":  "Learning Maths is Fun",
        "cardtextFooter":  "Learning Maths is Fun",
       
        "color":"table-danger"
      }
    ]
  }


  Food()
  {
    this.Heading=this.Headers[1];
    for(let i=0;i<this.show.length;i++)
    {
      if(i==1 || i==9)
      {
        this.show[1]=true;
        this.show[9]=true;
      }
      else
        this.show[i]=false;
    }
    this.navbarOpen =false;

    this.url=["https://www.youtube.com/embed/xitTUOMbcII","https://www.youtube.com/embed/T2k3poiEM2w","https://www.youtube.com/embed/tN2zgLOMznc",
  "https://www.youtube.com/embed/m2a2H28UQAU","https://www.youtube.com/embed/KGYm6JJu2Zw"];
    this.urlSafe=[this.sanitizer.bypassSecurityTrustResourceUrl(this.url[0]),
    this.sanitizer.bypassSecurityTrustResourceUrl(this.url[1]),
    this.sanitizer.bypassSecurityTrustResourceUrl(this.url[2]),
    this.sanitizer.bypassSecurityTrustResourceUrl(this.url[3]),
    this.sanitizer.bypassSecurityTrustResourceUrl(this.url[4])];
    this. groups=[
      {
        "imgsrc":this.urlSafe[0],
        "name": "Krishna Bhajan ",
        "cardtextHeader": "Jai Shri Krishna",  
        "cardtextBody":  "Learning Bhajans is Fun & Devotional. Connecting to God and surrendering to him gives immense mental peace.",
        "cardtextFooter":  "Please listen Sing and Enjoy ",
        
       
        "color":"table-primary"
      },
      {
        "imgsrc":this.urlSafe[1],
        "name": "Krishna Bhajan ",
        "cardtextHeader": "Jai Shri Krishna ",
        "cardtextBody":  "Learning Maths is Fun",
        "cardtextFooter":  "Learning Maths is Fun",
     
        "color":"table-warning"
      },
      {
        "imgsrc":this.urlSafe[2],
        "name": "Krishna Bhajan ",
        "cardtextHeader": "Jai Shri Krishna ",
        "cardtextBody":  "Learning Maths is Fun",
        "cardtextFooter":  "Learning Maths is Fun",
       
        "color":"table-success"
      },
      {
        "imgsrc":this.urlSafe[3],
        "name": "Ganesh Bhajan ",
        "cardtextHeader": "Jai Ganesha ",
        "cardtextBody":  "Learning Maths is Fun",
        "cardtextFooter":  "Learning Maths is Fun",
   
        "color":"table-info"
      },
      {
        "imgsrc":this.urlSafe[4],
        "name": "Krishna Bhajan ",
        "cardtextHeader": "Jai Panduranga",
        "cardtextBody":  "Learning Maths is Fun",
        "cardtextFooter":  "Learning Maths is Fun",
       
        "color":"table-danger"
      }
    ]
  }

  Bhajans()
  {
    this.Heading=this.Headers[2];
    console.log(this.Heading);
    for(let i=0;i<this.show.length;i++)
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

    this.url=["https://www.youtube.com/embed/xitTUOMbcII","https://www.youtube.com/embed/T2k3poiEM2w","https://www.youtube.com/embed/tN2zgLOMznc",
  "https://www.youtube.com/embed/m2a2H28UQAU","https://www.youtube.com/embed/KGYm6JJu2Zw"];
    this.urlSafe=[this.sanitizer.bypassSecurityTrustResourceUrl(this.url[0]),
    this.sanitizer.bypassSecurityTrustResourceUrl(this.url[1]),
    this.sanitizer.bypassSecurityTrustResourceUrl(this.url[2]),
    this.sanitizer.bypassSecurityTrustResourceUrl(this.url[3]),
    this.sanitizer.bypassSecurityTrustResourceUrl(this.url[4])];
    this. groups=[
      {
        "imgsrc":this.urlSafe[0],
        "name": "Krishna Bhajan ",
        "cardtextHeader": "Jai Shri Krishna",  
        "cardtextBody":  "Learning Bhajans is Fun & Devotional. Connecting to God and surrendering to him gives immense mental peace.",
        "cardtextFooter":  "Please listen Sing and Enjoy ",
        
       
        "color":"table-primary"
      },
      {
        "imgsrc":this.urlSafe[1],
        "name": "Krishna Bhajan ",
        "cardtextHeader": "Jai Shri Krishna ",
        "cardtextBody":  "Learning Maths is Fun",
        "cardtextFooter":  "Learning Maths is Fun",
     
        "color":"table-warning"
      },
      {
        "imgsrc":this.urlSafe[2],
        "name": "Krishna Bhajan ",
        "cardtextHeader": "Jai Shri Krishna ",
        "cardtextBody":  "Learning Maths is Fun",
        "cardtextFooter":  "Learning Maths is Fun",
       
        "color":"table-success"
      },
      {
        "imgsrc":this.urlSafe[3],
        "name": "Ganesh Bhajan ",
        "cardtextHeader": "Jai Ganesha ",
        "cardtextBody":  "Learning Maths is Fun",
        "cardtextFooter":  "Learning Maths is Fun",
   
        "color":"table-info"
      },
      {
        "imgsrc":this.urlSafe[4],
        "name": "Krishna Bhajan ",
        "cardtextHeader": "Jai Panduranga",
        "cardtextBody":  "Learning Maths is Fun",
        "cardtextFooter":  "Learning Maths is Fun",
       
        "color":"table-danger"
      }
    ]
  }

  BookSummaries()
  {  
    this.Heading=this.Headers[3];
    for(let i=0;i<this.show.length;i++)
    {
      if(i==3 || i==9)
      {
        this.show[3]=true;
        this.show[9]=true;
      }
      else
        this.show[i]=false;
    }
    this.navbarOpen =false;

    this.url=["https://www.youtube.com/embed/xitTUOMbcII","https://www.youtube.com/embed/T2k3poiEM2w","https://www.youtube.com/embed/tN2zgLOMznc",
  "https://www.youtube.com/embed/m2a2H28UQAU","https://www.youtube.com/embed/KGYm6JJu2Zw"];
    this.urlSafe=[this.sanitizer.bypassSecurityTrustResourceUrl(this.url[0]),
    this.sanitizer.bypassSecurityTrustResourceUrl(this.url[1]),
    this.sanitizer.bypassSecurityTrustResourceUrl(this.url[2]),
    this.sanitizer.bypassSecurityTrustResourceUrl(this.url[3]),
    this.sanitizer.bypassSecurityTrustResourceUrl(this.url[4])];
    this. groups=[
      {
        "imgsrc":this.urlSafe[0],
        "name": "Krishna Bhajan ",
        "cardtextHeader": "Jai Shri Krishna",  
        "cardtextBody":  "Learning Bhajans is Fun & Devotional. Connecting to God and surrendering to him gives immense mental peace.",
        "cardtextFooter":  "Please listen Sing and Enjoy ",
        
       
        "color":"table-primary"
      },
      {
        "imgsrc":this.urlSafe[1],
        "name": "Krishna Bhajan ",
        "cardtextHeader": "Jai Shri Krishna ",
        "cardtextBody":  "Learning Maths is Fun",
        "cardtextFooter":  "Learning Maths is Fun",
     
        "color":"table-warning"
      },
      {
        "imgsrc":this.urlSafe[2],
        "name": "Krishna Bhajan ",
        "cardtextHeader": "Jai Shri Krishna ",
        "cardtextBody":  "Learning Maths is Fun",
        "cardtextFooter":  "Learning Maths is Fun",
       
        "color":"table-success"
      },
      {
        "imgsrc":this.urlSafe[3],
        "name": "Ganesh Bhajan ",
        "cardtextHeader": "Jai Ganesha ",
        "cardtextBody":  "Learning Maths is Fun",
        "cardtextFooter":  "Learning Maths is Fun",
   
        "color":"table-info"
      },
      {
        "imgsrc":this.urlSafe[4],
        "name": "Krishna Bhajan ",
        "cardtextHeader": "Jai Panduranga",
        "cardtextBody":  "Learning Maths is Fun",
        "cardtextFooter":  "Learning Maths is Fun",
       
        "color":"table-danger"
      }
    ]
  }

  Kannada()
  {
    this.Heading=this.Headers[4];
    for(let i=0;i<this.show.length;i++)
    {
      if(i==4 || i==9)
      {
        this.show[4]=true;
        this.show[9]=true;
      }
      else
        this.show[i]=false;
    }
    this.navbarOpen =false;

    this.url=["https://www.youtube.com/embed/xitTUOMbcII","https://www.youtube.com/embed/T2k3poiEM2w","https://www.youtube.com/embed/tN2zgLOMznc",
  "https://www.youtube.com/embed/m2a2H28UQAU","https://www.youtube.com/embed/KGYm6JJu2Zw"];
    this.urlSafe=[this.sanitizer.bypassSecurityTrustResourceUrl(this.url[0]),
    this.sanitizer.bypassSecurityTrustResourceUrl(this.url[1]),
    this.sanitizer.bypassSecurityTrustResourceUrl(this.url[2]),
    this.sanitizer.bypassSecurityTrustResourceUrl(this.url[3]),
    this.sanitizer.bypassSecurityTrustResourceUrl(this.url[4])];
    this. groups=[
      {
        "imgsrc":this.urlSafe[0],
        "name": "Krishna Bhajan ",
        "cardtextHeader": "Jai Shri Krishna",  
        "cardtextBody":  "Learning Bhajans is Fun & Devotional. Connecting to God and surrendering to him gives immense mental peace.",
        "cardtextFooter":  "Please listen Sing and Enjoy ",
        
       
        "color":"table-primary"
      },
      {
        "imgsrc":this.urlSafe[1],
        "name": "Krishna Bhajan ",
        "cardtextHeader": "Jai Shri Krishna ",
        "cardtextBody":  "Learning Maths is Fun",
        "cardtextFooter":  "Learning Maths is Fun",
     
        "color":"table-warning"
      },
      {
        "imgsrc":this.urlSafe[2],
        "name": "Krishna Bhajan ",
        "cardtextHeader": "Jai Shri Krishna ",
        "cardtextBody":  "Learning Maths is Fun",
        "cardtextFooter":  "Learning Maths is Fun",
       
        "color":"table-success"
      },
      {
        "imgsrc":this.urlSafe[3],
        "name": "Ganesh Bhajan ",
        "cardtextHeader": "Jai Ganesha ",
        "cardtextBody":  "Learning Maths is Fun",
        "cardtextFooter":  "Learning Maths is Fun",
   
        "color":"table-info"
      },
      {
        "imgsrc":this.urlSafe[4],
        "name": "Krishna Bhajan ",
        "cardtextHeader": "Jai Panduranga",
        "cardtextBody":  "Learning Maths is Fun",
        "cardtextFooter":  "Learning Maths is Fun",
       
        "color":"table-danger"
      }
    ]
  }
  
  MemoryTips()
  {
    this.Heading=this.Headers[5];
    for(let i=0;i<this.show.length;i++)
    {
      if(i==5 || i==9)
      {
        this.show[2]=true;
        this.show[9]=true;
      }
      else
        this.show[i]=false;
    }
    this.navbarOpen =false;

    this.url=["https://www.youtube.com/embed/xitTUOMbcII","https://www.youtube.com/embed/T2k3poiEM2w","https://www.youtube.com/embed/tN2zgLOMznc",
  "https://www.youtube.com/embed/m2a2H28UQAU","https://www.youtube.com/embed/KGYm6JJu2Zw"];
    this.urlSafe=[this.sanitizer.bypassSecurityTrustResourceUrl(this.url[0]),
    this.sanitizer.bypassSecurityTrustResourceUrl(this.url[1]),
    this.sanitizer.bypassSecurityTrustResourceUrl(this.url[2]),
    this.sanitizer.bypassSecurityTrustResourceUrl(this.url[3]),
    this.sanitizer.bypassSecurityTrustResourceUrl(this.url[4])];
    this. groups=[
      {
        "imgsrc":this.urlSafe[0],
        "name": "Krishna Bhajan ",
        "cardtextHeader": "Jai Shri Krishna",  
        "cardtextBody":  "Learning Bhajans is Fun & Devotional. Connecting to God and surrendering to him gives immense mental peace.",
        "cardtextFooter":  "Please listen Sing and Enjoy ",
        
       
        "color":"table-primary"
      },
      {
        "imgsrc":this.urlSafe[1],
        "name": "Krishna Bhajan ",
        "cardtextHeader": "Jai Shri Krishna ",
        "cardtextBody":  "Learning Maths is Fun",
        "cardtextFooter":  "Learning Maths is Fun",
     
        "color":"table-warning"
      },
      {
        "imgsrc":this.urlSafe[2],
        "name": "Krishna Bhajan ",
        "cardtextHeader": "Jai Shri Krishna ",
        "cardtextBody":  "Learning Maths is Fun",
        "cardtextFooter":  "Learning Maths is Fun",
       
        "color":"table-success"
      },
      {
        "imgsrc":this.urlSafe[3],
        "name": "Ganesh Bhajan ",
        "cardtextHeader": "Jai Ganesha ",
        "cardtextBody":  "Learning Maths is Fun",
        "cardtextFooter":  "Learning Maths is Fun",
   
        "color":"table-info"
      },
      {
        "imgsrc":this.urlSafe[4],
        "name": "Krishna Bhajan ",
        "cardtextHeader": "Jai Panduranga",
        "cardtextBody":  "Learning Maths is Fun",
        "cardtextFooter":  "Learning Maths is Fun",
       
        "color":"table-danger"
      }
    ]
  }
    
  Programming()
  {
    this.Heading=this.Headers[6];
    for(let i=0;i<this.show.length;i++)
    {
      if(i==6 || i==9)
      {
        this.show[6]=true;
        this.show[9]=true;
      }
      else
        this.show[i]=false;
    }
    this.navbarOpen =false;

    this.url=["https://www.youtube.com/embed/xitTUOMbcII","https://www.youtube.com/embed/T2k3poiEM2w","https://www.youtube.com/embed/tN2zgLOMznc",
  "https://www.youtube.com/embed/m2a2H28UQAU","https://www.youtube.com/embed/KGYm6JJu2Zw"];
    this.urlSafe=[this.sanitizer.bypassSecurityTrustResourceUrl(this.url[0]),
    this.sanitizer.bypassSecurityTrustResourceUrl(this.url[1]),
    this.sanitizer.bypassSecurityTrustResourceUrl(this.url[2]),
    this.sanitizer.bypassSecurityTrustResourceUrl(this.url[3]),
    this.sanitizer.bypassSecurityTrustResourceUrl(this.url[4])];
    this. groups=[
      {
        "imgsrc":this.urlSafe[0],
        "name": "Krishna Bhajan ",
        "cardtextHeader": "Jai Shri Krishna",  
        "cardtextBody":  "Learning Bhajans is Fun & Devotional. Connecting to God and surrendering to him gives immense mental peace.",
        "cardtextFooter":  "Please listen Sing and Enjoy ",
        
       
        "color":"table-primary"
      },
      {
        "imgsrc":this.urlSafe[1],
        "name": "Krishna Bhajan ",
        "cardtextHeader": "Jai Shri Krishna ",
        "cardtextBody":  "Learning Maths is Fun",
        "cardtextFooter":  "Learning Maths is Fun",
     
        "color":"table-warning"
      },
      {
        "imgsrc":this.urlSafe[2],
        "name": "Krishna Bhajan ",
        "cardtextHeader": "Jai Shri Krishna ",
        "cardtextBody":  "Learning Maths is Fun",
        "cardtextFooter":  "Learning Maths is Fun",
       
        "color":"table-success"
      },
      {
        "imgsrc":this.urlSafe[3],
        "name": "Ganesh Bhajan ",
        "cardtextHeader": "Jai Ganesha ",
        "cardtextBody":  "Learning Maths is Fun",
        "cardtextFooter":  "Learning Maths is Fun",
   
        "color":"table-info"
      },
      {
        "imgsrc":this.urlSafe[4],
        "name": "Krishna Bhajan ",
        "cardtextHeader": "Jai Panduranga",
        "cardtextBody":  "Learning Maths is Fun",
        "cardtextFooter":  "Learning Maths is Fun",
       
        "color":"table-danger"
      }
    ]
  }
  Books()
  {
    this.Heading=this.Headers[7];
    for(let i=0;i<this.show.length;i++)
    {
      if(i==7 || i==9)
      {
        this.show[7]=true;
        this.show[9]=true;
      }
      else
        this.show[i]=false;
    }
    this.navbarOpen =false;

    this.url=["https://www.youtube.com/embed/xitTUOMbcII","https://www.youtube.com/embed/T2k3poiEM2w","https://www.youtube.com/embed/tN2zgLOMznc",
  "https://www.youtube.com/embed/m2a2H28UQAU","https://www.youtube.com/embed/KGYm6JJu2Zw"];
    this.urlSafe=[this.sanitizer.bypassSecurityTrustResourceUrl(this.url[0]),
    this.sanitizer.bypassSecurityTrustResourceUrl(this.url[1]),
    this.sanitizer.bypassSecurityTrustResourceUrl(this.url[2]),
    this.sanitizer.bypassSecurityTrustResourceUrl(this.url[3]),
    this.sanitizer.bypassSecurityTrustResourceUrl(this.url[4])];
    this. groups=[
      {
        "imgsrc":this.urlSafe[0],
        "name": "Krishna Bhajan ",
        "cardtextHeader": "Jai Shri Krishna",  
        "cardtextBody":  "Learning Bhajans is Fun & Devotional. Connecting to God and surrendering to him gives immense mental peace.",
        "cardtextFooter":  "Please listen Sing and Enjoy ",
        
       
        "color":"table-primary"
      },
      {
        "imgsrc":this.urlSafe[1],
        "name": "Krishna Bhajan ",
        "cardtextHeader": "Jai Shri Krishna ",
        "cardtextBody":  "Learning Maths is Fun",
        "cardtextFooter":  "Learning Maths is Fun",
     
        "color":"table-warning"
      },
      {
        "imgsrc":this.urlSafe[2],
        "name": "Krishna Bhajan ",
        "cardtextHeader": "Jai Shri Krishna ",
        "cardtextBody":  "Learning Maths is Fun",
        "cardtextFooter":  "Learning Maths is Fun",
       
        "color":"table-success"
      },
      {
        "imgsrc":this.urlSafe[3],
        "name": "Ganesh Bhajan ",
        "cardtextHeader": "Jai Ganesha ",
        "cardtextBody":  "Learning Maths is Fun",
        "cardtextFooter":  "Learning Maths is Fun",
   
        "color":"table-info"
      },
      {
        "imgsrc":this.urlSafe[4],
        "name": "Krishna Bhajan ",
        "cardtextHeader": "Jai Panduranga",
        "cardtextBody":  "Learning Maths is Fun",
        "cardtextFooter":  "Learning Maths is Fun",
       
        "color":"table-danger"
      }
    ]
  }
  ContactUS()
  {
    this.Heading=this.Headers[8];
    this.show[8]=true;
    for(let i=0;i<this.show.length;i++)
    {
      if(i!==8)
        this.show[i]=false;
    }
    this.navbarOpen =false;
    
    this.url=["https://www.youtube.com/embed/xitTUOMbcII","https://www.youtube.com/embed/T2k3poiEM2w","https://www.youtube.com/embed/tN2zgLOMznc",
  "https://www.youtube.com/embed/m2a2H28UQAU","https://www.youtube.com/embed/KGYm6JJu2Zw"];
    this.urlSafe=[this.sanitizer.bypassSecurityTrustResourceUrl(this.url[0]),
    this.sanitizer.bypassSecurityTrustResourceUrl(this.url[1]),
    this.sanitizer.bypassSecurityTrustResourceUrl(this.url[2]),
    this.sanitizer.bypassSecurityTrustResourceUrl(this.url[3]),
    this.sanitizer.bypassSecurityTrustResourceUrl(this.url[4])];
    this. groups=[
      {
        "imgsrc":this.urlSafe[0],
        "name": "Krishna Bhajan ",
        "cardtextHeader": "Jai Shri Krishna",  
        "cardtextBody":  "Learning Bhajans is Fun & Devotional. Connecting to God and surrendering to him gives immense mental peace.",
        "cardtextFooter":  "Please listen Sing and Enjoy ",
        
       
        "color":"table-primary"
      },
      {
        "imgsrc":this.urlSafe[1],
        "name": "Krishna Bhajan ",
        "cardtextHeader": "Jai Shri Krishna ",
        "cardtextBody":  "Learning Maths is Fun",
        "cardtextFooter":  "Learning Maths is Fun",
     
        "color":"table-warning"
      },
      {
        "imgsrc":this.urlSafe[2],
        "name": "Krishna Bhajan ",
        "cardtextHeader": "Jai Shri Krishna ",
        "cardtextBody":  "Learning Maths is Fun",
        "cardtextFooter":  "Learning Maths is Fun",
       
        "color":"table-success"
      },
      {
        "imgsrc":this.urlSafe[3],
        "name": "Ganesh Bhajan ",
        "cardtextHeader": "Jai Ganesha ",
        "cardtextBody":  "Learning Maths is Fun",
        "cardtextFooter":  "Learning Maths is Fun",
   
        "color":"table-info"
      },
      {
        "imgsrc":this.urlSafe[4],
        "name": "Krishna Bhajan ",
        "cardtextHeader": "Jai Panduranga",
        "cardtextBody":  "Learning Maths is Fun",
        "cardtextFooter":  "Learning Maths is Fun",
       
        "color":"table-danger"
      }
    ]
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
    
      "color":"table-primary"
    },
    {
      "imgsrc":this.urlSafe[1],
      "name": "Bhajans",
      "cardtextHeader": "Learning Maths is Fun  ",
        "cardtextBody":  "Learning Maths is Fun",
        "cardtextFooter":  "Learning Maths is Fun",
        "color":"table-primary"
    }];
    constructor(public sanitizer: DomSanitizer) {

 
    }
  Demo(){
    this.show[9]=true;
    for(let i=0;i<this.show.length;i++)
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
    this.show[11]=false;
    this.show[10]=false;
  }
}
