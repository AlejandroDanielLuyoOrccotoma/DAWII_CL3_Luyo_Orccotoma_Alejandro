import { Component, OnInit } from '@angular/core';
import { HumanService } from './services/human.service';
import { Human } from './human';
import { MaterialModule } from '../../Angular/material/material.module';

@Component({
  selector: 'app-pregunta1',
  standalone: true,
  imports: [MaterialModule],
  templateUrl: './pregunta1.component.html',
  styleUrls: ['./pregunta1.component.css']
})
export class Pregunta1Component implements OnInit {
  displayedColumns: string[] = ['id', 'name', 'status', 'species', 'gender', 'origin', 'location', 'image'];
  humans: Human[] = [];

  constructor(private humanService: HumanService) { }

  ngOnInit(): void {
    this.humanService.getHumanCharacters().subscribe((data: Human[]) => {
      console.log(data);
      this.humans = data;
    });
  }
}
