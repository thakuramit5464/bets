import { Component } from '@angular/core';

@Component({
  selector: 'app-collect-data',
  templateUrl: './collect-data.component.html',
  styleUrl: './collect-data.component.css'
})

export class CollectDataComponent {

  title!:string
  description!:string
  file_path!:string
  video_link!:string
  help_comment!:string

  saveArticle(){
    var inputData= {
       title: this.title,
       description: this.description,
       file_path: this.file_path,
       video_link: this.video_link,
       help_comment: this.help_comment,
      
    }
  }
}
