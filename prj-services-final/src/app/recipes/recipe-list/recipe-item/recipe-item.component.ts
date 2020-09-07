import { Component, OnInit, Input } from '@angular/core';

import { Recipe } from '../../recipe.model';
import { RecipeService } from '../../recipe.service';

@Component({
  selector: 'app-recipe-item',
  templateUrl: './recipe-item.component.html',
  styleUrls: ['./recipe-item.component.css']
})
export class RecipeItemComponent implements OnInit {
  @Input() recipe: Recipe;
  @Input() index: number;

  // constructor(private recipeService: RecipeService) { }

  ngOnInit() {
    console.log("the index in recipe-item is: ", this.index);
  }

  // onSelected() {
  //   this.recipeService.recipeSelected.emit(this.recipe);
  // }

}
