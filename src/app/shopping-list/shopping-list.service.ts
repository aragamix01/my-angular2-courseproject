import { EventEmitter } from '@angular/core';
import { Ingredient } from './../shared/ingredient.model';
export class ShoppingListService {
    ingreDientsChangedEvent = new EventEmitter<Ingredient[]>();
    private ingredients: Ingredient[] = [
        new Ingredient('Apple', 5),
        new Ingredient('Tomatoes', 15),
        new Ingredient('Carrot', 3)
    ];

    getIngredients() {
        return this.ingredients.slice();
    }

    addIngredient(ingredient: Ingredient) {
        this.ingredients.push(ingredient);
        this.ingreDientsChangedEvent.emit(this.ingredients.slice());
    }

    addIngredients(ingredients: Ingredient[]) {
        this.ingredients.push(...ingredients);
        this.ingreDientsChangedEvent.emit(this.ingredients.slice());
    }
}
