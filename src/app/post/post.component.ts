import { Component, OnInit, Input, Output, EventEmitter} from '@angular/core';
import { PostService } from '../services/post.service';

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.css'],
  
})
export class PostComponent{
    title:string='List of Posts';
    messageKeyup:string='';
    postParentmessage:string="Message from post parent message";
    outputChildMessage:string="Message from Child Component  Via Output ";
    postTitle:string='';
    postDescription:string='';
    imgSrc:string='';

    postArr:Array<string>=['Post1','Post2','Post3'];

    postObject:Array<any>=[
      {id:1, postTitles:'Post 1'},
      {id:2, postTitles:'Post 2'},
      {id:3, postTitles:'Post 3'},
      {id:4, postTitles:'Post 4'},
      {id:5, postTitles:'Post 5'},
    ]

    postObject1:Array<any>=[
      {id:1, postTitles:'Post New Post1'},
     
    ]

    isActive:boolean=true;
    @Output() messageEvent = new EventEmitter<string>();
   @Input() fromParent:string='ss';

   posts:Array<any>=[];
   constructor(private PostService:PostService){
     //let postServiceData = new PostService();
     this.posts = PostService.postArray;
   }

   sendMessage(){
    this.messageEvent.emit(this.outputChildMessage);
   }

   onKeyUp(username:string){
      this.messageKeyup=username;
   }
}
