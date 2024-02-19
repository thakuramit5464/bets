import { Component, OnInit } from '@angular/core';
import { DataService } from './data.service';
import { ActivatedRoute, Router } from '@angular/router';





@Component({
  selector: 'app-article',
  templateUrl: './article.component.html',
  styleUrl: './article.component.css'
})
export class ArticleComponent implements OnInit{
 
 data: any[];
 

 
  constructor(private dataService: DataService,
              private router: Router ,
              private route: ActivatedRoute){
  
  }
ngOnInit() {
    this.dataService.getData()
    .subscribe(
      (result:any[]) => {
        this.data = result;
        console.log(result)
      },
      (error) => {
        console.error('Error Fetching Data:',error)
      }
     )
   
     
     }
    //  onviewDetail(){
    //   this.router.navigate(['./view/:id'])
    //  }
   
    
  }

 
 


   




