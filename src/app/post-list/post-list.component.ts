import { Component,Input } from '@angular/core';

import { PostService } from '../services/post.service';

@Component({
  selector: 'app-post-list',
  templateUrl: './post-list.component.html',
  styleUrls: ['./post-list.component.css'],
  
})
export class PostListComponent {
  posts:Array<any>=[];
  constructor(private PostService:PostService){
    //let postServiceData = new PostService();
    this.posts = PostService.postArray;
  }
    @Input() postParent:string="ss";
    name:string='';
    email:string='';
    address:string='';

    customerData= {name:'sarb',city:'New York',country:'US'}

    userData:Array<any>=[];

    saveData(){
      this.userData.push({
"name":this.name,
"email":this.email,
"address":this.address

      });

      //console.log(this.userData);
    }
    onDelete(i:number){
      console.log(i);
      delete this.userData[i];
      console.log( this.userData.length);
    }

    childMessage:string ="Message from child Post";
}
