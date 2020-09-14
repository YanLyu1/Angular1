import { Component, OnDestroy, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';
import { Post } from './post.model';
import { PostService } from './posts.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit, OnDestroy {
  loadedPosts: Post[] = [];
  isFetching = false;
  error = null;
  private errorSubscription: Subscription;

  constructor(private http: HttpClient, private postsService: PostService) {}

  ngOnInit() {
    // this.isFetching = true;
    // this.postsService.fetchPosts().subscribe(
    //   posts => {
    //     this.isFetching = false;
    //     this.loadedPosts = posts;
    //   }
    // );
    this.errorSubscription = this.postsService.error.subscribe(errorMessage => {
      this.error = errorMessage;
    })
    this.onFetchPosts();
  }

  onCreatePost(postData: Post) {
    // Send Http request
    this.postsService.createAndStorePost(postData.title, postData.content);
  }

  onFetchPosts() {
    // Send Http request
    this.isFetching = true;
    this.postsService.fetchPosts().subscribe(
      posts => {
        this.isFetching = false;
        this.loadedPosts = posts;
      },
      error => {
        this.isFetching = false;
        this.error = error.message;
        console.log(error);
      }
    );
  }

  onClearPosts() {
    // Send Http request
    this.postsService.deletePost().subscribe(() => {
      this.loadedPosts = [];
    }
    );
  }

  onHandleError() {
    this.error = null;
  }

  ngOnDestroy() {
    this.errorSubscription.unsubscribe();
  }

}
