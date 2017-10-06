import {
  RecipeService
} from './../recipe.service';
import {
  Component,
  OnInit,
  Input
} from '@angular/core';
import {
  Recipe
} from '../recipe.model';

@Component({
  selector: 'app-recipes-detail',
  templateUrl: './recipes-detail.component.html',
  styleUrls: ['./recipes-detail.component.css']
})
export class RecipesDetailComponent implements OnInit {
  @Input() recipeDetail: Recipe;
  constructor(private recipeService: RecipeService) {}

  ngOnInit() {}

  onAddIngredientToList() {
    this.recipeService.addIngredientToShoppingList(this.recipeDetail.ingredients);
  }
}
