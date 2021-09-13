class MealItem extends HTMLElement {
  set meal(meal) {
    this._meal = meal;
    this.render();
  }

  render() {
    this.innerHTML = `
    <style>
      meal-item {
        display: block;
        margin-bottom: 18px;
        padding: 24px;
        box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);
        border-radius: 10px;
        overflow: hidden;
      }

      .meal-thumb-image {
        width: 100%;
        display: block;
        padding: 20px 0;
        object-fit: cover;
      }

      meal-item > p {
        margin: 0;
      }
    </style>
    <h2>${this._meal.strMeal}</h2>
    <p class='meal-category'>Category: ${this._meal.strCategory}</p>
    <img class='meal-thumb-image' src='${this._meal.strMealThumb}' alt='Thumbnail Image'>
    <div class='meal-info'>
      <h3>Instructions: </h3>
      <p>${this._meal.strInstructions}</p>
    </div>
    `;
  }
}

customElements.define('meal-item', MealItem);
