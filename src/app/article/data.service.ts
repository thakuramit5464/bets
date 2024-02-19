import { HttpClient } from '@angular/common/http';
import { Injectable, OnInit } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DataService  implements OnInit{

  
  private apiUrl = 'http://localhost:3000/get/data';

  constructor(private http: HttpClient) { }



  ngOnInit() {
   
    
  }
  getData():Observable<any>{
    return this.http.get(this.apiUrl);
  }
   
  viewData(id: string):Observable<any> {
    console.log(  this.http.get('this.apiUrl/'+ id ))
    return this.http.get('this.apiUrl/'+ id );
   
  }
    

  
}



