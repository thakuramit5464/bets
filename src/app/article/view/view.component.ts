import { Component, OnInit } from '@angular/core';

import { DataService } from '../data.service';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';
import { Article } from '../../model/article.model';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-view',
  templateUrl: './view.component.html',
  styleUrl: './view.component.css'
})
export class ViewComponent implements OnInit {
  Id: any;
  viewData: any;

 constructor(private dataService: DataService,
              private http: HttpClient,
              private route: ActivatedRoute){}
  
ngOnInit(){
      this.route.params.subscribe((view) =>{
        this.Id= view.id;
        console.log(view);
      })

    this.dataService.viewData(this.Id).subscribe((view) => {
    //  this.viewData= view ;
        console.log(view);
  })
   
  }
  
  
  
  
  

}
