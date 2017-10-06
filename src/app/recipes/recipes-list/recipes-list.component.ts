import {
  RecipeService
} from './../recipe.service';
import {
  Component,
  OnInit,
  Output,
  EventEmitter
} from '@angular/core';
import {
  Recipe
} from '../recipe.model';

@Component({
  selector: 'app-recipes-list',
  templateUrl: './recipes-list.component.html',
  styleUrls: ['./recipes-list.component.css']
})
export class RecipesListComponent implements OnInit {
  recipes: Recipe[] = [];
  constructor(private recipesService: RecipeService) {}

  ngOnInit() {
    this.recipes = this.recipesService.getRecipes();
  }

  onRecipeSelect(recipe: Recipe) {
    this.recipesService.selectRecipeEvent.emit(recipe);
  }
}
