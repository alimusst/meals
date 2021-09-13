class AreaBasedList extends HTMLElement {
  set meals(meals) {
    this._meals = meals;
    this.render();
  }

  render() {
    this.innerHTML = `
    <style>
      area-based-list {
        display: flex;
        flex-wrap: wrap;
        justify-content: center;
        gap: 8px;
      }
    </style>
    `;

    this._meals.forEach((meal) => {
      this.innerHTML += `<a class="btn btn-primary ${meal.strArea.toLowerCase()}" href="#" role="button">${
        meal.strArea
      }</a>`;
    });

    this.innerHTML +=
      '<input class="btn btn-secondary reset" type="reset" value="Batalkan">';
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

customElements.define('area-based-list', AreaBasedList);
