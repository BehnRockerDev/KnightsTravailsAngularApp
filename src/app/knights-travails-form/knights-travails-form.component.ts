import { Component, OnInit } from '@angular/core';
import { KnightMovesService } from '../knight-moves.service';

@Component({
  selector: 'knights-travails-form',
  templateUrl: './knights-travails-form.component.html',
  styleUrls: ['./knights-travails-form.component.css']
})
export class KnightsTravailsFormComponent implements OnInit {
  title = "Knights Travails";
  public coordinates: string[] = [];

  constructor(private service: KnightMovesService) { }

  ngOnInit(): void { }

  onSubmitClick() {
    this.service.getMoveList().subscribe(x => this.coordinates = x)
  }
}
