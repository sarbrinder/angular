import { Component,Input, ViewChild,AfterViewInit } from '@angular/core';

import { PostComponent } from './post/post.component';
import { FormGroup, FormControl } from '@angular/forms';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements AfterViewInit {
  title = 'healthang';
  parentMessage:string="Message from Parent updated";
  message:string='as';
  fromChildMessage:string='dfd';
  @ViewChild(PostComponent) childComp='ss';

  ngAfterViewInit() {
    //this.message=this.childComp.postParentmessage;
  }
  
  recieveMessage($event:string){
      this.fromChildMessage=$event;
  }
}

