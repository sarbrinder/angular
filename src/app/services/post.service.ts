import {Injectable, Injector} from '@angular/core';
@Injectable({
    providedIn:'root',
})

export class PostService{

   
    postArray:Array<any>=[
        {id:1, postTitles:'Post New 1'},
        {id:2, postTitles:'Post New 2'},
        {id:3, postTitles:'Post New 3'},
        {id:4, postTitles:'Post New 4'},
        {id:5, postTitles:'Post New 5'},
       
      ]

      addPost(data:any){
        this.postArray.push(data);
      }
}