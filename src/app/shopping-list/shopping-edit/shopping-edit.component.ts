import { Ingredient } from './../../shared/ingredient.model';
import { ShoppingListService } from './../shopping-list.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-shopping-edit',
  templateUrl: './shopping-edit.component.html',
  styleUrls: ['./shopping-edit.component.css']
})
export class ShoppingEditComponent implements OnInit {
  editName = '';
  editAmount: number;


  constructor(private slService: ShoppingListService) { }

  ngOnInit() {
  }

  onAddIngredient() {
    this.slService.addIngredient(new Ingredient(this.editName, this.editAmount));
  }
}
