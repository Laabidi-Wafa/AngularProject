import { Component, OnInit } from '@angular/core';
import {ingredient} from '../shared/ingredient.model';
@Component({
  selector: 'app-shopping-list',
  templateUrl: './shopping-list.component.html',
  styleUrls: ['./shopping-list.component.css']
})
export class ShoppingListComponent implements OnInit {
  ingredients:ingredient[] = [
    new ingredient('Apples',2),
    new ingredient('Tomato',5),
    new ingredient('Carrot',3)
  ];
  constructor() { }

  ngOnInit(): void {
  }

}
