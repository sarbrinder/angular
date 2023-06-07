import { Component } from '@angular/core';
import { PostService } from '../services/post.service';
import { Post } from '../models/post';
import { FormControl, FormGroup, NgForm, Validators,FormBuilder,FormArray } from '@angular/forms';

@Component({
  selector: 'app-practice',
  templateUrl: './practice.component.html',
  styleUrls: ['./practice.component.css']
})
export class PracticeComponent {
  form:any;
  constructor(fb : FormBuilder){
    this.form = fb.group({
      fullName:['',[
        Validators.required,
        Validators.minLength(25)
      ]]
    })
  //constructor(private PostService:PostService){
    //let postServiceData = new PostService();
    //this.posts = PostService.postArray;
    this.form=new FormGroup({
      fullName:new FormControl('',
      [
        Validators.required,
        Validators.minLength(25)
      ]
      ),
      email:new FormControl(),
      address:new FormControl()
    });
  }

  get fullName(){
    return this.form.get('fullName');
  }
  addValue(){
   // let newPost:Post={id:1,postTitles:'Post New 6'}
   // this.PostService.addPost(newPost);
  }

  onSubmit(f:NgForm){
    
  }
  onSubmits(){
      this.form.value;
  }
}
