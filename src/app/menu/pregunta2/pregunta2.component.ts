import { Component } from '@angular/core';
import { MaterialModule } from '../../Angular/material/material.module';
import { Post } from './post';
import { PostService } from './services/post.service';

@Component({
  selector: 'app-pregunta2',
  standalone: true,
  imports: [MaterialModule],
  templateUrl: './pregunta2.component.html',
  styleUrl: './pregunta2.component.css'
})
export class Pregunta2Component {

  displayedColumns: string[] = ['postId', 'id', 'name', 'email', 'body'];
  comments: Post[] = [];

  constructor(private postService: PostService) { }

  ngOnInit(): void {
    this.postService.getCommentsWithDomain('garfield.biz').subscribe((data: Post[]) => {
      console.log(data);
      this.comments = data;
    });
  }
}
