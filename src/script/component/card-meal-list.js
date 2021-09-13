import './card-meal-item';

class CardMealList extends HTMLElement {
  set meals(meals) {
    this._meals = meals;
    this.render();
  }

  render() {
    this.innerHTML = `
    <style>
      * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
      }

      card-meal-list {
        display: flex;
        flex-wrap: wrap;
      }
    </style>
    `;

    this._meals.forEach((meal) => {
      const mealItemElement = document.createElement('card-meal-item');
      mealItemElement.meal = meal;
      this.appendChild(mealItemElement);
    });
  }

  renderError(message) {
    this.innerHTML = `
    <style>
      .placeholder {
        font-weight: lighter;
        color: rgba(0, 0, 0, 0.5);
        -webkit-user-select: none;
        -moz-user-select: none;
        -ms-user-select: none;
        user-select: none;
      }
    </style>
    `;

    this.innerHTML += `<h2 class='placeholder'>${message}</h2>`;
  }
}

customElements.define('card-meal-list', CardMealList);
