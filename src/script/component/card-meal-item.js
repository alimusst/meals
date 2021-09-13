class CardMealItem extends HTMLElement {
  set meal(meal) {
    this._meal = meal;
    this.render();
  }

  render() {
    this.innerHTML = `
    <style>
      card-meal-item {
        display: block;
        width: 50%;
        margin-bottom: 18px;
        padding: 10px;
        box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);
        border-radius: 10px;
        overflow: hidden;
      }

      .card-meal-thumb {
        display: block;
        width: 100%;
        padding: 20px 0;
        object-fit: cover;
      }
    </style>
    <img class='card-meal-thumb' src='${this._meal.strMealThumb}' alt='Thumbnail Image'>
    <h2>${this._meal.strMeal}</h2>
    <a href='#' class='link' data-id='${this._meal.idMeal}'>Get the recipe</a>
    `;
  }
}

customElements.define('card-meal-item', CardMealItem);
