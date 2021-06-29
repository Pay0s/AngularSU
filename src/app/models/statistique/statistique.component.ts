import { Component, OnInit } from '@angular/core';
import { stat } from 'fs';
import { statistique } from '../Statistique';

@Component({
  selector: 'app-statistique',
  templateUrl: './statistique.component.html',
  styleUrls: ['./statistique.component.css']
})
export class StatistiqueComponent implements OnInit {


Ferrari = new statistique("Ferrari", 560, 22)
Corvette = new statistique("Corvette",460, 12)


  constructor() { }

  ngOnInit(): void {
  }

}
