import {
  ShoppingListService
} from './../shopping-list/shopping-list.service';
import {
  Ingredient
} from './../shared/ingredient.model';
import {
  EventEmitter,
  Injectable
} from '@angular/core';
import {
  Recipe
} from './recipe.model';

@Injectable()
export class RecipeService {
  selectRecipeEvent = new EventEmitter < Recipe > ();

  private recipes: Recipe[] = [
    new Recipe('A test recipe',
      'This is simply a test',
      'http://images.media-allrecipes.com/images/58656.png', [
        new Ingredient('Meat', 1),
        new Ingredient('Bread', 2)
      ]),
    new Recipe('Another test recipe',
      'This is simply a test',
      'http://images.media-allrecipes.com/images/58656.png', [
        new Ingredient('Beef', 1),
        new Ingredient('Bread', 1)
      ])
  ];

  constructor(private slService: ShoppingListService) {}

  getRecipes() {
    return this.recipes.slice();
  }

  addIngredientToShoppingList(ingredients: Ingredient[]) {
    this.slService.addIngredients(ingredients);
  }
}
