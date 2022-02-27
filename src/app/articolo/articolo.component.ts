import { Component, Input, OnInit } from '@angular/core';
import { Article } from '../models/models';

@Component({
  selector: 'app-articolo',
  templateUrl: './articolo.component.html',
  styleUrls: ['./articolo.component.scss']
})
export class ArticoloComponent implements OnInit {

  @Input()
  articolo!:Article;

  constructor() { }

  ngOnInit(): void {
  }

}
